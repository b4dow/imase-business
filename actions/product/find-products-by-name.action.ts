"use server";

import prisma from "@/lib/prisma";

interface Props {
  take?: number;
  page?: number;
  name: string;
}

export const FindProductsByNameAction = async ({
  take = 6,
  page = 1,
  name,
}: Props) => {
  if (isNaN(Number(page))) page = 1;

  if (page < 1) page = 1;
  try {
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        name: { contains: name, mode: "insensitive" },
      },
      include: {
        images: true,
        category: true,
      },
    });

    if (!products.length) {
      return {
        ok: false,
        message: "No se encuentran los productos",
      };
    }

    const countProducts = await prisma.product.count({
      where: {
        availability: true,
      },
    });

    const totalPages = Math.ceil(countProducts / take);

    const formateddProduct = products.map((product) => ({
      ...product,
      images: product.images.map((image) => image.url),
      category: product.category.name,
    }));

    return {
      ok: true,
      products: formateddProduct,
      totalPages: totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No hay productos disponibles",
    };
  }
};
