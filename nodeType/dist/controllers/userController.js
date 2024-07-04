"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.loginUser = exports.registerUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const sendErrorResponse_1 = __importDefault(require("../utils/sendErrorResponse"));
const registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const userExists = yield User_1.default.findOne({ email });
    if (userExists) {
        (0, sendErrorResponse_1.default)(res, 400, 'El usuario ya existe');
        return;
    }
    const newUser = new User_1.default({ name, email, password });
    const savedUser = yield newUser.save();
    if (savedUser) {
        res.status(201).json({
            name: savedUser.name,
            token: (0, generateToken_1.default)(savedUser.name, savedUser.email),
        });
    }
    else {
        (0, sendErrorResponse_1.default)(res, 400, 'Error en el servidor');
        return;
    }
}));
exports.registerUser = registerUser;
const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (user && (yield user.matchPassword(password))) {
        res.status(200).json({
            name: user.name,
            token: (0, generateToken_1.default)(user.name, user.email),
        });
    }
    else {
        (0, sendErrorResponse_1.default)(res, 401, 'Password o User incorrecto');
        return;
    }
}));
exports.loginUser = loginUser;
const updateUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authUserSeq = res.locals.user.userSeq;
    const userSeq = Number(req.params.userSeq);
    const user = yield User_1.default.findOne({ userSeq: userSeq });
    if (!user) {
        (0, sendErrorResponse_1.default)(res, 404, `${userSeq} Sin autorización para acceder a este recurso.`);
        return;
    }
    /*     if (user.userSeq !== authUserSeq) {
            sendErrorResponse(res, 401, 'Unauthorized');
            return;
        } */
    user.name = req.body.name;
    yield user.updateOne({ name: req.body.name });
    const updatedUser = yield User_1.default.findOne({ userSeq: userSeq });
    res.status(200).json({ name: updatedUser.name });
}));
exports.updateUser = updateUser;
const deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authUserSeq = res.locals.user.userSeq;
    const userSeq = Number(req.params.userSeq);
    const user = yield User_1.default.findOne({ userSeq: userSeq });
    if (!user) {
        (0, sendErrorResponse_1.default)(res, 404, `${userSeq} Sin autorización para acceder a este recurso.`);
        return;
    }
    /*     if (user.userSeq !== authUserSeq) {
            sendErrorResponse(res, 401, 'Unauthorized');
            return;
        } */
    yield User_1.default.deleteOne({ userSeq: authUserSeq });
    res.status(200).json({ message: 'Usuario Eliminado' });
}));
exports.deleteUser = deleteUser;
