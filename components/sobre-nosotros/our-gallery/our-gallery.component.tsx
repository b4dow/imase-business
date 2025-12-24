import { galleryImages } from "./our-gallery.data";

export const OurGalleryComponent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Nuestra <span className="text-[#FF0000]">Galeria</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Un vistazo a nuestros proyectos, instalaciones y compromiso con la
          excelencia.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
