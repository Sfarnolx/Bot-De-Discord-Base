module.exports = {
    name: 'ping',
    description: 'Responds with pong!',
    execute(message, args) {
        message.channel.send('pong');
    },
};