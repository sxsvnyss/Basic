module.exports = {
    name: 'messageCreate',
    execute(message, client) {
      if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
  
      const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
  
      const command = client.commands.get(commandName);
      if (command) {
        try {
          command.execute(message, args);
        } catch (error) {
          console.error(error);
          message.reply('Terjadi kesalahan ketika menjalankan perintah tersebut!');
        }
        return;
      }
  
      if (client.config.customCommands && client.config.customCommands.hasOwnProperty(commandName)) {
        message.channel.send(client.config.customCommands[commandName]);
        return;
      }
    },
  };  