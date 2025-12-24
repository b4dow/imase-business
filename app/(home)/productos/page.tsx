import { ProductComponent } from "@/components";

interface Props {
  searchParams: Promise<{ name: string; category: string }>;
}

export default function Products({ searchParams }: Props) {
  return <ProductComponent searchParams={searchParams} />;
}
