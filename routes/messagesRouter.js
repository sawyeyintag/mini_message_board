const express = require("express");
const {
  getAllMessages,
  getMessageById,
  createMessage,
} = require("../controllers/messagesController");

const messagesRouter = express.Router();

messagesRouter.get("/new", (req, res) => {
  res.render("user-form");
});
messagesRouter.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = getMessageById(messageId);
  res.render("message", { message });
});

messagesRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  createMessage(user, text);
  res.redirect("/");
});

messagesRouter.get("/", (req, res) => {
  const messages = getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
});

module.exports = messagesRouter;
