import Image from 'next/image'
import ClockIcon from "@heroicons/react/20/solid/ClockIcon";
import MapPinIcon from "@heroicons/react/20/solid/MapPinIcon";
import TruckIcon from "@heroicons/react/20/solid/TruckIcon";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="fixed bottom-3 right-3 md:bottom-10 md:right-10 z-40 hover:animate-pulse cursor-pointer">
        <Link href="https://api.whatsapp.com/send?phone=593992903801" target="_blank" rel="noopener noreferrer">
          <div className="flex">
            <p className="bg-white p-3 rounded-full">Contáctanos ahora!</p>
            <Image src="icons8-whatsapp.svg" width={50} height={50} alt="whatsapp" />
          </div>
        </Link>
      </div>
      <section id="inicio">
        <div className="h-screen">
          <div className="contentimage">
            <video
              className="object-center object-cover h-full w-full mt-10 opacity-85"
              src="/video.mp4"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
            <div className="w-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/logo.svg"
                  alt="logo-p"
                  width={400}
                  height={200}
                />
                <h1 className="font-['Myriad Pro'] text-2xl text-white">diagnostico clínico</h1>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5 items-center">
              <button className="bg-white hover:bg-[#51B4A0] hover:text-[#4C4645] text-[#51B4A0] transition-colors duration-500 px-5 py-3 font-medium lg:text-xl rounded-full">Resultados en línea</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-gradient-radial from-cyan-300 to-white to-80%">
          <div className="flex flex-wrap justify-center lg:text-lg text-white">
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-[#4C4645] hover:bg-[#51B4A0] w-[220px] transition-colors duration-500">
              <ClockIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Horario de Atención</h2>
                <p className="font-medium">Lunes a Viernes</p>
                <p>7:00 am - 4:30 pm</p>
                <p className="font-medium">Sábado</p>
                <p>7:00 am - 2:00 pm</p>
                <p className="font-medium">Domingo</p>
                <p>7:00 am -12:00 pm</p>
              </div>
            </div>
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-[#4C4645] hover:bg-[#51B4A0] w-[220px] transition-colors duration-500">
              <MapPinIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Dirección</h2>
                <p>Av. Lola Quintana #N3-110 y Matilde Alban / Conocoto / Quito / Pichincha</p>
                <p>Ecuador</p>
              </div>
            </div>
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-[#4C4645] hover:bg-[#51B4A0] w-[220px] transition-colors duration-500">
              <TruckIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Servicio a Domicilio</h2>
                <p>Te visitamos en la comodidad de tu hogar para la toma de muestras.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blue-800 bg-gradient-radial from-blue-200 from-20% via-cyan-200 via-35% to-white to-80%">
        <div className="flex flex-wrap-reverse justify-center space-x-10 pt-20">
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <h1 className="text-2xl font-bold">Covid 19</h1>
            <br />
            <p>La Administración de Alimentos y Medicamentos de los Estados Unidos (FDA) aprobó estos tipos de pruebas para diagnosticar una infección por COVID-19:</p>
            <br />
            <p><u>PRUEBA DE LA RT-PCR</u></p>
            <br />
            <p><u>PRUEBA DE ANTÍGENO
            </u></p>
            <br />
            <p><u>PRUEBA DE ANTICUERPOS IgG-IGM
            </u></p>
            <br />
            <p>En MED+lab contamos con todos los exámenes que han sido aprobados para garantizar los resultados y seguridad de nuestros pacientes.</p>
            <br />
            <p>Para más información sobre COVID- 19, y todos los procedimientos haga click en el link de abajo.
            </p>
          </div>
          <Image
            src="/covid-19-variants.webp"
            width={615}
            height={542} alt="covid19"
          />
        </div>
      </section >
      <section id="nosotros" className="text-blue-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-white pt-10">
        <div className="flex flex-wrap justify-center space-x-10 pt-20">
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <h1 className="text-2xl font-bold">Misión</h1>
            <br />
            <p className="px-5">Proporcionar resultados de exámenes de laboratorio de muestras biológicas extraídas de las personas beneficiarias a través del procesamiento con tecnología de vanguardia para colaborar en la toma de decisiones de los Médicos tratantes, además de contribuir en la mejora continua y al desarrollo científico en medicina de laboratorio en beneficio de la población urbana.</p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <h1 className="text-2xl font-bold">Visión</h1>
            <br />
            <p className="px-5">Ser un servicio de medicina de laboratorio de baja complejidad de excelencia, caracterizado por la atención especializada y de vanguardia en un marco de profesionalismo, calidad, humanismo, honestidad, responsabilidad y compromiso al servicio de la población del Ecuador.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-10 pt-20">
          <Image
            className="rounded-md"
            src="/AdobeStock_110111178-scaled.jpeg"
            width={615}
            height={542} alt="pipeta"
          />
          <br />
          <div className="flex flex-col items-center justify-center md:w-1/2 mt-10">
            <h1 className="text-2xl font-bold">¿Quiénes Somos?</h1>
            <br />
            <p className="px-5">Somos un laboratorio clínico que ofrece servicios de análisis clínicos, con el fin de satisfacer las necesidades de nuestros clientes, brindando un servicio de calidad, confiable y oportuno, con personal altamente calificado y tecnología de punta.</p>
          </div>
        </div>
      </section>
      <section id="servicios" className="text-blue-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-white">
        <div className="container m-auto">
          <h1 className="text-4xl font-bold text-center pt-20">Nuestros Servicios</h1>
          <div className="flex flex-wrap justify-center mx-10">
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Atención al cliente</h1>
              <br />
              <Image src="/atencionalcliente.jpg" width={450} height={300} alt="atencionalcliente" />
              <br />
              <p>Nuestro personal esta capacitado para brindar una atención profesional y personalizada a cada uno de nuestros pacientes.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-center">Toma de muestras a domicilio</h1>
              <br />
              <Image src="/domicilio.jpg" width={450} height={300} alt="domicilio" />
              <br />
              <p>Nuestro personal acudirá a su domicilio, con todas las normas de bioseguridad, para realizar las tomas de muestras. Nos acomodamos a su horario.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Convenios</h1>
              <br />
              <Image src="/convenios.jpg" width={450} height={300} alt="convenio" />
              <br />
              <p>MED+lab tiene convenios con centros médicos privados y públicos en medicina interna, ginecología, traumatología y endocrinología, entre otras.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Salud Ocupacional</h1>
              <br />
              <Image src="/ocupacional-1.jpg" width={450} height={300} alt="ocupacional" />
              <br />
              <p>Realizamos todos los exámenes, para las fichas ocupacionales indicadas por el Ministerio de Trabajo, empresas privadas, colegios y escuelas.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-4xl font-bold py-10">¿Por qué elegir MED+LAB?</h1>
          <div className="flex flex-wrap justify-center">
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <Image src="/images/AdobeStock_110111178-1024x683.jpeg.webp" width={1024} height={683} alt="1178" />
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Tecnología de Punta</h2>
                <br />
                <p>Contamos con equipos de última generación para garantizar la calidad de nuestros resultados.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <Image src="/images/AdobeStock_158429858-1024x683.jpeg.webp" width={1024} height={683} alt="9858" />
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Precisión en los Resultados</h2>
                <br />
                <p>Realizamos estrictos controles de claidad internos y externos con laboratorios de referencia.  De esta manera garatizamos la precisión en los resultados entregados.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <Image src="/images/AdobeStock_268581621-1024x683.jpeg.webp" width={1024} height={683} alt="1621" />
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Personal Calificado</h2>
                <br />
                <p>Nuestro personal está altamente calificado para brindar un servicio de calidad y confiable.</p>
              </div>
            </div>
            <div className="w-[450px] h-auto justify-center text-center">
              <Image src="/images/pipeta.jpg" width={780} height={420} alt="pipeta" />
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Atención Personalizada</h2>
                <br />
                <p>Brindamos una atención personalizada a cada uno de nuestros pacientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contacto">
        <div className="h-screen">
          <div className="absolute -z-10 w-full">
            <Image
              className="fondox"
              src="/contactenos.jpg"
              alt="principal"
              width={1024}
              height={683}
            />
          </div>
          <div className="flex items-end justify-center pt-10 h-[90%]">
            <div className="flex items-center">
              <div className="flex justify-center items-center px-10">
                <h1 className="text-xl text-blue-800 font-bold">lc.med.lab@gmail.com</h1>
              </div>
              <div className="flex justify-center items-center px-10">
                <h1 className="text-xl text-blue-800 font-bold">02345775 - 0992903801</h1>
              </div>
              <div className="map-responsive px-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.766894539262!2d-78.47885798524666!3d-0.2909055997877523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTcnMjcuMyJTIDc4wrAyOCczNi4wIlc!5e0!3m2!1ses-419!2sec!4v1688059069056!5m2!1ses-419!2sec" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
