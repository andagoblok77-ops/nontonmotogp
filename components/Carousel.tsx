"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export interface ImagesCarousel {
  title: string;
  img: string;
  link: string;
}
interface ImageCarouselProps {
  images: ImagesCarousel[];
  autoPlay?: boolean;
}

export function CarouselSize({ images, autoPlay = true }: ImageCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );


  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{ loop: true }}
        plugins={autoPlay ? [plugin.current] : []}
        className="relative"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Link
                  href={src.link} target="_blank"
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Image */}
                    <Image
                      src={src.img}
                      alt={src.title}
                      width={800}
                      height={500}
                      priority={index === 0}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                        {src.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
