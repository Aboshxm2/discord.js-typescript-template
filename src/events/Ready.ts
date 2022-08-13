import { Client } from "../Client";
import { Event } from "../models/Event";

const event: Event = {
    name: "ready",
    once: true,
    async execute(client: Client) {
        console.log(`Ready! Logged in as ${client.user?.tag}`);
    }   
}

module.exports = event;