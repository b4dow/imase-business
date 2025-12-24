"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  category: string;
}

export const FindProductsByCategoryAction = async ({
  page = 1,
  take = 6,
  category,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;

  if (page > 1) page = 1;

  try {
    const productsByCategory = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        categoryId: category,
      },
      include: {
        images: true,
        category: true,
      },
    });

    if (!productsByCategory.length) {
      return {
        ok: false,
        message: "No se encuentran los productos de la categoria.",
      };
    }

    const countProducts = await prisma.product.count({
      where: {
        availability: true,
      },
    });

    const totalPages = Math.ceil(countProducts / take);

    const formattedProduct = productsByCategory.map((product) => ({
      ...product,
      images: product.images.map((image) => image.url),
      category: product.category.name,
    }));

    return {
      ok: true,
      products: formattedProduct,
      totalPages: totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo problemas con la conexion a los productos",
    };
  }
};
