import React from "react";
import BgImage1 from "../../Assets/classico_payslip_2 (2).png";
import { Link as ScrollLink } from "react-scroll";
import Features from "./Features";

export default function Banner() {
  return (
    <div>
      <section class="h-4/5 pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Introducing Our Comprehensive <br class="block sm:hidden" />
                Clasico Payslips Solution!
              </h2>
              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Your complete solution for businesses, students, dedicated
                users, family users
              </p>

              <ScrollLink
                to="featuresSection"
                spy={true}
                smooth={true}
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-blue-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Classico Paysilp Features
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </ScrollLink>
            </div>

            <div class="relative">
              <img
                class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src={BgImage1}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="featuresSection">
        <Features />
      </section>
    </div>
  );
}
