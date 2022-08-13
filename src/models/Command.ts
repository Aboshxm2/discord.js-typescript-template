import { Message } from "discord.js";

export interface Command {
    name: string;
    onText(message: Message, args: string[]) : Promise<void>;
}