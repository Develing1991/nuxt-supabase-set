export type Cars = Car[] | null;
export type Features = string[];

export interface Car {
  id: number;
  year?: number;
  name: string;
  price: number;
  city: string;
  make: string;
  image: string;
  seats: number;
  miles: string;
  features: Features;
  description: string;
}

export type Makes = string[];

export type Listings = Listing[];

export interface Listing {
  id: number;
  name: string;
  make: string;
  model: string;
  price: string;
  year: number;
  city: string;
  image: string;
  seats: number;
  miles: string;
  features: string;
  description: string;
}
