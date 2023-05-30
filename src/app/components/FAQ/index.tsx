import React from "react";
import Collapsible from "react-collapsible";
import "./FAQ.css";
import { ChevronDown } from "react-feather";

const FAQ = () => {
  return (
    <div className="flex gap-8 p-4 md:p-0 md:gap-0 flex-col items-center md:items-start md:flex-row max-w-[1140px] mx-auto mt-16 justify-evenly mb-4">
      <div className="md:w-[30%]">
        <h2 className="text-center md:text-left font-semibold text-3xl text-neutral-900">
          Frequently Asked Questions.
        </h2>
      </div>
      <div className="faq-container flex flex-col">
        <Collapsible
          openedClassName="shadow-md text-neutral-900 font-medium"
          trigger="What are your opening hours?"
          className="shadow-md text-neutral-900 font-medium"
        >
          <p className="font-normal text-slate-800">
            Mon-Sun from 10:30 am to 7:00 pm
          </p>
        </Collapsible>
        <Collapsible
          openedClassName="shadow-md text-neutral-900 font-medium"
          trigger="What are the prices of different therapies?"
          className="shadow-md text-neutral-900 font-medium"
        >
          <p className="font-normal text-slate-800">
            The cost of exercise therapy is ₹250, the cost of manual therapy is
            ₹250, and the cost of electrotherapy is also ₹250.
          </p>
        </Collapsible>
        <Collapsible
          openedClassName="shadow-md text-neutral-900 font-medium"
          trigger="Will Dr.Suman personally attend me?"
          className="shadow-md text-neutral-900 font-medium"
        >
          <p className="font-normal text-slate-800">
            Yes, Dr. Suman will personally do your treatment.
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

export default FAQ;
