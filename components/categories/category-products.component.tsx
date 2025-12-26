import { ProductsByCategory } from "@/actions";
import { ProductCard } from "../ui/productCard";
import { Banner } from "../ui/banner";

export const CategoryProductsComponent = async ({ slug }: { slug: string }) => {
  const { category, products } = await ProductsByCategory({ slug });
  if (!category) return;

  return (
    <>
      <Banner
        title={`${category.name}`}
        image="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
