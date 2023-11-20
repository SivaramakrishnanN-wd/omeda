import React from "react";
import BgImage1 from "../../Assets/classico_payslip_2 (2).png";

export default function Banner() {
  return (
    <div>
      <section className="h-4/5 pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Introducing Our Comprehensive <br className="block sm:hidden" />
                Clasico Payslips Solution!
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Your complete solution for businesses, students, dedicated
                users, family users
              </p>

              <button
                type="button"
                className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Classico Payslips Features
              </button>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src={BgImage1}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
