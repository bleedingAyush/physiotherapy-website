"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import review1 from "../../../../public/review1.png";
import review2 from "../../../../public/review2.png";
import review3 from "../../../../public/review3.png";

import StartG from "../../../../public/starGroup.svg";
import "./Review.css";

const Review = () => {
  return (
    <div className="mt-24 max-w-[1140px] mx-auto">
      <h2 className="text-center font-semibold text-3xl text-neutral-900">
        What our customers have to say?
      </h2>

      <Carousel autoPlay={false} className="mt-12 ">
        <div className="flex justify-center flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              style={{ width: "3.5rem" }}
              src={review1}
              className="rounded-full object-cover"
              alt="review image 1"
            />
            <div className="flex flex-col items-start">
              <span className="font-semibold text-neutral-900  text-xl">
                Suman
              </span>
              <Image src={StartG} alt="review stars svg" />
            </div>

            {/* <img src="assets/1.jpeg" /> */}
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <span className="font-medium text-slate-800">
            Best Physiotherapist in Kota
          </span>
        </div>
        <div className="flex justify-center flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              style={{ width: "3.5rem" }}
              src={review2}
              className="rounded-full object-cover"
              alt="review image 2"
            />
            <div className="flex flex-col items-start">
              <span className="font-semibold text-neutral-900  text-xl">
                Mohit
              </span>
              <Image src={StartG} alt="review stars" />
            </div>

            {/* <img src="assets/1.jpeg" /> */}
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <span className="font-medium text-slate-800">
            Dr. Suman is very good and is the best physiotherapist in Kota.
          </span>
        </div>
        <div className="flex justify-center flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              style={{ width: "3.5rem" }}
              src={review3}
              className="rounded-full object-cover"
              alt="review image 3"
            />
            <div className="flex flex-col items-start">
              <span className="font-semibold text-neutral-900  text-xl">
                Kanishka
              </span>
              <Image src={StartG} alt="review stars 3" />
            </div>

            {/* <img src="assets/1.jpeg" /> */}
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <span className="font-medium text-slate-800"></span>
        </div>
      </Carousel>
    </div>
  );
};

export default Review;
