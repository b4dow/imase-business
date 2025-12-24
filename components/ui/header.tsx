"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex md:grid md:grid-cols-5 items-center justify-between md:justify-between py-2 ">
          <Link href="/" className="md:col-start-1 md:col-end-3 space-x-3">
            <div className="flex flex-col md:flex-row  items-center  mb-1 text-2xl  font-bold text-[#FF0000]">
              <Image
                src="/images/logo-oficial.png"
                alt="logo imase"
                width={150}
                height={150}
              />
              <p className=" text-sm md:text-lg font-medium hidden md:flex">
                "Pesando al Perú desde 1987"
              </p>
            </div>
          </Link>

          <nav className="md:col-start-3 md:col-end-6 hidden md:justify-self-end md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
            >
              inicio
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
            >
              sobre nosotros
            </Link>
            <Link
              href="/productos"
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
            >
              productos
            </Link>
            <Link
              href="/servicios"
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
            >
              servicios
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
            >
              contacto
            </Link>
            <a
              href="https://wa.me/51936983952"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#FF0000] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </nav>

          <button
            className="md:hidden  text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              inicio
            </Link>
            <Link
              href="/sobre-nosotros"
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              sobre nosotros
            </Link>
            <Link
              href="/productos"
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              productos
            </Link>
            <Link
              href="/servicios"
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              servicios
            </Link>
            <Link
              href="/contacto"
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              contacto
            </Link>
            <a
              href="https://wa.me/51936983952"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#FF0000] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-fit"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
