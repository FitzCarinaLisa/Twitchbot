const tmi = require('tmi.js');
const { password } = require('*******');

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'Twitch_Name',
        password: '******************'
    },
    channels:['Twitch_Name']
}

const client = new tmi.client(options);
client.connect();
client.on('connected', (address, port) => {
    console.log('Verbindung konnte gestartet werden !')
    
}) 

client.on('chat', (channel, user, message, self) => {
    if(message.toUpperCase() == 'HI' || message.toUpperCase() == 'HELLOW' || message.toUpperCase() == 'GUTEN MORGEN' || message.toUpperCase() == 'GUTEN ABEND' || 
       message.toUpperCase() == 'DERE' || message.toUpperCase() == 'HALLO'  || message.toUpperCase() == 'HEY' || message.toUpperCase() == 'HEY HO'  ) {
                client.action('Twitch_Name', `Hillu, @${user.username} ` )
    }
})
