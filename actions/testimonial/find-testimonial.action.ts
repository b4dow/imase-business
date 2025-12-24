"use server";
import prisma from "@/lib/prisma";

export const FindTestimonialsAction = async () => {
  try {
    const testimonials = await prisma.testimonial.findMany();

    return {
      ok: true,
      testimonials,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se encuentran disponibles los testimonios.",
    };
  }
};
