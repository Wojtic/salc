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
const bcrypt_1 = __importDefault(require("bcrypt"));
const passport_1 = __importDefault(require("passport"));
// tslint:disable:no-var-requires
const User = require("./models/users");
const LocalStrategy = require("passport-local").Strategy;
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (mail, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield User.findOne({ email: mail });
        if (result) {
            console.log(mail);
            console.log(result);
            bcrypt_1.default.compare(password, result.password, (err, isMatch) => {
                if (err)
                    throw err;
                if (isMatch) {
                    return done(null, result);
                }
                else {
                    return done(null, false, { message: "Wrong password" });
                }
            });
        }
        else {
            return done(null, false, { message: "No user with that email" });
        }
    }
    catch (ex) {
        return done(ex, false, { message: ex });
    }
})));
module.exports = passport_1.default;
//# sourceMappingURL=passport-config.js.map