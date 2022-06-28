const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legacy-card')
		.setDescription('Replies with player card information!')
    .addStringOption(option => option.setName('input').setDescription('Enter a card')),
	async execute(interaction) {
    const input = interaction.options.getString('input').toLowerCase();
		await interaction.reply(interaction.client.playerCards.get(input).info());
	},
};