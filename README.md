# Discord Bot

A simple Discord bot built with Discord.js that handles commands and events.

## Features

- Command handling system
- Event handling system
- Custom prefix configuration
- Basic ping command
- Message event handling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sxsvnyss/Basic.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your bot token:
```env
TOKEN=your_discord_bot_token_here
```

4. Configure the bot prefix in `config.js`

## Usage

To start the bot:
```bash
node al.js
```

## Commands

- `!ping` - Check if the bot is responsive

## Project Structure

```
├── commands/
│   └── ping.js
├── events/
│   ├── messageCreate.js
│   └── ready.js
├── handlers/
│   ├── commandHandler.js
│   └── eventHandler.js
├── al.js
├── config.js
└── .env
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)