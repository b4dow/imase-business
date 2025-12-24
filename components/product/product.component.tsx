import {
  FindCategoriesProductAction,
  findProductsAction,
  FindProductsByCategoryAction,
} from "@/actions";
import { SearchProduct } from "../ui/searchProduct";
import { SelectedCategorie } from "../ui/selectedCategorie";
import { FindProductsByNameAction } from "@/actions/product/find-products-by-name.action";
import { ProductCard } from "../ui/productCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { Pagination } from "../ui/pagination";
import { Banner } from "../ui/banner";

interface Props {
  searchParams: Promise<{ page?: string; name: string; category: string }>;
}

export const ProductComponent = async ({ searchParams }: Props) => {
  const SearchParams = await searchParams;
  const page = SearchParams.page ? parseInt(SearchParams.page) : 1;
  const name = SearchParams.name;
  const category = SearchParams.category;

  const { categories } = await FindCategoriesProductAction();

  const { products, totalPages } = name
    ? await FindProductsByNameAction({ page, name })
    : category
    ? await FindProductsByCategoryAction({ page, category })
    : await findProductsAction({ page });

  console.log({ SearchParams });
  console.log({ totalPages });

  if (!categories) return;

  return (
    <>
      <Banner
        title="Productos"
        subtitle="Equipos de pesaje de calidad e instrumentos de laboratorio"
        image="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between  flex-col md:flex-row gap-4">
            <SearchProduct />
            {name && (
              <Link href={"/productos"}>
                <Button>ver todos los productos</Button>
              </Link>
            )}
            <SelectedCategorie categories={categories} />
          </div>
          {!products ? (
            <div className="mt-32 flex flex-col gap-5 items-center justify-center ">
              <h2 className="text-2xl mt-5">
                No se encuentran disponibles los productos
              </h2>
              <Link
                href="/productos"
                className="underline  text-[#FF0000] hover:transition-colors hover:scale-105 transform  duration-500 delay-500 ease-in-out"
              >
                todos los productos
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {name &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              {category &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        {totalPages && <Pagination totalPages={totalPages} />}
      </section>
    </>
  );
};
