import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("I am index");
});

app.get("/hoody" ,(req, res) => {
    res.send("I am a hoody")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})