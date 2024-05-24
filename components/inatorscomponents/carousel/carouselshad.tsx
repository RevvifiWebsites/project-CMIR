import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const CarouselShad = () => {
  return (
    <Carousel className="">
      <CarouselContent>
        <CarouselItem className='flex'>
          <Image
            height={500}
            width={500}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl"}
            className="object-cover object-top h-[70vh]"
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={500}
            width={500}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={500}
            width={500}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=2"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={500}
            width={500}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=3"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={500}
            width={500}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=4"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={500}
            width={500}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=5"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselShad