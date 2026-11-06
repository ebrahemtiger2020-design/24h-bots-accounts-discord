// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1210299716936409150",
        serverId: "1011820688228765828",
        token: MTQ5MzkzMTk2MzI4NTg5NzI0Ng.GRdbq9.5LQa_Zc0-gAXhfl9_Mjb2ZiL5PcAuCA_bqjAu0.env.TOKEN1,
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
