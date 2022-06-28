const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legacy-user')
		.setDescription('Replies with user information!')
    .addSubcommand(subcommand =>
			subcommand.setName('input')
				.setDescription('Enter a player')
				.addUserOption(sub =>
						sub.setName('cards')
							.setDescription('Info about player cards')
							// .addUserOption(option => option.setName('target'))
				)
		),
	async execute(interaction) {
    const input = interaction.options.getString('input').toLowerCase();
		await interaction.reply(interaction.client.players.get(input).info());
	},
}