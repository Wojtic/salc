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
// tslint:disable:no-console
// tslint:disable:no-var-requires
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = express_1.default.Router();
const User = require("../models/users");
const utils_1 = require("../utils");
router.post("/login", utils_1.checkNotAuthenticated, (req, res, next) => {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: info.message });
        }
        req.logIn(user, (er) => {
            if (er) {
                console.log(er);
                return res.status(400).json({ errors: er });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
});
router.post("/register", utils_1.checkNotAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.username !== undefined &&
            req.body.email !== undefined &&
            req.body.password !== undefined) {
            const result = yield User.findOne({ email: req.body.email });
            if (result) {
                return res.redirect("/login");
            }
            const hashedPwd = yield bcrypt_1.default.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPwd,
            });
            newUser.save((err) => {
                if (err)
                    throw err;
                res.status(200).redirect("/login");
            });
        }
        else {
            res.status(400).json({ message: "Missing credentials" });
        }
    }
    catch (ex) {
        res.status(400);
    }
}));
router.post("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
module.exports = router;
//# sourceMappingURL=auth.js.map