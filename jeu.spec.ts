
import { IConsole, Jeu } from "./jeu"


class FausseConsole implements IConsole {
    messages : string[] = []

    aEteAppeleeAvec(message : string) {
        return this.messages.includes(message)
    }
    
    ecrire(message : string){
        this.messages.push(message)        
    }
}

describe("jeu", () =>{

    it("Au début de la partie la console indique que Jaune commence", () => {
        // const fausseConsole = new FausseConsole()
        const fausseConsole = {ecrire : jest.fn()}
        const jeu = new Jeu(fausseConsole)
        jeu.demarrerPartie()
        // expect(fausseConsole.aEteAppeleeAvec("C'est à jaune de jouer")).toBe(true)
        expect(fausseConsole.ecrire).toHaveBeenCalledWith("C'est à jaune de jouer")
    })

    it("Quand un joueur joue un coup valide, la console envoie un message de validation", () => {
        const fausseConsole = {ecrire : jest.fn()}
        const jeu = new Jeu(fausseConsole)
        jeu.demarrerPartie()
        expect(fausseConsole.ecrire).toHaveBeenCalledWith("Coup valide")
    })
})
