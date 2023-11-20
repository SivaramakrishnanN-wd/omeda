import React from "react";
import { Images } from "./Logo";

export default function Partners() {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
              Trusted by world class companies, design teams & popular designers
            </h2>
          </div>

          <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
            {Images.map((img) => {
              return (
                <div>
                  <img
                    className="object-contain w-full h-28 mx-auto"
                    src={img.img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-base text-center text-gray-500 md:mt-20">
            and, 1000+ more companies
          </p>
        </div>
      </section>
    </div>
  );
}
