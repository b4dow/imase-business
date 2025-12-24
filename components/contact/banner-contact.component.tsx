export const BannerContactComponent = () => {
  return (
    <div
      className="relative h-80 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7651920/pexels-photo-7651920.jpeg?auto=compress&cs=tinysrgb&w=1920)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contacta con nosotros
          </h1>
          <p className="text-xl">
            Estamos aquí para ayudarle con todas sus necesidades de pesaje.
          </p>
        </div>
      </div>
    </div>
  );
};
