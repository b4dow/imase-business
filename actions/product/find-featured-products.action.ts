"use server";

import prisma from "@/lib/prisma";

export const findFeaturedProductsAction = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
      },
      include: {
        images: {
          select: {
            url: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    });

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

    return {
      ok: true,
      products: formattedProduct,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Los productos no se encuentran disponibles.",
    };
  }
};
