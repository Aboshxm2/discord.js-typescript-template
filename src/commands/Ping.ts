import { Message } from "discord.js";
import { Command } from "../models/Command";

module.exports = new class extends Command {
    name: string = "ping";
    async onText(message: Message, args: string[]): Promise<void> {
        await message.reply("pong");
    }   
}