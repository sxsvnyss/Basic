require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Memasukkan konfigurasi ke client
client.config = require('./config');

// Koleksi command
client.commands = new Map();

// Memuat command handler
const { loadCommands } = require('./handlers/commandHandler');
loadCommands(client);

// Memuat event handler
const { loadEvents } = require('./handlers/eventHandler');
loadEvents(client);

// Login menggunakan token
client.login(process.env.TOKEN);
