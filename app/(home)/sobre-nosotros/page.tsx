import {
  Banner,
  OurGalleryComponent,
  OurStoryComponent,
  OurValuesComponent,
} from "@/components";

export default function SobreNosotros() {
  return (
    <>
      <Banner
        title="Sobre Nosotros"
        subtitle="Pesando al Perú desde 1987"
        image="https://images.pexels.com/photos/5835019/pexels-photo-5835019.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <OurStoryComponent />
      <OurValuesComponent />
      <OurGalleryComponent />
    </>
  );
}
