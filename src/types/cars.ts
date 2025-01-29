export type Car = {
    _id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    category: string;
    description: string;
    quantity: number;
    inStock: boolean;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  };


  export interface Order {
    email: string;
    car: string;
    quantity: number;
    totalPrice: number;
    name: string;
    phone_number: string;
    address: string;
}

  