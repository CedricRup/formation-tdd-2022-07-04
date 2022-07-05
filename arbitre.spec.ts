import {CouleurPion, EtatCase, Grille} from "./grille";
import { ResultatPartie, solver } from "./solver";


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

  getResultatPartie() {
    return solver(this.grille);
  }

  jouerPion(colonne: number) {
    try {
      if (this.joueurCourant === Joueur.Rouge) {
        this.grille.ajouterPion(colonne, CouleurPion.Rouge)
        this.joueurCourant = Joueur.Jaune
      } else {
        this.grille.ajouterPion(colonne, CouleurPion.Jaune)
        this.joueurCourant = Joueur.Rouge
      }
    }
    catch(erreur : unknown){
      throw erreur
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

  it("Quand Jaune joue, on met un pion jaune dans la grille", () => {
    arbitre.jouerPion(0)
    const etatCase = grille.getEtatCase(0,0)
    expect(etatCase).toBe(EtatCase.Jaune)
  })

  it("Quand Rouge joue on met un pion rouge dans la grille", () => {
    arbitre.jouerPion(0)
    arbitre.jouerPion(0)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(EtatCase.Rouge)
  })

  it("Quand un joueur joue un coup interdit, il rejoue", () => {
    try{
    arbitre.jouerPion(7)
    }
    catch(erreur: unknown) {

    }
    expect(arbitre.getJoueurCourant()).toBe(Joueur.Jaune)
  })

  it("Quand un joueur joue un coup interdit, une erreur est remontée", () => {
    expect(() => arbitre.jouerPion(7)).toThrow("Cette colonne n'existe pas")
  })

  it("Victoire Jaune", () => {
    arbitre.jouerPion(0)
    arbitre.jouerPion(1)
    arbitre.jouerPion(0)
    arbitre.jouerPion(1)
    arbitre.jouerPion(0)
    arbitre.jouerPion(1)
    arbitre.jouerPion(0)

    expect(arbitre.getResultatPartie()).toBe(ResultatPartie.GagnantJaune)
  })

  it("Victoire Rouge", () => {
    arbitre.jouerPion(3)
    arbitre.jouerPion(0)
    arbitre.jouerPion(1)
    arbitre.jouerPion(0)
    arbitre.jouerPion(1)
    arbitre.jouerPion(0)
    arbitre.jouerPion(1)
    arbitre.jouerPion(0)

    expect(arbitre.getResultatPartie()).toBe(ResultatPartie.GagnantRouge)
  })

  it("La partie continue", () => {
    arbitre.jouerPion(0)

    expect(arbitre.getResultatPartie()).toBe(ResultatPartie.Continue)
  })

})