export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  size: Size;
  image: string;
}

enum Size {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'Large',
}
