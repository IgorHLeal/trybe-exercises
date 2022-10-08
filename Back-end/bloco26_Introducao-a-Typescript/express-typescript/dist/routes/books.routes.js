"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const router = (0, express_1.Router)();
const booksController = new books_controller_1.default();
router.get('/books', booksController.getAll);
exports.default = router;
