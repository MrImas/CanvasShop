"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const products_manager_1 = require("./products.manager");
class ProductsController {
}
exports.ProductsController = ProductsController;
_a = ProductsController;
ProductsController.getAll = async (req, res) => {
    const products = await products_manager_1.ProductsManager.getAll();
    res.json(products);
};
ProductsController.getById = async (req, res) => {
    const { pid } = req.params;
    const product = await products_manager_1.ProductsManager.getById(pid);
    res.json(product);
};
ProductsController.create = async (req, res) => {
    const productToCreate = req.body;
    const createdProduct = await products_manager_1.ProductsManager.create(productToCreate);
    res.json(createdProduct);
};
ProductsController.delete = async (req, res) => {
    const { pid } = req.params;
    const deletedProduct = await products_manager_1.ProductsManager.delete(pid);
    res.json(deletedProduct);
};
ProductsController.update = async (req, res) => {
    const { pid } = req.params;
    const fieldsToUpdate = { ...req.body };
    const deletedProduct = await products_manager_1.ProductsManager.update(pid, fieldsToUpdate);
    res.json(deletedProduct);
};
//# sourceMappingURL=products.controller.js.map