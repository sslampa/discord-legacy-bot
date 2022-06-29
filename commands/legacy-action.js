const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legacy-action')
		.setDescription('Replies with action information!'),
	async execute(interaction) {
    let actions = ''
    interaction.client.playerActions.forEach((action) => {
      console.log('here', action.info())
      actions += action.info()
    })

	  await interaction.reply(actions);
	},
}