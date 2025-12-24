"use server";

import prisma from "@/lib/prisma";

interface Props {
  page?: number;
  take?: number;
}

export const FindServicesAction = async ({ page = 1, take = 6 }: Props) => {
  try {
    const services = await prisma.service.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        images: true,
      },
    });

    if (!services.length) {
      return {
        ok: false,
        message: "No se encuentran disponibles los servicios",
      };
    }

    const countServices = await prisma.service.count({
      where: {
        availability: true,
      },
    });

    const totalPages = Math.ceil(countServices / take);

    const formattedServices = services.map((service) => ({
      ...service,
      images: service.images.map((image) => image.url),
    }));

    return {
      ok: true,
      services: formattedServices,
      totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo problema con la visualización de los servicios",
    };
  }
};
