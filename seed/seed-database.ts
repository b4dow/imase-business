import prisma from "../lib/prisma";
import { categories, products, services, testimonials } from "./seed";

async function main() {
  console.log("seed database!!!");
  await prisma.productImage.deleteMany();
  await prisma.serviceImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.service.deleteMany();
  await prisma.category.deleteMany();
  await prisma.testimonial.deleteMany();

  await prisma.category.createMany({
    data: categories,
  });

  const categoryFind = await prisma.category.findFirst({
    where: {
      name: "Balanzas",
    },
  });

  if (!categoryFind) return;

  products.forEach(async (product) => {
    const { images, ...rest } = product;
    const productCreate = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoryFind.id,
      },
    });

    await prisma.productImage.createMany({
      data: images.map((image) => ({
        url: image,
        productId: productCreate.id,
      })),
    });
  });

  services.forEach(async (service) => {
    const { images, ...rest } = service;
    const serviceCreate = await prisma.service.create({
      data: {
        ...rest,
      },
    });

    await prisma.serviceImage.createMany({
      data: images.map((image) => ({
        url: image,
        serviceId: serviceCreate.id,
      })),
    });
  });

  testimonials.forEach(async (testimonial) => {
    return await prisma.testimonial.create({
      data: testimonial,
    });
  });
}

(() => main())();
