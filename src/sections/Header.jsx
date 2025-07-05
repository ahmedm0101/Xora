import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      spy
      smooth
      activeClass="nav-active"
      offset={-100}
      onClick={() => setIsOpen(false)}
      className="base-bold max-lg:my-4 max-lg:h5 text-p4 uppercase transition-colors duration-500 hover:text-p1 cursor-pointer "
    >
      {title}
    </LinkScroll>
  );
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 py-10 w-full max-lg:py-4 transition-all duration-500",
        hasScrolled && "py-2 bg-black-100 bg-opacity-85 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex items-center h-14 max-lg:px-5 ">
        <a href="" className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 ",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
          //   className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0
          //      ${isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"}`}
        >
          <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    spy
                    smooth
                    to="hero"
                    offset={-300}
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="feq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden w-[980px] h-[380px] absolute block top-1/2 rotate-90 translate-x-[-290px] -translate-y-1/2">
              <img
                src="/images/bg-outlines.svg"
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outlines"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5 z-2"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="lg:hidden z-2 border-2 size-10 border-s4/25 rounded-full flex justify-center items-center"
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
