import Link from "next/link";
import { Button } from "@/components";

export const AboutComponent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-[#FF0000]">Industrias IMASE</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Industrias IMASE, fundada en 1987, ofrece mantenimiento,
              calibración y venta de básculas de precisión y equipos de
              laboratorio. Con cobertura nacional e internacional y una red de
              distribuidores autorizados, incluyendo a SYSTEC Alemania,
              garantizamos calidad y experiencia a nuestros clientes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Durante más de tres décadas, hemos sido el socio de confianza del
              Perú en soluciones de pesaje, brindando servicios integrales que
              garantizan precisión, confiabilidad y cumplimiento normativo para
              empresas de diversas industrias.
            </p>
            <Link href="/sobre-nosotros">
              <Button>Leer mas Sobre Nosotros</Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/5835019/pexels-photo-5835019.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sobre Nosotros IMASE"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
