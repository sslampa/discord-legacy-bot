const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legacy-rules')
		.setDescription('Replies with action information!'),
	async execute(interaction) {
	  await interaction.reply('https://images.zmangames.com/filer_public/13/6f/136f296f-2203-4b84-93d8-a092f1e02596/zm71xy_rulebook_web_sm.pdf');
	},
}