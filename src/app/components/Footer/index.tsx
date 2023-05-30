import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 font-normal bg-primaryThinLight p-4 flex justify-center items-center gap-2 flex-col md:flex-row text-center md:text-left">
      <span> © 2023 Dr. Mahaveer Suman. All rights Reserved.</span>
      <Link className="font-medium" href={"https://kumarayush.webflow.io/"}>
        {" "}
        <span>Built by Ayush</span>
      </Link>
    </div>
  );
};

export default Footer;
