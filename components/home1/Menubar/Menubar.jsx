"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// react icons
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { TfiArrowTopRight } from "react-icons/tfi";

// images
import logo from "@/public/home1-asset/logo.png";

const NavItem = [
  {
    name: "Home",
    dropdown: [
      { name: "Home 1", href: "/home1" },
      { name: "Home 2", href: "/home2" },
      { name: "Home 3", href: "/home3" },
      { name: "Home 4", href: "/home4" },
      { name: "Home 5", href: "/home5" },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { name: "Pages 1", href: "/page1" },
      { name: "Pages 2", href: "/page2" },
      { name: "Pages 3", href: "/page3" },
      { name: "Pages 4", href: "/page4" },
      { name: "Pages 5", href: "/page5" },
      { name: "Pages 6", href: "/page6" },
    ],
  },
  {
    name: "Services",
    dropdown: [
      { name: "Service 1", href: "/service1" },
      { name: "Service 2", href: "/service2" },
      { name: "Service 3", href: "/service3" },
      { name: "Service 4", href: "/service4" },
      { name: "Service 5", href: "/service5" },
      { name: "Service 6", href: "/service6" },
    ],
  },
  {
    name: "Portfolio",
    dropdown: [
      { name: "Portfolio 1", href: "/portfolio1" },
      { name: "Portfolio 2", href: "/portfolio2" },
      { name: "Portfolio 3", href: "/portfolio3" },
      { name: "Portfolio 4", href: "/portfolio4" },
      { name: "Portfolio 5", href: "/portfolio5" },
    ],
  },
  {
    name: "Blog",
    dropdown: [
      { name: "Blog 1", href: "/blog1" },
      { name: "Blog 2", href: "/blog2" },
      { name: "Blog 3", href: "/blog3" },
      { name: "Blog 4", href: "/blog4" },
      { name: "Blog 5", href: "/blog5" },
    ],
  },

  { name: "Contact Us", href: "/contact" },
];

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsScrolled(false);
      }
    };

    const handleScroll = () => {
      if (!isMobile) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  const navbarClasses = `fixed top-0 left-0 right-0 py-5 md:py-0 transition-colors duration-700 z-50 ${
    isMobile
      ? "bg-[#186539] shadow-xl transition-colors duration-700 "
      : isScrolled
      ? "bg-[#186539] shadow-xl transition-colors duration-700 "
      : "bg-transparent"
  }`;

  const isActive = (href) => href && pathname === href;

  const isDropdownActive = (dropdown) => {
    if (!dropdown) return false;
    return dropdown.some((item) => isActive(item.href));
  };

  // desktop
  const renderNavItem = (item, index) => {
    const active = isActive(item.href) || isDropdownActive(item.dropdown);

    return (
      <li
        key={index}
        className="relative group"
        onMouseEnter={() => toggleDropdown(index)}
        onMouseLeave={() => toggleDropdown(null)}
      >
        {item.href ? (
          <Link
            href={item.href}
            className={`flex items-center cursor-pointer ${
              active
                ? "bg-[#fff] text-[#5c8b54]"
                : "text-white hover:text-[#5c8b54]"
            } px-3 py-2 rounded-md`}
          >
            {item.name}
            {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
          </Link>
        ) : (
          <span
            className={`flex items-center cursor-pointer ${
              active
                ? "bg-[#19352d] text-white"
                : "text-white hover:text-[#efdc69]"
            } px-3 py-2 rounded-md`}
          >
            {item.name}
            {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
          </span>
        )}
        {item.dropdown && (
          <ul
            className={`absolute left-0 mt-2 space-y-2 w-40 bg-[#fff] text-[#404a3e] rounded-md shadow-lg transition-all duration-700 transform agrimo ${
              activeDropdown === index
                ? "opacity-100 scale-y-100 translate-y-0"
                : "opacity-0 scale-y-0 -translate-y-2"
            } origin-top max-h-[80vh] overflow-y-auto`}
          >
            {item.dropdown.map((dropItem, dropIndex) => (
              <li key={dropIndex}>
                <Link
                  href={dropItem.href}
                  className={`block px-4 py-2 text-sm text-[#404a3e] agrimo hover:text-[#fff] hover:bg-[#404a3e] cursor-pointer transition-all duration-700 ${
                    isActive(dropItem.href)
                      ? "bg-white text-[#19352d] font-bold italic"
                      : ""
                  }`}
                >
                  {dropItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  //  mobile
  const renderMobileNavItem = (item, index) => {
    const active = isActive(item.href) || isDropdownActive(item.dropdown);

    return (
      <li key={index} className="block">
        <div className="block">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center ${
                active ? "bg-[#19352d] text-white z-50" : "text-[#fff] z-50"
              } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
            </Link>
          ) : (
            <span
              className={`flex items-center z-50 ${
                active ? "bg-[#19352d] text-white" : "text-[#fff]"
              } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => toggleDropdown(index)}
            >
              {item.name}
              {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
            </span>
          )}
        </div>
        {item.dropdown && (
          <ul
            className={`pl-4 mt-2 space-y-2 bg-[#19352d] transition-all duration-700 transform z-50 ${
              activeDropdown === index
                ? "opacity-100 scale-y-100 max-h-[60vh]"
                : "opacity-0 scale-y-0 max-h-0"
            } origin-top overflow-y-auto`}
          >
            {item.dropdown.map((dropItem, dropIndex) => (
              <li key={dropIndex}>
                <Link
                  href={dropItem.href}
                  className={`block px-3 py-2 text-sm z-50 ${
                    isActive(dropItem.href)
                      ? "text-[#19352d] bg-white font-bold italic"
                      : "text-white hover:bg-[#fff] hover:text-[#19352d]"
                  } hover:border-l-8 hover:border-[#19352d] cursor-pointer transition-all duration-700`}
                  onClick={() => setIsOpen(false)}
                >
                  {dropItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <main className={navbarClasses}>
      <div className="container mx-auto px-5 lg:px-0 z-50">
        <div className="flex items-center justify-between  z-50">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} width={100} height={100} alt="Logo" />
          </Link>

          <nav className="hidden lg:block z-50">
            <ul className="flex items-center gap-3">
              {NavItem.map(renderNavItem)}
              <div className="flex items-center gap-3">
                <button className="bg-white p-3 rounded-full cursor-pointer">
                  <FaSearch className="text-[#19352d] " />
                </button>
                <div className="flex items-center gap-3">
                  <LuPhoneCall className="text-3xl text-[#efdc69]" />
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-white text-base">Call Us Now</p>
                    <p className="text-white text-base">+1(212)255-511</p>
                  </div>
                </div>

                <div className="-mt-3">
                  <div
                    className={` items-center px-10 py-6  -mr-12 transition-colors duration-700 ${
                      isMobile || isScrolled
                        ? "bg-white transition-colors duration-700 rounded-[20px_0_0_30px] rounded-bl-[20px] shadow-none"
                        : "bg-transparent"
                    }`}
                  >
                    <button className="flex items-center gap-1 bg-[#efdc69]  px-4 py-3 rounded-3xl text-base agrimo">
                      Get In Touch{" "}
                      <TfiArrowTopRight className="text-black text-base" />
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#19352d] focus:outline-none z-50"
            >
              {isOpen ? (
                <IoMdClose className="h-8 w-8 text-white" />
              ) : (
                <IoMdMenu className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 z-50 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-50">
          {NavItem.map(renderMobileNavItem)}

          <div className="flex  justify-start items-start gap-5 py-2">
            <div className="flex items-center gap-2">
              <LuPhoneCall className="text-2xl text-[#efdc69]" />
              <div className="flex flex-col items-center justify-start">
                <p className="text-white text-sm">Call Us Now</p>
                <p className="text-white text-sm">+1(212)255-511</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white p-3 rounded-full cursor-pointer">
                <FaSearch className="text-[#19352d] text-sm" />
              </button>
              <button className="flex items-center gap-1 bg-[#efdc69]  px-4 py-3 rounded-3xl text-sm agrimo">
                Get In Touch{" "}
                <TfiArrowTopRight className="text-black text-base" />
              </button>
            </div>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default Menubar;
