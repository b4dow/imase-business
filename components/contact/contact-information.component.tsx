import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInformationComponent = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        <span className="text-[#FF0000]">Información de </span>
        Contacto
      </h2>

      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-[#FF0000]/10 p-3 rounded-full">
            <MapPin className="text-[#FF0000]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
            <p className="text-gray-600">
              Jr. Atanacio Catojeras 115 - 1er Piso
              <br />
              Urb. Almirante Miguel Grau
              <br />
              SMP, Lima, Perú
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#FF0000]/10 p-3 rounded-full shrink-0">
            <Phone className="text-[#FF0000]" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
            <a
              href="tel:+51936983952"
              className="text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              +51 936 983 952
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#FF0000]/10 p-3 rounded-full shrink-0">
            <Mail className="text-[#FF0000]" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <a
              href="mailto:ventas@imase.pe"
              className="text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              ventas@imase.pe
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Horas de Trabajo</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex justify-between">
            <span>Lunes - Viernes</span>
            <span className="font-medium">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sabado</span>
            <span className="font-medium">9:00 AM - 1:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Domingo</span>
            <span className="font-medium">Cerrado</span>
          </div>
        </div>
      </div>
    </div>
  );
};
