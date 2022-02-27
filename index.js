const { Client, register } = require('discord-rpc');
const { clientId } = require('./config.json');
register(clientId);
const client = new Client({
    transport: "ipc"
});

client.once('ready', () => {
    console.log("ready");
    client.setActivity({
        details: `popis`,
        state: `popis`,
        // startTimestamp: Date.now(),
        largeImageKey: `large`,
        largeImageText: `cs popis`,
        smallImageKey: `large`,
        smallImageText: `cs popis`,
        instance: false,
        // buttons: [
        //     {
        //         label:`Invite`,
        //         url: `https://invite.nerobot.cz/`
        //     },
        //     {
        //         label: `Website`,
        //         url: `https://nerobot.cz/`
        //     }
        // ]
    })
})

client.login({ clientId });

// const clientId = '947499348298715166';
// const DiscordRPC = require('discord-rpc');
// const RPC = new DiscordRPC.Client({ transport: 'ipc' });
// DiscordRPC.register(clientId);

// async function setActivity() {
//     if (!RPC) return;
//     RPC.setActivity({
//         details: `popis`,
//         state: `popis`,
//         startTimestamp: Date.now(),
//         largeImageKey: `large`,
//         largeImageText: `cs popis`,
//         smallImageKey: `large`,
//         smallImageText: `cs popis`,
//         instance: false,
//         buttons: [
//             {
//                 label:`Invite`,
//                 url: `https://invite.nerobot.cz/`
//             },
//             {
//                 label: `Website`,
//                 url: `https://nerobot.cz/`
//             }
//         ]
//     })
// };

// RPC.on('ready', async () => {
//     setActivity();
// })

// RPC.login({ clientId}).catch(err => console.error(err));