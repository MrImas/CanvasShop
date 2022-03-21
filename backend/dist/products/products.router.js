"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.get('/', products_controller_1.ProductsController.getAll);
router.get('/:pid', products_controller_1.ProductsController.getById);
router.post('/', products_controller_1.ProductsController.create);
router.delete('/:pid', products_controller_1.ProductsController.delete);
router.patch('/:pid', products_controller_1.ProductsController.update);
exports.default = router;
//# sourceMappingURL=products.router.js.map