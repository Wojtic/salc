"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
// tslint:disable:no-var-requires
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const MongoStore = require("connect-mongo");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// ----------------------------------------------------- database connection and setup
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost:27017/salc";
mongoose_1.default.connect(URI);
const mongoDb = mongoose_1.default.connection;
mongoDb.on("error", () => {
    console.error(`Unable to connect to database.`);
});
mongoDb.on("open", () => {
    console.log(`Connected to database.`);
});
const User = require("./models/users");
// ------------------------------------------- session
app.use((0, express_session_1.default)({
    secret: "neco velmi tajneho",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: URI }),
}));
// ----------------------------------------------------- passport setup
const passport = require("./passport-config");
app.use(passport.initialize());
app.use(passport.session());
// ----------------------------------------------------- routes
const auth = require("./routes/auth");
app.use("/api/auth", auth);
app.get("/", (req, res) => {
    res.send("Hi!");
});
app.listen(port, () => console.log(`Express running on port ${port}`));
//# sourceMappingURL=index.js.map