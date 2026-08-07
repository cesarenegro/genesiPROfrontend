'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/lib/catalogue';

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const [activeImg, setActiveImg] = useState<ProductImage>(
    images.find(img => img.isPrimary) || images[0]
  );

  if (!images.length) {
    return (
      <div className="aspect-square bg-zinc-100 flex items-center justify-center text-muted-foreground">
        NO IMAGE AVAILABLE
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image View */}
      <div className="aspect-square relative bg-zinc-50 border border-border p-8 flex items-center justify-center overflow-hidden">
        <Image 
          key={activeImg.url} // Forces re-render for smooth transition (optional)
          src={activeImg.url} 
          alt="Product View" 
          fill 
          className="object-contain mix-blend-multiply dark:mix-blend-normal animate-in fade-in duration-500" 
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-xs px-2 py-1 uppercase tracking-wider border border-border">
          {activeImg.viewType} view
        </div>
      </div>

      {/* Thumbnails / View Toggles */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(img)}
              className={`relative h-20 w-20 flex-shrink-0 border transition-all ${
                activeImg.url === img.url 
                  ? 'border-primary ring-1 ring-primary' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Image 
                src={img.url} 
                alt={`${img.viewType} view thumbnail`} 
                fill 
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
