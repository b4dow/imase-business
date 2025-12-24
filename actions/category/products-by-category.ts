"use server";

import prisma from "@/lib/prisma";

interface Props {
  slug: string;
}

export const ProductsByCategory = async ({ slug }: Props) => {
  try {
    const category = await prisma.category.findFirst({
      where: { slug },
      include: {
        products: {
          include: {
            images: true,
          },
        },
      },
    });

    if (!category)
      return {
        ok: false,
        message: "Categoria No encontrada en la base de datos.",
      };

    const formattedProducts = category.products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      shortDescription: product.shortDescription,
      fullDescription: product.fullDescription,
      stock: product.stock,
      availability: product.availability,
      whatsappUrl: product.whatsappUrl,
      featured: product.featured,
      category: category.name,
      images: product.images.map((image) => image.url),
    }));

    return {
      ok: true,
      category: category,
      products: formattedProducts,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Hubo problemas de conexión con la categoria.",
    };
  }
};
