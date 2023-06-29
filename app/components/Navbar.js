import Image from "next/image";

export default function Navbar () {
  return (
    <div className="flex items-center fixed top- w-full px-3 md:px-10 justify-between overflow-hidden bg-[#51B4A0]">
      <Image className="p-2 md:p-5 justify- shadow-white" src="/logo-w.svg" width={200} height={75} alt="logo" />
      <nav className="hidden md:flex font-bold text-[#4C4645]">
        <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#inicio">Inicio</a>
        <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#nosotros">Nosotros</a>
        <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#servicios">Servicios</a>
        <a className="hover:text-[#51B4A0] hover:bg-white px-10 py-2 rounded-xl transition-all duration-500" href="#contacto">Contacto</a>
      </nav>
      <div className="flex md:hidden justify-end">
        <button className="m-3">
          <svg className="w-6 h-6" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </div>
  )
}
