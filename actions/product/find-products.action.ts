"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const findProductsAction = async ({
  page = 1,
  take = 6,
}: PaginationOptions) => {
  const where: any = {};

  if (isNaN(Number(page))) page = 1;

  if (page < 1) page = 1;

  try {
    const products = await prisma.product.findMany({
      where: {
        availability: true,
      },
      take: take,
      skip: (page - 1) * take,
      include: {
        images: true,
        category: true,
      },
    });

    // Obtener el total de Paginas

    const countProducts = await prisma.product.count({
      where: {
        availability: true,
      },
    });

    const totalPages = Math.ceil(countProducts / take);

    // Formateado de Products
    const formattedProduct = products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      shortDescription: product.shortDescription,
      fullDescription: product.fullDescription,
      stock: product.stock,
      availability: product.availability,
      whatsappUrl: product.whatsappUrl,
      featured: product.featured,
      category: product.category.name,
      images: product.images.map((image) => image.url),
    }));

    console.log({ products, countProducts });

    return {
      ok: true,
      products: formattedProduct,
      currentPage: page,
      totalPages: totalPages,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "los productos no se encuentran disponibles",
    };
  }
};
