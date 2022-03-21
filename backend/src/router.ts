import express from 'express';

import productsRouter from './products/products.router';

const router: express.Router = express.Router();

router.use('/products', productsRouter);

export default router;
