import { FeaturedServicesAction } from "@/actions";
import { ServiceCard } from "../ui/serviceCard";
import Link from "next/link";
import { Button } from "../ui/button";

export const FeaturedServiceComponent = async () => {
  const { services } = await FeaturedServicesAction();
  if (!services) return;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro <span className="text-[#FF0000]">Servicios</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Servicios profesionales de mantenimiento, calibración y reparación
            para todo tipo de equipos de pesaje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/servicios">
            <Button variant="outline">Ver más servicios</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
