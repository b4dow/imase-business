import { ProductsByCategory } from "@/actions";
import { Banner, CategoryProductsComponent, ProductCard } from "@/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Category({ params }: Props) {
  const Params = await params;
  const slug = Params.slug;

  return (
    <>
      <CategoryProductsComponent slug={slug} />
    </>
  );
}
