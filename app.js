const express = require("express");
const path = require("node:path");
const messagesRouter = require("./routes/messagesRouter");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", messagesRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
