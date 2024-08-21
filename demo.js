import Image from "next/image";
import React from "react";

// React icons
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Images
import logo from "@/public/home1-asset/logo2.png";
import bg from "@/public/home1-asset/Footer.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-center py-12 md:py-16"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-start">
            <Image src={logo} alt="Logo" width={150} height={50} />
            <p className="text-gray-500 mt-4">
              Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
              risus. In vitae sapien viverra est Duo ei ullum inani senserit.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-gray-500 hover:text-gray-700" />
              <FaLinkedinIn className="text-gray-500 hover:text-gray-700" />
              <FaInstagram className="text-gray-500 hover:text-gray-700" />
              <FaTwitter className="text-gray-500 hover:text-gray-700" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col">
              <h3 className="text-gray-800 font-bold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li className="text-gray-500 hover:text-gray-700">Company</li>
                <li className="text-gray-500 hover:text-gray-700">About</li>
                <li className="text-gray-500 hover:text-gray-700">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-gray-800 font-bold mb-4">Working Time</h3>
              <ul className="space-y-2 text-gray-500">
                <li>Mon - Fri: 9:00am - 5:00pm</li>
                <li>Saturday: 10:00am - 6:00pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-gray-800 font-bold mb-4">Our Address</h3>
              <p className="text-gray-500">
                Old Westbury 256, New York <br />
                11201, United States
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <p className="text-gray-500 hover:text-gray-700">
                  Terms & Conditions
                </p>
                <p className="text-gray-500 hover:text-gray-700">
                  Privacy Policy
                </p>
              </div>
              <p className="text-gray-500 text-sm">
                Copyright &copy; 2024 Agrimo. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
