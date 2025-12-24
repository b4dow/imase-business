"use client";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Product } from "@/interfaces/product.interface";
import { Card } from "./card";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const [customImage, setCustomImage] = useState(product.images[0]);

  const imageUrl =
    product.images && product.images.length > 0
      ? customImage
      : "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <>
      {product.availability && (
        <Card hover>
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={imageUrl}
              alt={product.name}
              onMouseLeave={() => setCustomImage(product.images[0])}
              onMouseEnter={() => setCustomImage(product.images[1])}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <div className="text-sm text-[#FF0000] font-semibold mb-2">
              {product.category}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.shortDescription}
            </p>

            <div className="flex gap-2">
              <Link href={`/producto/${product.slug}`} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Eye size={18} />
                  Ver
                </Button>
              </Link>
              {product.whatsappUrl ? (
                <a
                  href={product.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Comprar
                  </Button>
                </a>
              ) : (
                <a
                  href="https://wa.me/51936983952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Comprar
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
