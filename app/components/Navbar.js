'use client'

import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex z-40 items-center fixed top-0 w-full px-3 md:px-10 justify-between overflow-hidden bg-[#51B4A0]">
        <Image className="p-2 md:p-5 justify- shadow-white" src="/logo-w.svg" width={200} height={75} alt="logo" />
        <nav className="hidden md:flex font-bold text-[#4C4645]">
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#nosotros">Nosotros</a>
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#servicios">Servicios</a>
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#contacto">Contacto</a>
        </nav>
        <div className="flex md:hidden justify-end">
          <button className="m-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col fixed top-12 right-0 items-center justify-center text-center bg-[#51B4A0] z-50">
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#inicio">Inicio</a>
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#nosotros">Nosotros</a>
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#servicios">Servicios</a>
          <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#contacto">Contacto</a>
        </div>
      )}
    </>
  )
}
