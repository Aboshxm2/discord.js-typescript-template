import { Message } from "discord.js";
import { Command } from "../models/Command";

const command: Command = {
    name: "ping",
    async onText(message: Message, args: string[]) {
        await message.reply("pong");
    }
}

module.exports = command;