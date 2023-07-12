import React from "react";
import headerFlower from "../../../assets/pngwing10.png";
export default function Banner() {
  return (
    <section className=" px-24 py-16 bg-[#e554731a]">
      <div className=" flex justify-between w-full items-center">
        <div className=" w-1/2">
          <h3 className=" text-5xl font-bold mb-4 ">
            Let's make <br /> beautiful flowers a part of your life.
          </h3>
          <p className=" text-[#27272799]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <button className=" bg-[#E55473] text-white px-4 py-2 mt-4 rounded-md">
            Shop Now
          </button>
        </div>
        <div className=" w-1/2 flex justify-center items-stretch -mb-16">
          <img className=" w-1/2" src={headerFlower} alt="" />
        </div>
      </div>
    </section>
  );
}
