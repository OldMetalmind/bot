const moment = require('moment');
const { locale } = require('../../config/locale');
const { prefix } = require('../../config/bot');

moment.locale(locale);

const message = (client, msg) => {
  const prefixHelp = '?';

  if (msg.content.toLowerCase().includes('vostpt') && !msg.author.bot) {
    const replies = [
      'Provavelmente a melhor VOST do mundo',
      ':eyes:',
      ':heart:',
      'Sabias que a VOSTPT primeiro se chamou CONAC-TW no Twitter?',
    ];
    const replytext = Math.floor(Math.random() * replies.length + 0);
    try {
      msg.reply(replies[replytext]);
    } catch (e) {
      //
    }

    return;
  }

  // catering
  // Morning Routine

  if (msg.content.toLowerCase().includes('bom dia') && !msg.author.bot) {
    const hora = parseInt(moment(msg.createdTimestamp).format('H'), 10);
    let msgString = '';

    if (hora >= 13 && hora < 20) {
      msgString = `Para mim já é boa tarde! (*mas isso sou eu que só tenho o cérebro do tamanho do universo*) `;
    } else if (hora >= 20) {
      msgString = `Para mim já é boa Noite! **Estás bem?**`;
    } else if (hora < 6) {
      msgString = `Já de pé a estas horas? **ALVORADA!!!!!!**`;
    } else {
      msgString = `Bom Dia, `;
      switch (msg.author.discriminator) {
        case '1318':
          msgString += 'aqui tens o teu chá verde :tea:';
          break;
        case '5850':
          msgString += 'aqui tens o teu chá verde quentinho :tea:';
          break;
        case '2458':
          msgString += 'já sei que não bebes café. Aceita antes um chá :tea:';
          break;
        case '7744':
          msgString += 'aqui está o teu chá! :tea:';
          break;
        case '2908':
          msgString += 'duplo curto, como gostas, certo? :coffee:';
          break;
        case '6984':
          msgString +=
            'tu, café? Ainda és uma criança, toma lá um copo de leite :milk:';
          break;
        default:
          msgString += 'aqui tens o teu café :coffee:';
          break;
      }
    }

    try {
      msg.reply(msgString);
    } catch (e) {
      //
    }
  }

  // Good Afternoon routine

  if (msg.content.toLowerCase().includes('boa tarde') && !msg.author.bot) {
    const hour = parseInt(moment(msg.createdTimestamp).format('H'), 10);

    let msgString = `Tarde?? Viesses mais cedo :thinking:`;

    if (hour < 12) {
      msgString = `Ainda não é boa tarde, digo eu que só tenho o cérebro do tamanho do universo.`;
    } else if (hour < 15) {
      msgString = `Olá boa tarde, já almoçaste?`;
    } else if (hour < 17) {
      msgString = `Olá boa tarde, tudo bem contigo?`;
    } else if (hour < 19) {
      msgString = `Boas! Vai um lanchinho? :milk: :cake:`;
    }

    try {
      msg.reply(msgString);
    } catch (e) {
      //
    }
  }

  // Good Night routine
  if (msg.content.toLowerCase().includes('boa noite') && !msg.author.bot) {
    const hour = parseInt(moment(msg.createdTimestamp).format('H'), 10);

    let msgString = `Por aqui a estas horas? Deves ser developer, ou estamos activados e ninguém me disse :thinking:`;

    if (hour >= 7 && hour <= 19) {
      msgString = `Boa noite? Estás em que fuso horário?`;
    } else if (hour >= 20 && hour <= 23) {
      msgString = `Boa noit, já jantaste?`;
    }

    try {
      msg.reply(msgString);
    } catch (e) {
      //
    }
  }

  if (msg.content === '!coffee') {
    msg.channel.send(
      `@everyone A pedido de ${msg.author} tomem lá um café! :coffee:`,
    );
  }

  if (msg.content === '!champagne') {
    msg.channel.send(
      `@everyone A pedido de ${
        msg.author
      } vamos todos celebrar :champagne: :champagne_glass:`,
    );
  }

  // End Catering

  // Foul Language
  if (msg.content.toLowerCase().includes('merda') && !msg.author.bot) {
    msg.reply(
      `Hey https://media1.tenor.com/images/ff97f5136e14b88c76ea8e8488e23855/tenor.gif?itemid=13286953`,
    );
  }
  // End Foul Language

  // Teaching
  if (msg.content.toLowerCase().includes('voluntários') && !msg.author.bot) {
    msg.reply(
      `Desculpa interromper, mas na VOST Portugal ser voluntário é trabalhar para a invisibilidade e sempre com transparência`,
    );
  }

  if (msg.content.toLowerCase().includes('💪') && !msg.author.bot) {
    msg.channel.send(
      `Muito vai esta gente ao ginásio, graças a Deus :rolling_eyes: `,
    );
  }

  // Football? No problem! (If you are in the US reading this code we mean real football, not the thing you play with pads and helmets)
  if (msg.content.toLowerCase().includes('benfica') && !msg.author.bot) {
    msg.reply(
      `:eagle: **SLB! SLB! SLB! SLB! SLB! SLB! Glorioso SLB! GLORIOSO SLB!** :eagle:`,
    );
  }

  if (msg.content.toLowerCase().includes('sporting') && !msg.author.bot) {
    msg.reply(
      `:lion_face: **Todo o mundo sabe porque não fico em casa!** :lion_face:`,
    );
  }

  if (msg.content.toLowerCase().includes('fcp') && !msg.author.bot) {
    msg.channel.send(
      `:dragon: ${
        msg.author
      } :dragon: **Azul e branco é o coração! E salta Porto! E salta Porto! Allez! Allez!** :dragon:`,
    );
  }

  if (msg.content.toLowerCase().includes('fc porto') && !msg.author.bot) {
    msg.channel.send(
      `:dragon: ${
        msg.author
      } :dragon: **E salta Porto! E salta Porto! Allez! Allez!** :dragon:`,
    );
  }

  if (msg.content.toLowerCase().includes('senhorim') && !msg.author.bot) {
    msg.channel.send(
      `:bear: ${
        msg.author
      } :bear: **SENHORIM! SENHORIM! QUEM AQUI VEM NÃO MANDA AQUI!** :bear:`,
    );
  }

  if (msg.content.toLowerCase().includes('scb') && !msg.author.bot) {
    msg.channel.send(
      `${msg.author} **Braga Braga Braga, vamos para a frente!**`,
    );
  }

  if (msg.content.toLowerCase().includes('sc braga') && !msg.author.bot) {
    msg.channel.send(
      `${msg.author} **Braga Braga Braga, vamos para a frente!**`,
    );
  }
  // End Football
  // End just for fun

  if (msg.content.startsWith(prefixHelp) && !msg.author.bot) {
    const args = msg.content.slice(prefixHelp.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'commands') {
      let resp = '\n';

      resp += '**!coffee** - *Manda vir café para todos.*\n';
      resp +=
        '**!champagne** - *Se há algo para festejar, serve champagne a todos*\n';
      resp +=
        '**!all** - *Mostra todas as ocorrências em estado de despacho, em curso ou em resolução.*\n';
      resp +=
        '**!all [human|ground|air] [numero_filtrar]** - *Igual ao anterior mas com filtro.*\n';
      resp +=
        '**!all links** - *Mostra todas as ocorrências e o link para o fogos.pt em estado de despacho, em curso ou em resolução.*\n';
      resp +=
        '**!all important** - *Mostra todas as ocorrências marcadas como importantes na ProCivApi.*\n';
      resp +=
        '**!op id [numero_id]** - *Mostra os dados relativos à ocorrência com esse id.*\n';
      resp +=
        '**!op if [#IFConcelho]** - *Mostra os dados relativos à ocorrência com esse #IF.*\n';
      resp +=
        '**!op status [Despacho|Curso|Resolução|Conclusão|Vigilância]** - *Mostra as ocorrências com o estado indicado.*\n';
      resp +=
        '**!op distrito [nome_distrito]** - *Mostra as ocorrências no distrito indicado. NOTA: Distrito deve ser introduzido sem espaço e em minúsculas*\n';
      resp += '**!weather** - *Mostra a meteorologia do dia atual.*\n';
      resp +=
        '**!weather tomorrow** - *Mostra a meteorologia do dia seguinte.*\n';
      resp +=
        '**?acronimo [acronimo]** - *Mostra a definição de qualquer acronimo na base de dados, por ex. !acronimo ANPC*\n';

      msg.channel.send(`***Comandos:***\n${resp}`);
    }
  }

  if (msg.content.startsWith(prefix) && !msg.author.bot) {
    const args = msg.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (command) {
      try {
        command.execute(msg, args);
      } catch (e) {
        //
      }
    }
  }
};

module.exports = message;
