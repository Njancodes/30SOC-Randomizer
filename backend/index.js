import express from "express";
import cors from "cors"
import { randomCards } from "./readJSON.js";

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    randomCards(Number.parseInt(req.query.number), (err, data) => {
        if (err) console.error(err);
        res.json(data);
    })
})

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
})