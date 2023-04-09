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
