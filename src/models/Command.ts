import { Message } from "discord.js";

export abstract class Command {
    abstract name: string;
    abstract onText(message: Message, args: string[]) : Promise<void>;
}