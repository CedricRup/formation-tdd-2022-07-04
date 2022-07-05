import { Jeu, VraieConsole,VraiPrompt } from "./jeu";
(async ()=>{
    const console = new VraieConsole()
    const prompt = new VraiPrompt
    const jeu = new Jeu(console,prompt)
    await jeu.demarrerPartie()
}
)
()