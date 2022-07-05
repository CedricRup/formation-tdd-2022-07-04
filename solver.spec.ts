import { CouleurPion, EtatCase, Grille } from "./grille";
import {ResultatPartie, solver} from "./solver";

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
