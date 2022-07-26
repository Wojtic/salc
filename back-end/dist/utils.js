"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthenticated = exports.checkNotAuthenticated = void 0;
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    return next();
}
exports.checkNotAuthenticated = checkNotAuthenticated;
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401);
}
exports.checkAuthenticated = checkAuthenticated;
//# sourceMappingURL=utils.js.map