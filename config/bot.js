const prefix = '!';
const channels = {
  MAIN_CHANNEL_ID: process.env.MAIN_CHANNEL_ID,
  EARTHQUAKES_CHANNEL_ID: process.env.EARTHQUAKES_CHANNEL_ID,
  FIRES_CHANNEL_ID: process.env.FIRES_CHANNEL_ID,
  WARNINGS_CHANNEL_ID: process.env.WARNINGS_CHANNEL_ID,
  TRIGGERS_CHANNEL_ID: process.env.TRIGGERS_CHANNEL_ID,
};

const { COOLDOWN = "" } = process.env;

const cooldown = COOLDOWN.length === 0 ? 10 : COOLDOWN;

module.exports = {
  prefix,
  channels,
  cooldown,
};
