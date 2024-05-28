import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      id="pricing"
      className="w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24"
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl font-bold text-black text-center"
      >
        Our Pricing
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Regular Haircut</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$8</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Children Cut</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$5</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Seniors</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$8</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Line Ups</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$10</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Bread Trims</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$8</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Mustache Trims</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$5</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Wash Ups</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$4</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10"
        >
          <h1 className="text-3xl text-gray-900 font-bold">Fill Monty</h1>
          <h1 className="text-themeyellow text-4xl font-bold ">$8</h1>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
