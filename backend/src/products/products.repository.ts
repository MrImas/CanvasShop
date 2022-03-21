import { Product } from './products.interface';
import { ProductModel } from './products.model';

export class ProductsRepository {
  static getAll = async (): Promise<any[]> => {
    const products = await ProductModel.find({}).exec();
    return products;
  };

  static getById = async (id: string): Promise<any> => {
    const product = await ProductModel.findById(id).exec();
    return product;
  };

  static create = async (product: Omit<Product, 'id'>): Promise<any> => {
    const createdProduct = await ProductModel.create(product);
    return createdProduct;
  };

  static delete = async (id: string): Promise<any> => {
    const deletedProduct = await ProductModel.findByIdAndDelete(id).exec();
    return deletedProduct;
  };

  static update = async (
    id: string,
    fieldsToUpdate: Partial<Product>
  ): Promise<any> => {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      fieldsToUpdate,
      { new: true }
    ).exec();
    return updatedProduct;
  };
}
