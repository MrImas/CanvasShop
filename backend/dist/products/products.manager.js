"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsManager = void 0;
const products_repository_1 = require("./products.repository");
class ProductsManager {
}
exports.ProductsManager = ProductsManager;
ProductsManager.getAll = () => {
    return products_repository_1.ProductsRepository.getAll();
};
ProductsManager.getById = (id) => {
    return products_repository_1.ProductsRepository.getById(id);
};
ProductsManager.create = (product) => {
    return products_repository_1.ProductsRepository.create(product);
};
ProductsManager.delete = (id) => {
    return products_repository_1.ProductsRepository.delete(id);
};
ProductsManager.update = (id, fieldsToUpdate) => {
    return products_repository_1.ProductsRepository.update(id, fieldsToUpdate);
};
//# sourceMappingURL=products.manager.js.map