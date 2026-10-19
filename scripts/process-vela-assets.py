import os
import cv2
import numpy as np
import shutil

BASE_DIR = r"e:\Projects\GENESI FRONTEND"
LOGO_SRC = os.path.join(BASE_DIR, "WEB PORTE", "Logo minimalista VELA by Genesi.png")
WEB_PORTE_DIR = os.path.join(BASE_DIR, "WEB PORTE", "boschetto foto", "foto web")
PUBLIC_DIR = os.path.join(BASE_DIR, "genesi-web", "public")
VELA_IMG_DIR = os.path.join(PUBLIC_DIR, "images", "vela")
VELA_DOORS_DIR = os.path.join(VELA_IMG_DIR, "doors")

os.makedirs(VELA_DOORS_DIR, exist_ok=True)

# 1. Process Logo
print("Processing Logo...")
img = cv2.imread(LOGO_SRC, cv2.IMREAD_GRAYSCALE)
if img is None:
    raise FileNotFoundError(f"Could not load logo from {LOGO_SRC}")

# Identify text bbox
# Invert: text should be 255
_, inv = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)
y_indices, x_indices = np.where(inv > 0)
min_x, max_x = int(x_indices.min()), int(x_indices.max())
min_y, max_y = int(y_indices.min()), int(y_indices.max())

pad = 40
x0 = max(0, min_x - pad)
y0 = max(0, min_y - pad)
x1 = min(img.shape[1], max_x + pad)
y1 = min(img.shape[0], max_y + pad)

crop = img[y0:y1, x0:x1]
crop_inv = inv[y0:y1, x0:x1]

# High quality antialiased alpha map
# Normalized alpha from inverse grayscale
crop_float = crop.astype(np.float32)
# White bg is ~255, black text is ~0
alpha_float = np.clip((245.0 - crop_float) / 235.0, 0.0, 1.0)
alpha_u8 = (alpha_float * 255).astype(np.uint8)

# Dark version
h, w = crop.shape
dark_rgba = np.zeros((h, w, 4), dtype=np.uint8)
dark_rgba[:, :, 0] = 18
dark_rgba[:, :, 1] = 18
dark_rgba[:, :, 2] = 18
dark_rgba[:, :, 3] = alpha_u8
cv2.imwrite(os.path.join(VELA_IMG_DIR, "vela-logo-dark.png"), dark_rgba)

# White version
white_rgba = np.zeros((h, w, 4), dtype=np.uint8)
white_rgba[:, :, 0] = 255
white_rgba[:, :, 1] = 255
white_rgba[:, :, 2] = 255
white_rgba[:, :, 3] = alpha_u8
cv2.imwrite(os.path.join(VELA_IMG_DIR, "vela-logo-white.png"), white_rgba)

# Generate Vector SVG using contours with CCOMP (2-level hierarchy: exterior contours and interior holes)
contours, hierarchy = cv2.findContours(crop_inv, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

def contour_to_svg_path(cnt):
    pts = cnt.squeeze()
    if len(pts) < 3:
        return ""
    d_parts = [f"M {pts[0][0]:.1f},{pts[0][1]:.1f}"]
    for pt in pts[1:]:
        d_parts.append(f"L {pt[0]:.1f},{pt[1]:.1f}")
    d_parts.append("Z")
    return " ".join(d_parts)

path_strings = []
if hierarchy is not None:
    for i, cnt in enumerate(contours):
        # Slightly approximate to eliminate single-pixel stepping while preserving sharp corners
        epsilon = 0.45
        approx = cv2.approxPolyDP(cnt, epsilon, True)
        p = contour_to_svg_path(approx)
        if p:
            path_strings.append(p)

combined_path = " ".join(path_strings)

svg_dark_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="currentColor" fill-rule="evenodd">
  <path d="{combined_path}" />
</svg>'''

svg_white_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="#FFFFFF" fill-rule="evenodd">
  <path d="{combined_path}" />
</svg>'''

with open(os.path.join(VELA_IMG_DIR, "vela-logo-dark.svg"), "w", encoding="utf-8") as f:
    f.write(svg_dark_content)

with open(os.path.join(VELA_IMG_DIR, "vela-logo-white.svg"), "w", encoding="utf-8") as f:
    f.write(svg_white_content)

print("Saved SVG and PNG logos to", VELA_IMG_DIR)

# 2. Copy WebP Images
print("Copying WebP Images from", WEB_PORTE_DIR)
webp_files = [f for f in os.listdir(WEB_PORTE_DIR) if f.lower().endswith(".webp")]
for f in webp_files:
    src_f = os.path.join(WEB_PORTE_DIR, f)
    dst_f = os.path.join(VELA_DOORS_DIR, f)
    shutil.copy2(src_f, dst_f)
print(f"Copied {len(webp_files)} WebP photos to {VELA_DOORS_DIR}")
