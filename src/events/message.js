const moment = require('moment');
const { locale } = require('../../config/locale');
const { prefix } = require('../../config/bot');

moment.locale(locale);

const prefixHelp = '?';

const message = async (client, msg) => {
  if (msg.author.bot) {
    return;
  }

  client.triggers.forEach(({ execute }) => execute(msg));

  if (msg.content.startsWith(prefixHelp)) {
    const args = msg.content.slice(prefixHelp.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'commands') {
      const commandUsage = client.commands.map(({ usage }) => usage);

      msg.channel.send(`***Comandos:***\n${commandUsage.join('')}`);
    }
  }

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (command) {
      try {
        await command.execute(msg, args);
      } catch (e) {
        msg.reply('infelizmente não consigo satisfazer esse pedido');
      }
    }
  }
};

module.exports = message;
