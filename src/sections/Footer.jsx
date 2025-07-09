import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70"> Copyright, Ahmed Mahmoud</p>
          </div>

          <div className="flex justify-center items-center sm:ml-auto">
            <p className="legal-after relative transition-all mr-9 text-p5 duration-500 hover:text-p1">
              Privacy Policy{" "}
            </p>
            <p className=" transition-all mr-9 text-p5 duration-500 hover:text-p1">
              Terms of Use{" "}
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ icon, id, title, url }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
