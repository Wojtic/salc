// tslint:disable:no-console
import bcrypt from "bcrypt";
import passport from "passport";
// tslint:disable:no-var-requires
const User = require("./models/users");
const LocalStrategy = require("passport-local").Strategy;

type DoneFunction = (err: Error | null, user?: any, info?: any) => void;

passport.serializeUser((user: any, done: DoneFunction) => {
  done(null, user.id);
});

passport.deserializeUser((id: any, done: DoneFunction) => {
  User.findById(id, (err: Error, user: any) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (mail: string, password: string, done: DoneFunction) => {
      try {
        const result = await User.findOne({ email: mail });
        if (result) {
          bcrypt.compare(
            password,
            result.password,
            (err: any, isMatch: boolean) => {
              if (err) throw err;

              if (isMatch) {
                return done(null, result);
              } else {
                return done(null, false, { message: "Wrong password" });
              }
            }
          );
        } else {
          return done(null, false, { message: "No user with that email" });
        }
      } catch (ex: any) {
        return done(ex, false, { message: ex });
      }
    }
  )
);

module.exports = passport;
