import Link from "next/link";
import { SearchService } from "../ui/searchService";
import { Button } from "../ui/button";
import { FindServicesAction, FindServicesByNameAction } from "@/actions";
import { ServiceCard } from "../ui/serviceCard";
import { Pagination } from "../ui/pagination";

interface Props {
  name: string;
  page?: number;
}

export const ServiceComponent = async ({ name, page }: Props) => {
  let services;
  if (name) {
    services = await FindServicesByNameAction({ name, page });
  } else {
    services = await FindServicesAction({ page });
  }

  return (
    <>
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between  flex-col md:flex-row gap-4">
            <SearchService />
            {name && (
              <Link href={"/servicios"}>
                <Button>ver todos los servicios</Button>
              </Link>
            )}
          </div>
          {!services.services?.length ? (
            <div className="mt-32 flex flex-col gap-5 items-center justify-center ">
              <h2 className="text-2xl mt-5">
                No se encontraron los servicios disponibles
              </h2>
              <Link
                href="/servicios"
                className="underline  text-[#FF0000] hover:transition-colors hover:scale-105 transform  duration-500 delay-500 ease-in-out"
              >
                todos los servicios
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
        {services.totalPages && <Pagination totalPages={services.totalPages} />}
      </section>
    </>
  );
};
