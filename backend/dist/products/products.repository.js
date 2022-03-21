"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const products_model_1 = require("./products.model");
class ProductsRepository {
}
exports.ProductsRepository = ProductsRepository;
_a = ProductsRepository;
ProductsRepository.getAll = async () => {
    const products = await products_model_1.ProductModel.find({}).exec();
    return products;
};
ProductsRepository.getById = async (id) => {
    const product = await products_model_1.ProductModel.findById(id).exec();
    return product;
};
ProductsRepository.create = async (product) => {
    const createdProduct = await products_model_1.ProductModel.create(product);
    return createdProduct;
};
ProductsRepository.delete = async (id) => {
    const deletedProduct = await products_model_1.ProductModel.findByIdAndDelete(id).exec();
    return deletedProduct;
};
ProductsRepository.update = async (id, fieldsToUpdate) => {
    const updatedProduct = await products_model_1.ProductModel.findByIdAndUpdate(id, fieldsToUpdate, { new: true }).exec();
    return updatedProduct;
};
//# sourceMappingURL=products.repository.js.map