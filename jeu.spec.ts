
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

    it("Au début de la partie la console indique que Jaune commence", async () => {
        // const fausseConsole = new FausseConsole()
        const fausseConsole = {ecrire : jest.fn()}
        const fauxPrompt = {demanderColonne : jest.fn()}
        fauxPrompt.demanderColonne.mockResolvedValue(0)
        const jeu = new Jeu(fausseConsole,fauxPrompt)
        await jeu.demarrerPartie()
        expect(fausseConsole.ecrire).toHaveBeenCalledWith("C'est à jaune de jouer")
    })

    it("Quand un joueur joue un coup valide, la console envoie un message de validation", async () => {
        const fausseConsole = {ecrire : jest.fn()}
        const fauxPrompt = {demanderColonne : jest.fn()}
        fauxPrompt.demanderColonne.mockResolvedValue(0)
        const jeu = new Jeu(fausseConsole,fauxPrompt)
        await jeu.demarrerPartie()
        expect(fausseConsole.ecrire).toHaveBeenCalledWith("Coup valide")
    })
})
