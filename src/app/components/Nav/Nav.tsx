"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Clock from "../../../../public/clock.svg";
import Map from "../../../../public/map.svg";
import phone from "../../../../public/phone.svg";
import arrowDown from "../../../../public/arrow-down.svg";
import Link from "next/link";
import menu from "../../../../public/menu.svg";
import "./Nav.css";
import debounce from "lodash.debounce";
import useClickOutside from "./hooks/useClickOutside";

const Nav = () => {
  const [navLink, setNavLink] = useState("nav-text-links-content");
  const navLinkClassRef = useRef<HTMLUListElement>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const dropdownRef = useClickOutside(() => {
    setIsSideMenuOpen(() => false);
  });

  useEffect(() => {
    const handleWindowResize = debounce((window) => {
      // Your resize logic here
      if (window.innerWidth > 980) {
        navLinkClassRef.current?.classList.remove("mobiles");
        // setIsSideMenuOpen(false);
        // setNavLink("nav-text-links-content");
      } else if (window.innerWidth < 980 && isSideMenuOpen) {
        navLinkClassRef.current?.classList.remove("mobiles");
        // setNavLink("nav-text-links-content mobiles");
      }
    }, 100);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isSideMenuOpen == true) {
      navLinkClassRef.current?.classList.add("mobiles");
    } else {
      navLinkClassRef.current?.classList.remove("mobiles");
    }
  }, [isSideMenuOpen]);

  const toggleSideMenu = () => {
    if (isSideMenuOpen == false) {
      setIsSideMenuOpen(() => true);
    } else {
      setIsSideMenuOpen(() => false);
    }
  };

  return (
    <>
      <div className="max-w-[1140px] md:mx-auto relative flex items-center p-2 md:p-4">
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center">
            <Image src={Logo} height={70} alt="Logo of the website." />
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900">
                Physiotherapy
              </span>
              <span className="font-medium text-[0.9rem] text-slate-700">
                Dr. Mahaveer Suman
              </span>
            </div>
          </Link>
          <div ref={dropdownRef} className="flex items-center">
            <ul
              ref={navLinkClassRef}
              className={`${navLink} flex gap-8 md:gap-12 ml-52`}
            >
              <li className="font-medium text-slate-800">
                <Link className="Link route-link" href={"/about"}>
                  About Us
                </Link>
              </li>
              {/* <li className="dropdown-wrapper realtive font-medium text-slate-800 flex gap-1.5">
              <Image src={Clock} alt="" height={20} />
              <span>Opening Hours</span>
              <Image src={arrowDown} height={20} alt="" className="mr-1" />
              <div className="absolute mt-4 p-4 flex flex-col text-left">
                <span className="p-2">Monday to Sunday 9:30 am to 7:30 pm</span>
              </div>
            </li> */}
              <li className=" font-medium text-slate-800 p-0 flex gap-0 md:gap-1.5">
                <Image src={Map} alt="Map svg" height={20} />

                <Link
                  className="Link route-link"
                  href={"https://goo.gl/maps/8LVLMd7UWqEjiQ7E6"}
                >
                  Our Location
                </Link>
              </li>
            </ul>

            <button
              onClick={toggleSideMenu}
              className="z-10 block md:hidden absolute right-2 md:right-0"
            >
              <Image src={menu} alt="Hamburger menu svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] font-poppins md:mx-auto bg-[#F6D0B1] flex-col md:flex-row text-salte-100 rounded font-medium flex items-center p-2 justify-center gap-4 md:gap-8">
        <span>Mon-Sun from 10:30 am to 7:00 pm</span>
        <Link
          className="flex text-lg font-medium right-12 md:right-0"
          href={`tel:982954720`}
        >
          <Image
            src={phone}
            height={20}
            alt="black phone svg"
            className="mr-1"
          />
          982954720
        </Link>
      </div>
    </>
  );
};

export default Nav;
