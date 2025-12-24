"use client";
import { Service } from "@/interfaces";
import { Card } from "./card";
import Link from "next/link";
import { Button } from "./button";
import { CheckCircle, Eye } from "lucide-react";
import { useState } from "react";

interface Props {
  service: Service;
}

export const ServiceCard = ({ service }: Props) => {
  const [customImage, setCustomImage] = useState(service.images[0]);

  const imageUrl =
    service && service.images.length > 0
      ? customImage
      : "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <Card hover>
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={service.name}
          onMouseLeave={() => setCustomImage(service.images[0])}
          onMouseEnter={() => setCustomImage(service.images[1])}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {service.shortDescription}
        </p>
        <div className="flex gap-2">
          <Link href={`/servicio/${service.slug}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              Ver Servicio
            </Button>
          </Link>
          <a
            href="https://wa.me/51936983952"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full flex items-center justify-center gap-2">
              <CheckCircle size={18} />
              Adquirir
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};
