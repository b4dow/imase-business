"use client";
import slugify from "@sindresorhus/slugify";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  product: Product;
}

export const SingleProductComponent = ({ product }: Props) => {
  const pathname = usePathname();
  const principalProduct = pathname.split("/")[1];
  const category = slugify(product.category, {
    separator: "_",
    lowercase: true,
  });

  console.log({ category });
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {principalProduct}
                </a>
                <svg
                  viewBox="0 0 16 20"
                  width="16"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  href={`/categoria/${category}`}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {product.category}
                </Link>
                <svg
                  viewBox="0 0 16 20"
                  width="16"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <Image
            src={product.images[0]}
            alt="Two each of gray, white, and black shirts laying flat."
            width={300}
            height={300}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
          />
          <Image
            width={300}
            height={300}
            src={product.images[1]}
            alt="Model wearing plain black basic tee."
            className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
          />
          <Image
            width={300}
            height={300}
            src={product.images[2]}
            alt="Model wearing plain gray basic tee."
            className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
          />
          <Image
            width={300}
            height={300}
            src={product.images[3]}
            alt="Model wearing plain white basic tee."
            className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
          />
        </div>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Información del Producto</h2>

            <form className="mt-10">
              <Button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white "
              >
                Pedir información
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {product.fullDescription}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Hand cut and sewn locally
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Ultra-soft 100% cotton
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming
                  &quot;Charcoal Gray&quot; limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
