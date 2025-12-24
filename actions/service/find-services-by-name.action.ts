"use server";

import prisma from "@/lib/prisma";

interface Props {
  name: string;
  page?: number;
  take?: number;
}

export const FindServicesByNameAction = async ({
  name,
  page = 1,
  take = 6,
}: Props) => {
  if (isNaN(Number(page))) page = 1;

  if (page < 1) page = 1;

  try {
    const services = await prisma.service.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        name: { contains: name, mode: "insensitive" },
      },
      include: {
        images: true,
      },
    });

    if (!services.length)
      return {
        ok: false,
        message: "No se encuentran los servicios disponibles.",
      };

    const countServicesByName = await prisma.service.count({
      where: {
        availability: true,
      },
    });

    const totalPages = Math.ceil(countServicesByName / take);

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
      message: "Hubo problemas de visualización de los servicios",
    };
  }
};
