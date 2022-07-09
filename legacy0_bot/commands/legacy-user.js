const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legacy-user')
		.setDescription('Replies with user information!')
    .addStringOption(option => option
				.setName('player')
				.setDescription('Enter a player')
				.setRequired(true)),
	async execute(interaction) {
    const player = interaction.options.getString('player').toLowerCase();
		await interaction.reply(interaction.client.players.get(player).info());
	},
}