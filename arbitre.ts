import { CouleurPion, Grille } from "./grille";

export enum Joueur {
  Jaune,
  Rouge
}
export class Arbitre {
  joueurCourant = Joueur.Jaune;
  grille: Grille;
  constructor(grille: Grille) {
    this.grille = grille;
  }

  getJoueurCourant() {
    return this.joueurCourant;
  }

  jouerPion(colonne: number) {
    try {
      if (this.joueurCourant === Joueur.Rouge) {
        this.grille.ajouterPion(colonne, CouleurPion.Rouge);
        this.joueurCourant = Joueur.Jaune;
      } else {
        this.grille.ajouterPion(colonne, CouleurPion.Jaune);
        this.joueurCourant = Joueur.Rouge;
      }
    }
    catch (erreur: unknown) {
      throw erreur;
    }
  }
}
