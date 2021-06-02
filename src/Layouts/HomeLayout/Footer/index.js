import React from "react";
import { ReactComponent as FooterLogo } from "../../../Assets/footer_logo.svg";
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 pl-12 pr-12">
        <section className="col-span-2 md:col-span-3 lg:pl-24 lg:pr-16 sm:pt-10">
          <div className="flex font-primary">
            <FooterLogo />
            <h1>Rewanghi</h1>
          </div>

          <div className="mt-5 font-secondary">
            <p>
              Rewanghi is digital platform for collecting donations to be
              distributed to people in need
            </p>
          </div>
        </section>

        <section className="col-span-1 mt-3 md:mt-0">
          <h1 className="text-xl font-bold">Menu</h1>
          <ul className="text-gray-500 footer-categories-list">
            <li>Donations</li>
            <li>Features</li>
            <li>Categiry</li>
            <li>Volunteer</li>
            <li>About us</li>
          </ul>
        </section>

        <section className="col-span-1 mt-3 md:mt-0">
          <h1 className="text-xl font-bold">Categories</h1>
          <ul className="text-gray-500 footer-categories-list">
            <li>Healthy Food</li>
            <li>Education</li>
            <li>Clean Water</li>
            <li>Medicine Help</li>
          </ul>
        </section>

        <section className="col-span-2 md:col-span-1 mt-3 md:mt-0 sm:pl-3 lg:pl-0">
          <h1 className="text-xl font-bold"> About Us</h1>
          <ul className="text-gray-500 footer-categories-list">
            <li>Who are We</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Help</li>
          </ul>
        </section>
      </div>

      <section className="flex space-x-6 mt-5 pl-10 lg:pl-36 md:-mt-6">
        <div className="h-8 w-8 bg-gray-400  rounded-full grid place-items-center">
          <GrFacebookOption className="text-white text-lg cursor-pointer" />
        </div>
        <div className="h-8 w-8 bg-gray-400  rounded-full grid place-items-center">
          <FiTwitter className="text-white text-lg cursor-pointer" />
        </div>
        <div className="h-8 w-8 bg-gray-400  rounded-full grid place-items-center">
          <FiInstagram className="text-white text-lg cursor-pointer" />
        </div>
      </section>

      <div className="border-t-2 border-gray ml-10 mr-10 lg:ml-36 lg:mr-28 mt-7 flex pt-5 pb-5 justify-center">
        <AiOutlineCopyrightCircle className="text-gray-500" />
        <p className="text-xs text-gray-500">
          Copyright Algo Solver LLC. All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
