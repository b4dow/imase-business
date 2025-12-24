"use server";

import { Service } from "@/interfaces";
import prisma from "@/lib/prisma";

interface Props {
  slug: Service["slug"];
}

export const SingleServiceAction = async ({ slug }: Props) => {
  try {
    const service = await prisma.service.findFirst({
      where: {
        slug,
      },
      include: {
        images: true,
      },
    });

    if (!service) {
      return {
        ok: false,
        message: "No se encuentra disponible el servicio",
      };
    }

    const formattedService = {
      ...service,
      images: service.images.map((image) => image.url),
    };

    return {
      ok: true,
      service: formattedService,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo problemas de conexión con los datos del servicio",
    };
  }
};
