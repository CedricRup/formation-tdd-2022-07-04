import {Arbitre} from "./arbitre";
import {Grille} from "./grille";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

export interface IConsole {
    ecrire: (message: string) => void
}

interface IPrompt {
    demanderColonne: () => Promise<number>
}

export class VraiPrompt implements IPrompt {
    demanderColonne() {
        return new Promise<number>((resolve, reject) => {
            readline.question("à toi de jouer", (colonne: string) => {

                resolve(parseInt(colonne))
            })
        })
    }
}

export class Jeu {
    console: IConsole
    arbitre: Arbitre
    prompt: IPrompt

    constructor(console: IConsole, prompt: IPrompt) {
        this.console = console
        this.arbitre = new Arbitre(new Grille())
        this.prompt = prompt
    }

    async demarrerPartie() {
        this.console.ecrire("C'est à jaune de jouer")
        const colonne = await this.prompt.demanderColonne()
        console.log("Colonne : ",colonne)
        if (colonne) {
            this.arbitre.jouerPion(colonne)
            this.console.ecrire("Coup valide")
        }
    }
}

export class VraieConsole implements IConsole {
    ecrire(message: string) {
        console.log(message)
    }
}