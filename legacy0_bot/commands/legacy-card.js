const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legacy-card')
		.setDescription('Replies with player card information!')
		.addSubcommand(subcommand => subcommand
			.setName('player')
			.setDescription('Gets info about card')
			.addStringOption(option => option
				.setName('player')
				.setDescription('Gets info about player card')
				.setRequired(true)))
		.addSubcommand(subcommand => subcommand
			.setName('threat')
			.setDescription('Gets info about threat card')
			.addStringOption(option => option
				.setName('threat')
				.setDescription('Gets info about threat card')
				.setRequired(true))),
	async execute(interaction) {
		const subcommand = interaction.options.getSubcommand();

		if (subcommand === 'player') {
			const playerCard = interaction.options.getString('player');
			playerCard ?
			await interaction.reply(interaction.client.playerCards.get(playerCard.toLowerCase()).info()) :
			await interaction.reply('Card not found');
		} else if (subcommand === 'threat') {
			const threatCard = interaction.options.getString('threat');
			threatCard ?
			await interaction.reply(interaction.client.threatCards.get(threatCard.toLowerCase()).info()) :
			await interaction.reply('Card not found');
		}
	},
};