import Link from "next/link";
import { SearchService } from "../ui/searchService";
import { Button } from "../ui/button";
import { FindServicesAction, FindServicesByNameAction } from "@/actions";
import { ServiceCard } from "../ui/serviceCard";
import { Pagination } from "../ui/pagination";
import { Banner } from "../ui/banner";

interface Props {
  searchParams: Promise<{ name: string; page: string }>;
}

export const ServiceComponent = async ({ searchParams }: Props) => {
  const SearchParams = await searchParams;
  const name = SearchParams.name;
  const page = SearchParams.page ? parseInt(SearchParams.page) : 1;
  const { services, totalPages } = name
    ? await FindServicesByNameAction({ name, page })
    : await FindServicesAction({ page });

  return (
    <>
      <Banner
        title="Servicios"
        subtitle="Solución de equipos de pesaje profesionales"
        image="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

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
          {!services ? (
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
              {name &&
                services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}

              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
        {totalPages && <Pagination totalPages={totalPages} />}
      </section>
    </>
  );
};
