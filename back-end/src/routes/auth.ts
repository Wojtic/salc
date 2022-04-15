// tslint:disable:no-console
// tslint:disable:no-var-requires
import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
const router = express.Router();
const User = require("../models/users");

function checkNotAuthenticated(req: any, res: any, next: any) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return next();
}

router.post(
  "/login",
  checkNotAuthenticated,
  (req: any, res: any, next: any) => {
    passport.authenticate("local", (err: Error, user: any, info: any) => {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      if (!user) {
        return res.status(400).json({ errors: info.message });
      }
      req.logIn(user, (er: Error) => {
        if (er) {
          console.log(er);

          return res.status(400).json({ errors: er });
        }
        return res.status(200).json({ success: `logged in ${user.id}` });
      });
    })(req, res, next);
  }
);

router.post("/register", checkNotAuthenticated, async (req: any, res: any) => {
  try {
    if (
      req.body.username !== undefined &&
      req.body.email !== undefined &&
      req.body.password !== undefined
    ) {
      const result = await User.findOne({ email: req.body.email });
      if (result) {
        return res.redirect("/login");
      }
      const hashedPwd = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPwd,
      });
      newUser.save((err: Error) => {
        if (err) throw err;
        res.status(200).redirect("/login");
      });
    } else {
      res.status(400).json({ message: "Missing credentials" });
    }
  } catch (ex: any) {
    res.status(400);
  }
});

router.post("/logout", (req: any, res: any) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
