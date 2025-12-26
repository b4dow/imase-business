import {
  FindCategoriesProductAction,
  findProductsAction,
  FindProductsByCategoryAction,
} from "@/actions";
import { FindProductsByNameAction } from "@/actions/product/find-products-by-name.action";
import { SearchProduct } from "../ui/searchProduct";
import Link from "next/link";
import { Button } from "../ui/button";
import { SelectedCategorie } from "../ui/selectedCategorie";
import { ProductCard } from "../ui/productCard";
import { Pagination } from "../ui/pagination";

interface Props {
  page?: number;
  name: string;
  categorySlug: string;
}

export const ProductComponent = async ({ page, name, categorySlug }: Props) => {
  const { categories } = await FindCategoriesProductAction();

  let products;

  if (name) {
    products = await FindProductsByNameAction({
      page,
      name,
    });
  } else if (categorySlug) {
    products = await FindProductsByCategoryAction({
      page,
      categorySlug,
    });
  } else {
    products = await findProductsAction({ page });
  }

  if (!categories?.length) return;

  return (
    <>
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
          {!products.products?.length ? (
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
              {products.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        {products.totalPages && <Pagination totalPages={products.totalPages} />}
      </section>
    </>
  );
};
