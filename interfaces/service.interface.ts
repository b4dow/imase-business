export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  availability: boolean;
  whatsappUrl: string;
  featured: boolean;
  images: Array<string>;
}
