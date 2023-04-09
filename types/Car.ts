export type Cars = Car[];
export type Features = string[];

export interface Car {
  id: number;
  name: string;
  price: string;
  url: string;
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
  url: string;
  seats: number;
  miles: string;
  features: string;
  description: string;
}
