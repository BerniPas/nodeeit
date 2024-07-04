"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendErrorResponse(res, statusCode, message) {
    res.status(statusCode).json({ error: message });
}
exports.default = sendErrorResponse;
