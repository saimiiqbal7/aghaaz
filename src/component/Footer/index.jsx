import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primery-green text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AGHAAZ</h3>
            <p className="text-white/80">
              Your trusted partner for foreign education and career guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-secondary-yellow transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-secondary-yellow transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-secondary-yellow transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-secondary-yellow transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Study Abroad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Visa Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Career Counseling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-secondary-yellow transition-colors"
                >
                  Test Preparation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                <span className="font-medium">Email:</span> info@aghaaz.com
              </li>
              <li className="text-white/80">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-white/80">
                <span className="font-medium">Address:</span> 123 Education St,
                City, Country
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} AGHAAZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
