"use client";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

export const FormContactComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log(onSubmit);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Contacta <span className="text-[#FF0000]">Ahora</span>
      </h2>
      <p className="text-gray-600 mb-8">
        ¿Tiene alguna pregunta sobre nuestros productos o servicios? Complete el
        formulario y nos pondremos en contacto con usted lo antes posible.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
            placeholder="Juan Pérez"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Correo Electronico
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
            placeholder="juan@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Telefono
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
            placeholder="+51 999 999 999"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mensaje
          </label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Enviar Mensaje
        </Button>
      </form>
    </div>
  );
};
