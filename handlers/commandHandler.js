const fs = require("fs");
const path = require("path");

function loadCommands(client) {
    const commanndsPath = path.join(__dirname, "../commands");
    const commandsFiles = fs.readdirsyinc(commandsPath).filter(file => file.endsWith(".js"));

    for (const file of commandsFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if (command && command.name) {
            client.commands.set(command.name, command);
                console.log(`Command loaded: ${command.name}`);
        }
    }

}

module.exports = { loadCommands };