var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tslint:disable:no-console
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const port = 8080;
const DBclient = new MongoClient("mongodb://localhost:27017/?maxPoolSize=20&w=majority", { useUnifiedTopology: true });
DBclient.connect()
    .then((client) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected successfully to DB server");
    const db = yield DBclient.db("Salc");
    const users = db.collection("Users");
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
    app.get("/login", (req, res) => {
        console.log("hello");
    });
    DBclient.close();
}))
    .catch(console.error);
//# sourceMappingURL=index.js.map