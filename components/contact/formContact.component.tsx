"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { SendFormContactAction } from "@/actions";
import { Bounce, toast } from "react-toastify";

const contactFormSchema = z.object({
  name: z.string().nonempty({ error: "El campo nombre es obligatorio" }),
  email: z.email("El campo debe ser un correo electronico."),
  subject: z.string().nonempty({ error: "El campo asunto es obligatorio." }),
  phone: z.string().nonempty({ error: "El campo telefono es obligatorio " }),
  message: z.string().nonempty({ error: "El campo mensaje es obligatorio" }),
});

type ContactFormInterface = z.infer<typeof contactFormSchema>;

export const FormContactComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ContactFormInterface>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInterface> = async (data) => {
    console.log({ data });
    const { ok } = await SendFormContactAction({
      name: data.name,
      email: data.email,
      subject: data.subject,
      phone: data.phone,
      message: data.message,
    });

    if (!ok) {
      toast.error("mensaje no enviado.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    toast.success("mensaje enviado con exito", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      theme: "light",
      transition: Bounce,
    });
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
          {errors.name && (
            <p className="text-[#FF0000] text-center">{errors.name.message}</p>
          )}
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
          {errors.email && (
            <p className="text-[#FF0000] text-center">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Asunto
          </label>
          <input
            type="text"
            {...register("subject")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
            placeholder="información"
          />
          {errors.subject && (
            <p className="text-[#FF0000] text-center">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Telefono
          </label>
          <input
            type="string"
            {...register("phone")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
            placeholder="+51 999 999 999"
          />
          {errors.phone && (
            <p className="text-[#FF0000] text-center">{errors.phone.message}</p>
          )}
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
            placeholder="Cuéntanos cómo podemos ayudarte..."
          />
          {errors.message && (
            <p className="text-[#FF0000] text-center">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
        >
          <Send size={20} />
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  );
};
