module.exports = {
  name: "ready",
  description: "Mengecek Respon Bot",
  execute(message, args) {
    message.channel.send("Pong!");
  },
};
