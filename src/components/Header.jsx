import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import logo from "../assets/images/logo.png";
import { Menu, X, ChevronDown, Search } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false); //  MegaMenu 
  const [mobileNavOpen, setMobileNavOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/60 text-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          <img
            src={logo}
            alt="Logo"
            className={`h-8 transition-all ${!scrolled && " "}`}
          />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-600 py-4 transition-colors ${isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : scrolled
                  ? "text-gray-800"
                  : "text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-600 py-4 transition-colors ${isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : scrolled
                  ? "text-gray-800"
                  : "text-black"
              }`
            }
          >
            About
          </NavLink>

          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="static"
          >
            <span
              className={`cursor-pointer flex items-center gap-1 font-semibold hover:text-blue-600 py-4 ${scrolled ? "text-gray-800" : "text-black"
                }`}
            >
              Services{" "}
              <ChevronDown
                size={16}
                className={open ? "rotate-180 transition-transform" : ""}
              />
            </span>
            {open && <MegaMenu setOpen={setOpen} />}
          </div>

          <Link to="/"
            className={`font-semibold hover:text-blue-600 py-4 ${scrolled ? "text-gray-800" : "text-black"
              }`}
          >
            Innovations
          </Link>
          <Link to="/"
            className={`font-semibold hover:text-blue-600 py-4 ${scrolled ? "text-gray-800" : "text-black"
              }`}
          >
            Investors
          </Link>
          <Link to="/"
            className={`font-semibold hover:text-blue-600 py-4 ${scrolled ? "text-gray-800" : "text-black"
              }`}
          >
            Insights
          </Link>
          <Link to="/"
            className={`font-semibold hover:text-blue-600 py-4 ${scrolled ? "text-gray-800" : "text-black"
              }`}
          >
            Career
          </Link>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-600 py-4 transition-colors ${isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : scrolled
                  ? "text-gray-800"
                  : "text-black"
              }`
            }
          >
            Contact
          </NavLink>

          <Link to="/"
            className={`font-semibold hover:text-blue-600 py-4 ${scrolled ? "text-gray-800" : "text-black"
              }`}
          >
            <Search />
          </Link>
        </nav>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <span className="flex gap-2 items-center md:hidden">
          <Search />
          <button
            className={`md:hidden p-2 ${scrolled ? "text-gray-700" : "text-black"
              }`}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </span>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      {mobileNavOpen && (
        <div className="md:hidden bg-white text-gray-900 border-t border-gray-100 shadow-xl absolute top-full left-0 w-full p-6 flex flex-col gap-0 animate-in slide-in-from-top-2 duration-300">
          <NavLink
            to="/"
            onClick={() => setMobileNavOpen(false)}
            className={({ isActive }) =>
              `text-lg font-semibold border-b py-2 transition-colors ${isActive ? "text-blue-600" : "hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileNavOpen(false)}
            className={({ isActive }) =>
              `text-lg font-semibold border-b py-2 transition-colors ${isActive ? "text-blue-600" : "hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>

          <div className="flex flex-col">
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center text-lg font-semibold border-b hover:text-blue-600 py-2"
            >
              Services{" "}
              <ChevronDown
                size={20}
                className={open ? "rotate-180" : ""}
              />
            </button>

            {/* MegaMenu for Mobile */}
            {open && (
              <div className="bg-gray-50 rounded-lg mt-2 overflow-hidden">
                <MegaMenu isMobile={true} setOpen={setOpen} />
              </div>
            )}
          </div>

          <Link to="/"
            className="text-lg font-semibold border-b hover:text-blue-600 py-2"
          >
            Innovations
          </Link>
          <Link to="/"
            className="text-lg font-semibold border-b hover:text-blue-600 py-2"
          >
            Investors
          </Link>
          <Link to="/"
            className="text-lg font-semibold border-b hover:text-blue-600 py-2"
          >
            Insights
          </Link>
          <Link to="/"
            className="text-lg font-semibold border-b hover:text-blue-600 py-2"
          >
            Career
          </Link>

          <NavLink
            to="/contact"
            onClick={() => setMobileNavOpen(false)}
            className={({ isActive }) =>
              `text-lg font-semibold border-b py-2 transition-colors ${isActive ? "text-blue-600" : "hover:text-blue-600"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;