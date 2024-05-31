import Image from "next/image";
import React from "react";

const Gallerysmall = () => {
  return (
    <div>
      <section className="py-6 shadow-md w-full">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-40 lg:grid-cols-4 sm:grid-cols-2">
          
            <div className="flex flex-col gap-3 justify-center align-center">
              <Image
                height={1000}
                width={1000}
                title=""
                alt=""
                className="object-cover w-full shadow-md aspect-square"
                src="https://source.unsplash.com/random/300x300/?woman=1"
              />
              <span className="text-center">Name</span>
            </div>
            <div className="flex flex-col gap-3 justify-center align-center">
              <Image
                height={1000}
                width={1000}
                title=""
                alt=""
                className="object-cover w-full shadow-md aspect-square"
                src="https://source.unsplash.com/random/300x300/?woman=1"
              />
              <span className="text-center">Name</span>
            </div>
            <div className="flex flex-col gap-3 justify-center align-center">
              <Image
                height={1000}
                width={1000}
                title=""
                alt=""
                className="object-cover w-full shadow-md aspect-square"
                src="https://source.unsplash.com/random/300x300/?woman=1"
              />
              <span className="text-center">Name</span>
            </div>
            <div className="flex flex-col gap-3 justify-center align-center">
              <Image
                height={1000}
                width={1000}
                title=""
                alt=""
                className="object-cover w-full shadow-md aspect-square"
                src="https://source.unsplash.com/random/300x300/?woman=1"
              />
              <span className="text-center">Name</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallerysmall;
