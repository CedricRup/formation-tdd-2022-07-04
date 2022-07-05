

import {Arbitre} from "./arbitre";
import {Grille} from "./grille";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

export interface IConsole {
    ecrire : (message : string) => void
}

interface IPrompt {
    demanderColonne : ((colonne:number) => void)
}

class VraiPrompt implements IPrompt{
    demanderColonne(){
        readline.question("à toi de jouer", (colonne:string)=> {
            return parseInt(colonne)
        })
    }
}

export class Jeu {
    console : IConsole
    arbitre : Arbitre

    constructor(console : IConsole){
        this.console = console
        this.arbitre = new Arbitre(new Grille())
    }

    demarrerPartie() {
        this.console.ecrire("C'est à jaune de jouer")
        readline.question("à toi de jouer", (colonne:string)=> {
            if (colonne) {
                this.arbitre.jouerPion(parseInt(colonne))
                this.console.ecrire("Coup valide")
            }
        })
    }
}

export class VraieConsole implements IConsole {
    ecrire(message: string) {
        console.log(message)
    }
}