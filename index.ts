import { Jeu, VraieConsole,VraiPrompt } from "./jeu";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const console = new VraieConsole()
const prompt = new VraiPrompt(readline)
const jeu = new Jeu(console,prompt)

jeu.demarrerPartie().then(()=>{
    readline.close()
    process.stdin.destroy();
    
})
