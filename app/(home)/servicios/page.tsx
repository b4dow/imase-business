import { ServiceComponent } from "@/components";

interface Props {
  searchParams: Promise<{ name: string; page: string }>;
}

export default function Services({ searchParams }: Props) {
  return <ServiceComponent searchParams={searchParams} />;
}
