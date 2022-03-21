"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
mongoose_1.default
    .connect(`mongodb+srv://admin:admin123@canvas-shop.6uhex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('connected to DB');
    app.listen(process.env.PORT || 3000, () => {
        console.log('server listening...');
    });
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map