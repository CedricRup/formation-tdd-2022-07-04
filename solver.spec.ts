import { CouleurPion, EtatCase, Grille } from "./grille";

enum ResultatPartie {
  GagnantRouge = "GagnantRouge",
  GagnantJaune = "GagnantJaune",
  MatchNul = "MatchNul",
  Continue = "Continue"
}

function solver(grille : Grille){
  let etatInitial = grille.getEtatCase(0,0)

  for (let i = 1; i < 4; i++) {
    const etatCase = grille.getEtatCase(0, i)

    if (etatInitial !== etatCase) {
      return ResultatPartie.Continue
    }
  }

  return grille.getEtatCase(0,0) === EtatCase.Rouge ? ResultatPartie.GagnantRouge : ResultatPartie.GagnantJaune;

}

describe("solver", () => {
  it("Quand il y a 4 pions rouges consécutifs en vertical Rouge gagne ", () => {
    const grille = new Grille()
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Rouge)
    const gagnant = solver(grille)
    expect(gagnant).toBe(ResultatPartie.GagnantRouge)
  })

  it("Quand il y a 4 pions jaunes consécutifs en vertical Jaune gagne ", () => {
    const grille = new Grille()
    grille.ajouterPion(0,CouleurPion.Jaune)
    grille.ajouterPion(0,CouleurPion.Jaune)
    grille.ajouterPion(0,CouleurPion.Jaune)
    grille.ajouterPion(0,CouleurPion.Jaune)
    const gagnant = solver(grille)
    expect(gagnant).toBe(ResultatPartie.GagnantJaune)
  })

  it("Quand il y a ", () => {
    const grille = new Grille()
    grille.ajouterPion(0,CouleurPion.Jaune)
    grille.ajouterPion(0,CouleurPion.Rouge)
    grille.ajouterPion(0,CouleurPion.Jaune)
    grille.ajouterPion(0,CouleurPion.Jaune)
    const gagnant = solver(grille)
    expect(gagnant).toBe(ResultatPartie.Continue)
  })
})