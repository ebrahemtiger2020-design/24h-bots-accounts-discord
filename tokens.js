// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1568152239640412170",
        serverId: "1420071460407611517",
       token: process.env.TOKEN1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
