import Image from 'next/image'
import ClockIcon from "@heroicons/react/20/solid/ClockIcon";
import MapPinIcon from "@heroicons/react/20/solid/MapPinIcon";
import TruckIcon from "@heroicons/react/20/solid/TruckIcon";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-red-500">402</h1>
        <h2 className="text-3xl font-semibold">Pago Requerido</h2>
        <p className="text-lg text-gray-600">
          Parece que necesitas realizar un pago para acceder a este contenido.
        </p>
        <p className="text-gray-600">
          Nota: Este servicio fue suspendido el <strong>20 de febrero de 2025</strong>. Si ya has realizado el pago, por favor, contacta con soporte para obtener ayuda.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}