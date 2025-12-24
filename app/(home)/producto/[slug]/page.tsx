import { SingleProductAction } from "@/actions";
import { SingleProductComponent } from "@/components";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SingleProduct({ params }: Props) {
  const Params = await params;
  const slug = Params.slug;
  const { product } = await SingleProductAction({ slug });
  if (!product) return;
  return (
    <>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF0000] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
          <SingleProductComponent product={product} />
        </div>
      </div>
    </>
  );
}
