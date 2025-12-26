import {
  Banner,
  BannerSkeleton,
  ProductComponent,
  ProductsSectionSkeleton,
} from "@/components";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{ page?: string; name: string; categoria: string }>;
}

export default async function Products({ searchParams }: Props) {
  const SearchParams = await searchParams;
  const page = SearchParams.page ? parseInt(SearchParams.page) : 1;
  const name = SearchParams.name;
  const categorySlug = SearchParams.categoria;

  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner
          title="Productos"
          subtitle="Equipos de pesaje de calidad e instrumentos de laboratorio"
          image="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
      </Suspense>
      <Suspense
        key={`${name}-${categorySlug}-${page}`}
        fallback={<ProductsSectionSkeleton />}
      >
        <ProductComponent page={page} name={name} categorySlug={categorySlug} />
      </Suspense>
    </>
  );
}
