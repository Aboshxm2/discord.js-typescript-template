import { Message } from "discord.js";
import { Event } from "../models/Event";
import { prefix } from "../../config.json";
import { Client } from "../Client";

module.exports = new class extends Event {
    name: string = "messageCreate";
    async execute(message: Message): Promise<void> {
        if (!message.content.startsWith(prefix) || message.author.bot)
            return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift()?.toLowerCase() as string;

        if (!(message.client as Client).commands.has(commandName))
            return;

        try {
            (message.client as Client).commands.get(commandName)?.onText(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}