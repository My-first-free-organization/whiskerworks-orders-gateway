import express from 'express';
import { router } from './orders.routes';

const app = express();
app.use(express.json());
app.use('/orders', router);
app.get('/health', (_, res) => res.json({ ok: true }));
app.listen(Number(process.env.PORT ?? 3000));
