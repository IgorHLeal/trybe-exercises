const { Router } = require('express');

const BookController = require('../../controllers/BookController');

const router = Router();

router.get('/', BookController.getAll);
router.get('/:id', BookController.findById);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.remove);

module.exports = router;
