import {
  Banner,
  ContactInformationComponent,
  FormContactComponent,
  UbicationContactComponent,
} from "@/components";

export default function Contact() {
  return (
    <>
      <Banner
        title="Contacta con nosotros"
        subtitle="Estamos aquí para ayudarle con todas sus necesidades de pesaje."
        image="https://images.pexels.com/photos/7651920/pexels-photo-7651920.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <FormContactComponent />
            <ContactInformationComponent />
          </div>
        </div>
      </section>
      <UbicationContactComponent />
    </>
  );
}
