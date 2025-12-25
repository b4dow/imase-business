import { Eye, Target } from "lucide-react";

export const OurValuesComponent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className=" p-8 rounded-lg shadow-md border-t-4 border-[#FF0000]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#FF0000]/10 p-3  rounded-full">
                <Target className="text-[#FF0000]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Proporcionar soluciones de medición confiables y precisas,
              manteniendo la calidad y la confianza en cada calibración y
              servicio. Nos comprometemos a ayudar a nuestros clientes a
              alcanzar la excelencia operativa mediante sistemas de pesaje
              precisos que cumplen con los más altos estándares de la industria.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-700/10 p-3 rounded-full">
                <Eye className="text-gray-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Liderar el mercado de soluciones de pesaje en Latinoamérica y el
              resto del mundo, ampliando nuestra red de distribuidores y
              manteniendo la excelencia técnica. Visualizamos un futuro donde
              todas las empresas tengan acceso a tecnología de medición de
              primer nivel y soporte experto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
