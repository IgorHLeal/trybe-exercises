const { Router } = require('express');

const BooksController = require('../../controllers/BooksController');

const router = Router();

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.create);
router.put('/:id', BooksController.update);
router.delete('/:id', BooksController.remove);

module.exports = router;
