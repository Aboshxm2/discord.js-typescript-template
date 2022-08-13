import Discord from 'discord.js';
import { Command } from './models/Command';

export class Client extends Discord.Client {
    public commands: Map<string, Command> = new Map();
}