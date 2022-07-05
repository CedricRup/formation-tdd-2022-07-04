import { CouleurPion, EtatCase, Grille } from "./grille";

enum ResultatPartie {
  GagnantRouge = "GagnantRouge",
  GagnantJaune = "GagnantJaune",
  MatchNul = "MatchNul",
  Continue = "Continue",
}

function solver(grille: Grille) {
  for (let j = 0; j < 3; j++) {
    const resultat = donneGagnantVertical(grille, j);
    if (resultat !== ResultatPartie.Continue) {
      return resultat;
    }
  }
  return ResultatPartie.Continue;
}

function versResultatPartie(etatInitial: EtatCase) {
  return etatInitial === EtatCase.Rouge
    ? ResultatPartie.GagnantRouge
    : ResultatPartie.GagnantJaune;
}

function donneGagnantVertical(grille: Grille, j: number) {
  let etatInitial = grille.getEtatCase(0, j);
  for (let i = 1; i < 4; i++) {
    const etatCase = grille.getEtatCase(0, i + j);

    if (etatInitial !== etatCase) {
      return ResultatPartie.Continue;
    }
  }
  return versResultatPartie(etatInitial);
}

describe("solver", () => {
  it("Quand il y a 4 pions rouges consécutifs en vertical Rouge gagne ", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Rouge);
    const gagnant = solver(grille);
    expect(gagnant).toBe(ResultatPartie.GagnantRouge);
  });

  it("Quand il y a 4 pions jaunes consécutifs en vertical Jaune gagne ", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    const gagnant = solver(grille);
    expect(gagnant).toBe(ResultatPartie.GagnantJaune);
  });

  it("Quand il n'y a pas 4 pions de même couleurs consécutifs, le jeu continue.", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    const gagnant = solver(grille);
    expect(gagnant).toBe(ResultatPartie.Continue);
  });

  it("Quand il y a 4 pions de même couleurs consécutifs, à partir de la deuxième case", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    const gagnant = solver(grille);
    expect(gagnant).toBe(ResultatPartie.GagnantJaune);
  });

  it("Quand il y a 4 pions de même couleurs consécutifs, à partir de la deuxième case", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Rouge);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    grille.ajouterPion(0, CouleurPion.Jaune);
    const gagnant = solver(grille);
    expect(gagnant).toBe(ResultatPartie.GagnantJaune);
  });
});
