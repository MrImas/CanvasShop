import express from 'express';

import { ProductsController } from './products.controller';

const router: express.Router = express.Router();

router.get('/', ProductsController.getAll);
router.get('/:pid', ProductsController.getById);
router.post('/', ProductsController.create);
router.delete('/:pid', ProductsController.delete);
router.patch('/:pid', ProductsController.update);

export default router;
