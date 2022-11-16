import { REST } from '@discordjs/rest';
import { RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord-api-types/v10';
import Discord from 'discord.js';
import { Command } from './models/Command';

export class Client extends Discord.Client {
    public commands: Map<string, Command> = new Map();

    public async deployCommands() {
        const rest = new REST({ version: '9' }).setToken(this.token as string);
        try {
            console.log('Started refreshing application (/) commands.');
    
            const newCommands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
            this.commands.forEach((command: Command) => {
                newCommands.push(command.data.toJSON());
            })

            await rest.put(
                Routes.applicationCommands(this.user?.id as string),
                { body: newCommands },
            );
    
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    }
}