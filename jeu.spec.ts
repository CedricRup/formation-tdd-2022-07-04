import { Joueur } from "./arbitre"

interface IConsole {
    ecrire : (message : string) => void
}

class FausseConsole implements IConsole {
    messages : string[] = []

    aEteAppeleeAvec(message : string) {
        return this.messages.includes(message)
    }
    
    ecrire(message : string){
        this.messages.push(message)        
    }
}

class Jeu {
    //console : IConsole

    constructor(console : IConsole){

    }

    demarrerPartie() {

    }
}

describe("jeu", () =>{
    it("", () => {
        const fausseConsole = new FausseConsole()
        const jeu = new Jeu(fausseConsole)
        jeu.demarrerPartie()
        expect(fausseConsole.aEteAppeleeAvec("C'est à jaune de jouer")).toBe(true)
    })
})
