"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChangeHandler } from "react-hook-form";

interface Props {
  categories: Array<{
    id: string;
    slug: string;
    name: string;
  }>;
}

export const SelectedCategorie = ({ categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const searchParams = useSearchParams();

  const router = useRouter();
  useEffect(() => {
    if (selectedCategory == "All") {
      return router.push("/productos");
    }

    if (searchParams.get("category") === "") {
      setSelectedCategory("All");
    }

    router.push(`/productos?category=${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent bg-white"
    >
      <option value="All">Todas las categorias</option>
      {categories.map((category) => {
        return (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
};
