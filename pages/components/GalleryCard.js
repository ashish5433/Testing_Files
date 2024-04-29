import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import Image from "next/image";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function midSection() {
  return (
    <div className="product-gallery-container">
      <div className="gallery-container gallery-image-w-3 gallery-image-h-2">
        <div className="gallery-item">
          <div className="gallery-image">
            <Image src="/big-image-1.jpg" width={1920} height={1080} />
          </div>
        </div>
      </div>

      <div className="gallery-container gallery-image-w-3 gallery-image-h-3">
        <div className="gallery-item">
          <div className="gallery-image">
            <Image src="/big-image.jpg" width={1920} height={1080} />
          </div>
        </div>
      </div>

      <div className="gallery-container gallery-image-h-2">
        <div className="gallery-item">
          <div className="gallery-image">
            <Image src="/vertical-image-1.jpg" width={1920} height={1080} />
          </div>
        </div>
      </div>

      <div className="gallery-container gallery-image-w-2">
        <div className="gallery-item">
          <div className="gallery-image">
            <Image src="/vertical-small-image-1.jpg" width={1920} height={1080} />
          </div>
        </div>
      </div>

      <div className="gallery-container gallery-image-w-4 gallery-image-h-1">
        <div className="gallery-item">
          <div className="gallery-image">
            <Image src="/long-image-1.jpg" width={1920} height={1080} />
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-item">
          <div className="gallery-image">
            <Image src="/small-image-1.jpg" width={1920} height={1080} />
          </div>
        </div>
      </div>
    </div>
  );
}
