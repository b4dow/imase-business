"use server";

import prisma from "@/lib/prisma";

interface Props {
  slug: string;
}

export const SingleProductAction = async ({ slug }: Props) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug,
      },
      include: {
        images: true,
        category: true,
      },
    });

    if (!product) {
      return {
        ok: false,
        message: "No se encuentra disponible el producto",
      };
    }

    const formattedProduct = {
      ...product,
      images: product.images.map((image) => image.url),
      category: product.category.name,
    };

    return {
      ok: true,
      product: formattedProduct,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Hubo problemas de la conexión con el producto.",
    };
  }
};
