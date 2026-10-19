import os
from PIL import Image

SRC_DIR = r"E:\Projects\GENESI FRONTEND\WEB PORTE\IMG GENERATE"
DEST_BASE = r"e:\Projects\GENESI FRONTEND\genesi-web\public\images\vela"

CATEGORIES = {
    "hotel": [
        "Arenaria oak hotel door diptych.png",
        "Bronze-Framed Espresso Hotel Door.png",
        "Elegant Green Hotel Door.png",
        "Espresso Oak Door with Bronze RFID Detail.png",
        "Espresso oak and bronze door details.png",
        "Essenza hotel door in ash and bronze.png",
        "Fluted oak boutique hotel door.png",
        "Forest Green Hotel Door Details.png",
        "Greige hotel door with brass accent.png",
        "Italian hotel lock and oak elegance.png",
        "Italian walnut hotel door with bronze inlay.png",
        "Ivory hotel door with brass details.png",
        "Limestone Guestroom Door in a Sunlit Corridor.png",
        "Luxurious walnut and bronze hotel door.png",
        "Oliva hotel door details.png",
        "Olive-Grey Hotel Door, Italian Design.png",
        "Pietra limestone hotel door details.png",
        "Warm Oak Luxury Hotel Entrance.png",
        "Warm ashwood room door in boutique hotel.png",
    ],
    "residential": [
        "Alba ivory door detail diptych.png",
        "Bruma Greige Pivot Door Detail Diptych.png",
        "Burnt Sienna Double Doors in Travertine.png",
        "Elegant warm white pocket door.png",
        "Fluted oak door, serene passage.png",
        "Graphite Pivot Door with Brass Detail.png",
        "Luxury reeded oak door with bronze inlay.png",
        "Quiet luxury- smoked oak pivot door.png",
        "ROVERE Smoked Oak Door Details.png",
        "Riga walnut door with bronze accents.png",
        "Satin bronze reeded glass door.png",
        "Smoked oak, satin bronze door details.png",
        "Terra Door- Brass Handles and Geometric Relief.png",
        "VELA Door in a Calm Italian Interior.png",
        "VELA Rovere door details in smoked oak.png",
        "Warm Ivory Italian Interior Door.png",
        "Warm bronze door, modern elegance.png",
        "Warm greige pivot door details.png",
    ],
    "handles": [
        "Bronze handle and brushed metal finish.png",
        "Bronze pull and fluted oak detail.png",
        "Bronze pull and reeded glass detail.png",
        "Quadro steel lever and oak panel.png",
        "Seta door pull and groove.png",
        "Ombra door details- fluted oak and brass.png",
        "Senso hotel door hardware details.png",
        "Italian hotel lock and oak elegance.png",
    ]
}

def slugify(filename):
    name = os.path.splitext(filename)[0]
    clean = "".join([c if c.isalnum() or c in [' ', '-'] else '' for c in name])
    return clean.strip().lower().replace(' ', '-')

manifest = {}

for cat, files in CATEGORIES.items():
    cat_dir = os.path.join(DEST_BASE, cat)
    os.makedirs(cat_dir, exist_ok=True)
    manifest[cat] = []
    for f in files:
        src_path = os.path.join(SRC_DIR, f)
        if not os.path.exists(src_path):
            print("Missing file:", src_path)
            continue
        slug = slugify(f)
        dest_filename = f"{slug}.webp"
        dest_path = os.path.join(cat_dir, dest_filename)
        
        with Image.open(src_path) as img:
            w, h = img.size
            # Convert to RGB if RGBA
            if img.mode in ('RGBA', 'LA'):
                bg = Image.new('RGB', img.size, (255, 255, 255))
                bg.paste(img, mask=img.split()[-1])
                bg.save(dest_path, 'WEBP', quality=90, method=6)
            else:
                img.save(dest_path, 'WEBP', quality=90, method=6)
                
            manifest[cat].append({
                "originalName": f,
                "slug": slug,
                "webpUrl": f"/images/vela/{cat}/{dest_filename}",
                "width": w,
                "height": h
            })
            print(f"[{cat}] Saved {dest_filename} ({w}x{h})")

import json
manifest_path = os.path.join(r"e:\Projects\GENESI FRONTEND\genesi-web\src\data", "vela-generated-manifest.json")
with open(manifest_path, "w", encoding="utf-8") as out:
    json.dump(manifest, out, indent=2)

print("Saved manifest to", manifest_path)
