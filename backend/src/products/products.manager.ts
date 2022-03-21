import { Product } from './products.interface';
import { ProductsRepository } from './products.repository';

export class ProductsManager {
  static getAll = () => {
    return ProductsRepository.getAll();
  };

  static getById = (id: string): Promise<any> => {
    return ProductsRepository.getById(id);
  };

  static create = (product: Omit<Product, 'id'>): Promise<any> => {
    return ProductsRepository.create(product);
  };

  static delete = (id: string): Promise<any> => {
    return ProductsRepository.delete(id);
  };

  static update = (
    id: string,
    fieldsToUpdate: Partial<Product>
  ): Promise<any> => {
    return ProductsRepository.update(id, fieldsToUpdate);
  };
}
