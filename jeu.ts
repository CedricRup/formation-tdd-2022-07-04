export interface IConsole {
    ecrire : (message : string) => void
}

export class Jeu {
    console : IConsole

    constructor(console : IConsole){
        this.console = console
    }

    demarrerPartie() {
        this.console.ecrire("C'est à jaune de jouer")
    }
}

export class VraieConsole implements IConsole {
    ecrire(message: string) {
        console.log(message)
    }
}