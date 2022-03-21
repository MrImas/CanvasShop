import { Request, Response } from 'express';
import { Product } from './products.interface';

import { ProductsManager } from './products.manager';

export class ProductsController {
  static getAll = async (req: Request, res: Response) => {
    const products = await ProductsManager.getAll();
    res.json(products);
  };

  static getById = async (req: Request, res: Response) => {
    const { pid } = req.params;
    const product = await ProductsManager.getById(pid);
    res.json(product);
  };

  static create = async (req: Request, res: Response) => {
    const productToCreate: Product = req.body;
    const createdProduct = await ProductsManager.create(productToCreate);
    res.json(createdProduct);
  };

  static delete = async (req: Request, res: Response) => {
    const { pid } = req.params;
    const deletedProduct = await ProductsManager.delete(pid);
    res.json(deletedProduct);
  };

  static update = async (req: Request, res: Response) => {
    const { pid } = req.params;
    const fieldsToUpdate = { ...req.body };
    const deletedProduct = await ProductsManager.update(pid, fieldsToUpdate);
    res.json(deletedProduct);
  };
}
