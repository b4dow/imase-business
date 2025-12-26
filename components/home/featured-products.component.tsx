import { findFeaturedProductsAction } from "@/actions";
import { ProductCard } from "../ui/productCard";
import Link from "next/link";
import { Button } from "../ui/button";

export const FeaturedProductComponent = async () => {
  const { products } = await findFeaturedProductsAction();
  if (!products) return;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 3000);
  });
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Productos <span className="text-[#FF0000]">Destacados</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nuestra selección de básculas, equipos de laboratorio e
            instrumentos de precisión de alta calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/productos">
            <Button variant="outline">Ver más productos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
