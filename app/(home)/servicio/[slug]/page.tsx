import { SingleServiceAction } from "@/actions";
import { SingleServiceComponent } from "@/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Service({ params }: Props) {
  const Params = await params;
  const slug = Params.slug;
  const { service } = await SingleServiceAction({ slug });

  if (!service) return;
  return <SingleServiceComponent service={service} />;
}
