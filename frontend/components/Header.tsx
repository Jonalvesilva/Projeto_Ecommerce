"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { MdClose, MdMenu } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = (nav: boolean) => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (nav) {
          setNav(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <div className="w-full bg-slate-800 fixed top-0 left-0">
      <header className="w-full mx-auto max-w-[1440px] px-6 lg:px-20 z-50">
        <div className="flex items-center justify-between py-3">
          <Link href={`/`} className="flex  items-center text-white">
            <Image src={`/logo.png`} width={50} height={30} alt="logo" />
            <div className="text-2xl hidden font-semibold min-[450px]:flex">
              Jon's Shop
            </div>
          </Link>
          <div className="flex justify-center items-center gap-x-4">
            <div>
              <Navbar />
            </div>
            <div>
              <MobileNavbar
                className={`${
                  nav
                    ? "flex text-black items-center flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md transition-all duration-300 z-50"
                    : "flex text-black items-center flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md transition-all duration-300 z-50 right-[100%]"
                }`}
              />
            </div>
            <div className="flex justify-between items-center  gap-x-3 sm:gap-x-2 font-semibold">
              {!nav ? (
                <MdMenu
                  size={30}
                  className="md:hidden cursor-pointer text-white hover:text-yellow-500"
                  onClick={() => handleNav(nav)}
                />
              ) : (
                <MdClose
                  size={30}
                  className="md:hidden cursor-pointer text-white hover:text-yellow-500"
                  onClick={() => handleNav(nav)}
                />
              )}
              <div className="flex gap-x-4 items-center">
                <Link
                  href={"/cart"}
                  className="relative flex bg-yellow-300 p-2 rounded-full hover:bg-yellow-200"
                >
                  <RiShoppingCart2Line size={20} className="text-black" />
                  <span className="absolute flex items-center text-sm font-light justify-center w-4 h-4 -top-[5px] left-[22px] rounded-full bg-red-500 text-white">
                    {0}
                  </span>
                </Link>
                <Link
                  href={`/login`}
                  className="flex gap-x-2 p-2 bg-yellow-300 rounded-xl hover:bg-yellow-200"
                >
                  <CiUser size={25} className="text-black " />
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
