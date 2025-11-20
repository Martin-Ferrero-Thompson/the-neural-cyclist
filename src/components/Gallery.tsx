import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryProps {
    images: { src: string; alt?: string }[];
}

export default function Gallery({ images }: GalleryProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition"
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || `Gallery image ${i + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map(img => ({ src: img.src, alt: img.alt }))}
            />
        </>
    );
}
