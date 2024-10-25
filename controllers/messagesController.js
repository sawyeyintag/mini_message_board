const { v4: uuidv4 } = require("uuid");

const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getAllMessages() {
  return messages;
}

function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

function createMessage(user, text) {
  const newMessage = {
    id: uuidv4(),
    text: text,
    user: user,
    added: new Date(),
  };
  messages.push(newMessage);
}

module.exports = { getAllMessages, getMessageById, createMessage };
