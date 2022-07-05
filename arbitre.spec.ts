import {CouleurPion, EtatCase, Grille} from "./grille";


enum Joueur {
  Jaune,
  Rouge
}
class Arbitre {
  joueurCourant = Joueur.Jaune
  grille : Grille
  constructor(grille: Grille) {
    this.grille = grille
  }



  getJoueurCourant() {
    return this.joueurCourant;
  }

  jouerPion(colonne: number) {
    this.grille.ajouterPion(colonne,CouleurPion.Jaune)
    if (this.joueurCourant === Joueur.Rouge){
      this.joueurCourant = Joueur.Jaune
    }else{
      this.joueurCourant = Joueur.Rouge
    }
  }
}

describe("arbitre", () => {
  let arbitre : Arbitre
  let grille : Grille
  beforeEach(()=>{
    grille = new Grille()
    arbitre = new Arbitre(grille)
  })

  it("Au début de la partie, Jaune commence", () => {
    expect(arbitre.getJoueurCourant()).toBe(Joueur.Jaune)
  })

  it("Quand Jaune a joué, c'est au tour de Rouge", () => {
    arbitre.jouerPion(0)
    expect(arbitre.getJoueurCourant()).toBe(Joueur.Rouge)
  })

  it("Quand Jaune a joué, puis Rouge, c'est au tour de Jaune", () => {
    arbitre.jouerPion(0)
    arbitre.jouerPion(0)
    expect(arbitre.getJoueurCourant()).toBe(Joueur.Jaune)
  })

  it("Quand on joue, on met un pion dans la grille", () => {
    arbitre.jouerPion(0)
    const etatCase = grille.getEtatCase(0,0)
    expect(etatCase).toBe(EtatCase.Jaune)
  })




})