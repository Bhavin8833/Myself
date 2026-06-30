import { useEffect, useState } from "react";
import logoSrc from "@/assets/LOGO-Photoroom j.png";

let cachedTransparentLogo: string | null = null;

export function Logo({ className = "", alt = "Bhavin Parmar Logo" }: { className?: string; alt?: string }) {
  const [src, setSrc] = useState<string>(cachedTransparentLogo || logoSrc);

  useEffect(() => {
    if (cachedTransparentLogo) {
      setSrc(cachedTransparentLogo);
      return;
    }

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = logoSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Make bright/white/light-grey pixels transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Threshold for white and light grey (covers fake checkerboard and solid white)
        if (r > 195 && g > 195 && b > 195) {
          // If the pixel is mostly grayscale (low saturation)
          if (Math.abs(r - g) < 20 && Math.abs(g - b) < 20) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      const transparentDataUrl = canvas.toDataURL("image/png");
      cachedTransparentLogo = transparentDataUrl;
      setSrc(transparentDataUrl);
      
      // Update Favicon dynamically
      if (!document.getElementById("dynamic-favicon")) {
        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.type = "image/png";
        link.href = transparentDataUrl;
        link.id = "dynamic-favicon";
      }
    };
  }, []);

  return <img src={src} alt={alt} className={className} />;
}
