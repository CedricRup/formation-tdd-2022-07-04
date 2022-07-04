import { CouleurPion, Grille } from "./grille";

enum Gagnant {
  GagnantRouge = "GagnantRouge",
  GagnantJaune = "GagnantJaune",
  MatchNul = "MatchNul"
}

function solver(grille : Grille){

}

describe("solver", () => {
  it("Quand il y  4 pions rouge consécutifs en vertical Rouge gagne ", () => {
    const grille = new Grille()
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Rouge)
    const gagnant = solver(grille)
    expect(gagnant).toBe(Gagnant.GagnantRouge)
  })
})