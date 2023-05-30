import Layout from "@/app/components/Layout";
import "../app/globals.css";
import ownerImg from "../../public/owner.jpg";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="">
      <Layout>
        <div className="mt-12 min-h-[80vh] items-center gap-12 md:gap-0 md:items-start flex flex-col flex-col-reverse md:flex-row justify-between  max-w-[1140px] p-4 mx-auto">
          <div className="w-[100%] md:w-[50%] text-center md:text-left">
            <span className="mt-12 font-medium text-lg text-slate-900">
              Welcome to Dr. Mahaveer Suman&apos;s Physiotherapy Clinic! Led by
              Dr. Mahaveer Suman, our clinic specializes in providing
              personalized and effective physiotherapy treatments. With a wealth
              of experience and expertise in the field, Dr. Suman is dedicated
              to helping patients regain strength, mobility, and overall
              functionality.
            </span>
            <br className="mt-12" />

            <span className="mt-12 font-medium text-lg text-slate-900">
              At our clinic, we prioritize individualized care, tailoring our
              treatments to meet each patient&apos;s unique needs and goals. Dr.
              Mahaveer Suman utilizes evidence-based techniques and the latest
              advancements in physiotherapy to deliver exceptional results. Our
              comprehensive range of therapies includes manual therapy, exercise
              therapy, electrotherapy, and more.
            </span>
            <br className="mt-4" />
            <span className="mt-12 font-medium text-lg text-slate-900">
              Dr. Mahaveer Suman&apos;s expertise enables him to effectively
              address a wide range of conditions, from sports injuries to
              post-surgical rehabilitation. By combining his knowledge,
              experience, and compassionate approach, Dr. Mahaveer Suman
              empowers patients to regain their physical independence and
              improve their quality of life. Experience the outstanding care
              provided at Dr. Mahaveer Suman&apos;s Physiotherapy Clinic.
            </span>
            <br />
            <span className="mt-12 font-medium text-lg text-slate-900">
              Contact us today to schedule an appointment and begin your journey
              towards recovery and improved well-being.
            </span>
          </div>
          <Image
            src={ownerImg}
            alt="Image of Dr. Mahaveer Suman"
            style={{ width: "16rem", height: "16rem" }}
            className="object-cover rounded-full"
          />
        </div>
      </Layout>
    </div>
  );
};

export default About;
