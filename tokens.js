// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1541999632316637264",
        serverId: "1480275336460505130",
       token: process.env.MTQ5MzkzMTk2MzI4NTg5NzI0Ng.GRdbq9.5LQa_Zc0-gAXhfl9_Mjb2ZiL5PcAuCA_bqjAu0,
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
