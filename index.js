// Require the necessary discord.js classes
const { Client, Intents, Interaction, Collection } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs')
const path = require('node:path')
const User = require('./models/user');

const players = require('./seeds/players.json');
const playerCards = require('./seeds/player-cards.json');
const threatCards = require('./seeds/threat-cards.json');
const PlayerCard = require('./models/player-card');
const ThreatCard = require('./models/threat-card');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  client.commands.set(command.data.name, command)
}

// Players
client.players = new Collection();
for (const key in players) {
	client.players.set(key.toLowerCase(), new User(key))
}

// Player Cards
client.playerCards = new Collection();
for (const key in playerCards) {
	const playerCard = playerCards[key]
	client.playerCards.set(key.toLowerCase(), new PlayerCard(key, playerCard.country, playerCard.continent, playerCard.affiliation))
}

client.threatCards = new Collection();
for (const key in threatCards) {
	const threatCard = threatCards[key]
	client.threatCards.set(key.toLowerCase(), new ThreatCard(key, threatCard['incident-name'], threatCard['incident-desc']))
}

// Events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login to Discord with your client's token
client.login(token);