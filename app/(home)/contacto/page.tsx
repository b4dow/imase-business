import {
  BannerContactComponent,
  ContactInformationComponent,
  FormContactComponent,
  UbicationContactComponent,
} from "@/components";

export default function Contact() {
  return (
    <>
      <BannerContactComponent />
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
