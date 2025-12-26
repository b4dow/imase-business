interface Props {
  title: string;
  subtitle?: string;
  image: string;
}

export const Banner = ({ title, subtitle, image }: Props) => {
  return (
    <div
      className="relative h-80 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
