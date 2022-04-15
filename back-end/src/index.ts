// tslint:disable:no-console
// tslint:disable:no-var-requires
import express from "express";
import session from "express-session";
const MongoStore = require("connect-mongo");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ----------------------------------------------------- database connection and setup
import mongoose from "mongoose";
const URI = "mongodb://localhost:27017/salc";
mongoose.connect(URI);
const mongoDb = mongoose.connection;

mongoDb.on("error", () => {
  console.error(`Unable to connect to database.`);
});

mongoDb.on("open", () => {
  console.log(`Connected to database.`);
});

const User = require("./models/users");
// ------------------------------------------- session
app.use(
  session({
    secret: "neco velmi tajneho",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: URI }),
  })
);
// ----------------------------------------------------- passport setup
const passport = require("./passport-config");
app.use(passport.initialize());
app.use(passport.session());

// ----------------------------------------------------- routes
const auth = require("./routes/auth");
app.use("/api/auth", auth);

const notes = require("./routes/notes");
app.use("/api/notes", notes);

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(port, () => console.log(`Express running on port ${port}`));
