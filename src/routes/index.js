import express from 'express';

export default () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('index');
  });

  return router;
};
