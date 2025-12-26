"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  categories: Array<{
    id: string;
    slug: string;
    name: string;
  }>;
}

export const SelectedCategorie = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("categoria") || "";

  const router = useRouter();

  const HandleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("categoria", slug);
    } else {
      params.delete("categoria");
    }
    params.delete("page");
    router.push(`/productos?${params.toString()}`);
  };

  return (
    <select
      value={currentCategory}
      onChange={HandleCategoryChange}
      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent bg-white"
    >
      <option value="">Todas las categorias</option>
      {categories.map((category) => {
        return (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
};
