export enum EtatCase {
  Rouge = "EtatRouge",
  Jaune = "EtatJaune",
  Vide = "EtatVide"
}

export enum CouleurPion {
  Rouge,
  Jaune,
}

export class Grille {

  colonnes : EtatCase[][] = [[],[],[],[],[],[],[]]

  getEtatCase(x: number, y: number) {
    const etatCase = this.colonnes[x][y]
    if (etatCase != EtatCase.Jaune && etatCase != EtatCase.Rouge)
    {
      return EtatCase.Vide
    }
    return etatCase
  }

  ajouterPion(numeroColonne: number, couleur: CouleurPion) {
    if(numeroColonne > 6 || numeroColonne < 0){
      throw new Error("Cette colonne n'existe pas")
    }
    if(this.colonnes[numeroColonne].length >= 6){
      throw new Error("Cette colonne est pleine")
    }
    this.colonnes[numeroColonne].push(couleur === CouleurPion.Jaune ? EtatCase.Jaune : EtatCase.Rouge)
  }
}