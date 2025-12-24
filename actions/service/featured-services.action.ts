"use server";

import prisma from "@/lib/prisma";

export const FeaturedServicesAction = async () => {
  try {
    const services = await prisma.service.findMany({
      where: {
        featured: true,
      },
      include: {
        images: {
          select: {
            url: true,
          },
        },
      },
    });

    const formattedService = services.map((service) => ({
      id: service.id,
      name: service.name,
      slug: service.slug,
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      availability: service.availability,
      whatsappUrl: service.whatsappUrl,
      featured: service.featured,
      images: service.images.map((image) => image.url),
    }));

    return {
      ok: true,
      services: formattedService,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se encuentran disponibles los servicios destacados.",
    };
  }
};
