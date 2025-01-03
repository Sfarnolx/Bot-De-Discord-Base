# My Discord Bot

This is a simple Discord bot built using Node.js and the discord.js library. It includes a basic command structure and demonstrates how to set up a bot that responds to commands.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-discord-bot.git
   ```
2. Navigate to the project directory:
   ```
   cd my-discord-bot
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Discord bot token:
   ```
   DISCORD_TOKEN=your_token_here
   ```

## Usage

To start the bot, run the following command:
```
node src/bot.js
```

Make sure your bot is invited to a server and has the necessary permissions to read messages and send messages.

## Commands

- **ping**: Responds with "pong".  
  Usage: `!ping`
