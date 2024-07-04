"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("./config/cors"));
const sendErrorResponse_1 = __importDefault(require("./utils/sendErrorResponse"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use(cors_1.default);
app.use('/users', userRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    (0, sendErrorResponse_1.default)(res, err.status || 500, err.message);
    return;
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
