const { Router } = require('express');

const BookController = require('../../controllers/BookController');

const router = Router();

router.get('/', BookController.getAll);

module.exports = router;
