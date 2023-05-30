"use client";

import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Nav from "./components/Nav/Nav";
import phoneWhite from "../../public/phoneWhite.svg";
import { PhoneCall } from "react-feather";
import Hero from "./components/Hero";
import physioImg from "../../public/physio-exercise.webp";
import electroImg from "../../public/electrotherapy.webp";
import manualImg from "../../public/manual.jpg";
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import { GoogleAnalytics } from "nextjs-google-analytics";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-T8RBGPZ",
};

TagManager.initialize(tagManagerArgs);

const customFont = Poppins({
  subsets: ["devanagari"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${customFont} font-poppins`}>
      <GoogleAnalytics trackPageViews />
      {/* <Nav /> */}
      <Hero />

      <div className="mt-16 max-w-[1140px] mx-auto md:flex-row flex-col flex md:gap-24 p-4 md:p-0">
        <Image
          src={physioImg}
          alt="Physio"
          className="object-cover h-full md:h-[45vh] md:w-[40vw] rounded "
        />
        <div className="md:w-[40%] w-full flex flex-col gap-8 mt-8 md:m-0">
          <h2 className="text-center md:text-left font-semibold text-3xl text-neutral-900">
            Our Best service for your health
          </h2>
          <span className="md:text-left text-center font-medium text-2xl text-slate-800">
            Through personalized treatment plans, we target specific areas of
            your body, using a combination of manual therapy, exercises, and
            cutting-edge techniques to alleviate pain and improve mobility.
          </span>
        </div>
      </div>
      <div className="mt-28 max-w-[1140px] mx-auto mb-8">
        <h2 className="text-center font-semibold text-3xl text-neutral-900">
          Our Services
        </h2>
        <div className="mt-12 flex flex-col items-center gap-12 md:gap-0 md:flex-row justify-between">
          <div className="w-[18rem] rounded shadow-2xl">
            <Image src={electroImg} alt="" className="rounded" />
            <div className="p-4 flex flex-col gap-2">
              <span className="font-semibold text-lg text-neutral-900">
                Electrotherapy
              </span>
              <span className="text-slate-800 font-medium">
                Unlock the healing potential of electrotherapy: pain relief,
                improved circulation, faster recovery.
              </span>
              <span className="font-semibold text-lg py-1 px-4 rounded-full bg-primary w-fit text-slate-100">
                ₹ 250
              </span>
            </div>
          </div>
          <div className="w-[18rem] rounded shadow-2xl">
            <Image src={manualImg} alt="" className="rounded" />
            <div className="p-4 flex flex-col gap-2">
              <span className="font-semibold text-lg text-neutral-900">
                Manual Therapy
              </span>
              <span className="text-slate-800 font-medium">
                Experience the hands-on healing of manual therapy: tailored
                treatments for pain relief and improved mobility.
              </span>
              <span className="font-semibold text-lg py-1 px-4 rounded-full bg-primary w-fit text-slate-100">
                ₹ 250
              </span>
            </div>
          </div>
          <div className="w-[18rem]  rounded shadow-2xl">
            <Image src={physioImg} alt="" className="rounded" />
            <div className="p-4 flex flex-col gap-2">
              <span className="font-semibold text-lg text-neutral-900">
                Exercise Therapy
              </span>
              <span className="text-slate-800 font-medium">
                Elevate your wellness with exercise therapy: personalized
                exercises for strength, mobility, and vitality.
              </span>
              <span className="font-semibold text-lg py-1 px-4 rounded-full bg-primary w-fit text-slate-100">
                ₹ 250
              </span>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <FAQ />
      {/* <Footer /> */}
    </main>
  );
}
