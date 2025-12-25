"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  categorySlug: string;
}

export const FindProductsByCategoryAction = async ({
  page = 1,
  take = 6,
  categorySlug,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;

  if (page > 1) page = 1;

  try {
    const productsByCategory = await prisma.category.findFirst({
      where: {
        slug: categorySlug,
      },
      include: {
        products: {
          take: take,
          skip: (page - 1) * take,
          include: {
            images: {
              select: {
                url: true,
              },
            },
          },
        },
      },
    });

    if (!productsByCategory)
      return {
        ok: false,
        message: "No se encuentra disponible la categoria.",
      };

    if (!productsByCategory.products.length) {
      return {
        ok: false,
        message: "No se encuentran los productos de la categoria.",
      };
    }

    const countProducts = await prisma.product.count({
      where: {
        categoryId: productsByCategory.id,
        availability: true,
      },
    });

    const totalPages = Math.ceil(countProducts / take);

    const formattedProduct = productsByCategory.products.map((product) => ({
      ...product,
      images: product.images.map((image) => image.url),
      category: productsByCategory.name,
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
