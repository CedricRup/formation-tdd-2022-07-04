import {EtatCase, Grille} from "./grille";
import { Arbitre, Joueur } from "./arbitre";


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



})