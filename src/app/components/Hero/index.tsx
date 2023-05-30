import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "../../../../public/hero-image.webp";
import phoneWhite from "../../../../public/phoneWhite.svg";

const Hero = () => {
  return (
    <div className="">
      <Image
        src={HeroImg}
        className="object-cover left-0 h-[70vh] md:h-5/6"
        alt=""
        priority={true}
      />
      <div className=" font-poppins md:mx-auto md:left-8  absolute top-[45%] md:max-w-[1140px] md:right-auto md:left-auto p-4  md:p-8">
        <h1 className="font-bold text-slate-100 text-4xl md:text-5xl w-[100%]	md:w-[60%] md:leading-[4rem]">
          Transforming Pain into Progress.
        </h1>
      </div>
      <div className="absolute md:left-8 top-[55%] md:top-[65%] md:max-w-[1140px] right-auto left-auto p-4 md:p-8">
        <Link
          href={"tel:982954720"}
          className="bg-primary justify-center w-40 flex font-bold text-slate-100 text-2xl px-4 py-2 rounded mt-12 gap-2"
        >
          <Image src={phoneWhite} alt="" />
          <span>Call Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
