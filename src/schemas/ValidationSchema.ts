import { z } from 'zod';

const carValidationSchema = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.number().min(1886, 'Year must be later than 1885').max(new Date().getFullYear(), 'Year cannot be in the future'),
  price: z.number().positive('Price must be a positive number').min(1, 'Price is required'),
  category: z.string().min(1, 'Category is required'),
  image: z.string().url('Please enter a valid image URL').min(1, 'Image URL is required'),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1').int('Quantity must be an integer').positive('Quantity is required'),
});

export default carValidationSchema;
