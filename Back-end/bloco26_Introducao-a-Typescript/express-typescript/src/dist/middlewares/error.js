"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const validationErros = (error, req, res, next) => {
    const { name, message, details } = error;
    console.log(`name: ${name}`);
    switch (name) {
        case 'ValidationError':
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message });
            break;
        case 'ConflictError':
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message });
            break;
        default:
            console.error(error);
            res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
    next();
};
exports.default = validationErros;
