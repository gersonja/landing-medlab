import Image from 'next/image'
import ClockIcon from "@heroicons/react/20/solid/ClockIcon";
import MapPinIcon from "@heroicons/react/20/solid/MapPinIcon";
import TruckIcon from "@heroicons/react/20/solid/TruckIcon";
import EnvelopeIcon from "@heroicons/react/20/solid/EnvelopeIcon";
import PhoneIcon from "@heroicons/react/20/solid/PhoneIcon";
import Link from 'next/link';

export default function Home () {
  return (
    <>
      <div className="fixed bottom-3 right-3 md:bottom-10 md:right-10 z-50 hover:animate-pulse cursor-pointer">
        <Link href="https://api.whatsapp.com/send?phone=593992903801" target="_blank" rel="noopener noreferrer">
          <div className="flex">
            <p className="bg-white p-3 rounded-full">Contáctanos ahora!</p>
            <Image src="icons8-whatsapp.svg" width={50} height={50} alt="whatsapp" />
          </div>
        </Link>
      </div>
    </>
  )
}
