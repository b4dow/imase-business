import { FindServicesAction, FindServicesByNameAction } from "@/actions";
import {
  Banner,
  BannerSkeleton,
  ServiceComponent,
  ServiceSectionSkeleton,
} from "@/components";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{ name: string; page: string }>;
}

export default async function Services({ searchParams }: Props) {
  const SearchParams = await searchParams;
  const name = SearchParams.name;
  const page = SearchParams.page ? parseInt(SearchParams.page) : 1;

  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner
          title="Servicios"
          subtitle="Solución de equipos de pesaje profesionales"
          image="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
      </Suspense>
      <Suspense key={`${name}-${page}`} fallback={<ServiceSectionSkeleton />}>
        <ServiceComponent name={name} page={page} />;
      </Suspense>
    </>
  );
}
