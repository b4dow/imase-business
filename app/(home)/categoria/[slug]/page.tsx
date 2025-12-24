import { ProductsByCategory } from "@/actions";
import { Banner, ProductCard } from "@/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Category({ params }: Props) {
  const Params = await params;
  const slug = Params.slug;
  const { category, products } = await ProductsByCategory({ slug });
  if (!category) return;

  return (
    <>
      <Banner
        title={`categoria : ${category.name}`}
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
}
