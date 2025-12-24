import Link from "next/link";
import { Button } from "../ui/button";

export const CTAComponent = () => {
  return (
    <section className="py-20 bg-[#FF0000] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contáctenos hoy mismo para todas sus necesidades de equipos de pesaje.
          Nuestro equipo de expertos está listo para ayudarle.
        </p>
        <Link href="/contact">
          <Button variant="secondary">Contacta con nosotros ahora</Button>
        </Link>
      </div>
    </section>
  );
};
