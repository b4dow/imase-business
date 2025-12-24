export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  stock: number;
  availability: boolean;
  whatsappUrl: string;
  featured?: boolean;
  category: string;
  images: Array<string>;
}
