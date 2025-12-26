"use client";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "./button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface searchI {
  name: string;
}

export const SearchProduct = () => {
  const { register, handleSubmit, reset } = useForm<searchI>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("categoria") || "";
  const onSubmit = async (data: searchI) => {
    if (data.name) {
      reset();
      router.refresh();
      return router.push(
        `/productos?name=${data.name} ${category && `&categoria=${category}`}`
      );
    }

    router.refresh();
    return router.push("/productos");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Buscar producto..."
            {...register("name")}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
          />
        </div>
        <Button>Buscar Producto</Button>
      </div>
    </form>
  );
};
