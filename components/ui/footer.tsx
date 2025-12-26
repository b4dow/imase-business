import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center ">
          <ul className="space-y-2 flex flex-col md:flex-row justify-center gap-10 md:gap-16 mb-10 md:mb-5 ">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-nosotros"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/productos"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                productos
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className=" border-t border-gray-800 mt-8 pt-8  grid grid-cols-1 md:grid-cols-3 justify-between  gap-8">
          <div className="md:row-span-1 md:row-end-2 md:col-start-1 md:col-end-2">
            <h3 className="text-xl font-bold text-[#FF0000] mb-4">
              INDUSTRIAS IMASE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pesando al Perú desde 1987. Expertos en mantenimiento, calibración
              y venta de balanzas de precisión.
            </p>
          </div>

          <div className="md:row-span-1 md:row-end-2 md:col-start-3 md:col-end-4">
            <h4 className="text-lg font-semibold mb-4">
              Información de Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-white shrink-0 mt-1" />
                <span>
                  Jr. Atanacio Catojeras 115 - 1st floor, Urb. Almirante Miguel
                  Grau, SMP, Lima, Perú
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-white" />
                <span>+51 936 983 952</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-white" />
                <span>ventas@imase.pe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Industrias IMASE. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
