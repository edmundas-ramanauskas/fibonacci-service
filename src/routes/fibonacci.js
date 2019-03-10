import express from 'express';
import { fibonacci } from '../services';

export default () => {
  const router = express.Router();

  router.get('/:n', (req, res) => {
    const { n } = req.params;
    const num = parseInt(n);
    try {
      const result = fibonacci(num);
      res.send({ result });
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  return router;
}
