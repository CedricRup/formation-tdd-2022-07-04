enum EtatCase {
  Rouge,
  Jaune,
  Vide
}

enum CouleurPion {
  Rouge,
  Jaune,
}

class Grille {

  colonne1 : EtatCase[] = []
  
  getEtatCase(x: number, y: number) {
    const etatCase = this.colonne1[y]
    if (etatCase != EtatCase.Jaune && etatCase != EtatCase.Rouge)
    {
      return EtatCase.Vide
    }

    return etatCase
  }

  ajouterPion(colonne: number, couleur: CouleurPion) {
    this.colonne1.push(couleur === CouleurPion.Jaune ? EtatCase.Jaune : EtatCase.Rouge)
  }
}

describe("grille", () => {
  it("Quand j'ajoute un pion dans la premiere colonne, il tombe au fond de la colonne", () => {
    const grille = new Grille()
    grille.ajouterPion(0, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(0,0)
    expect(etatCase).toBe(CouleurPion.Rouge)
  })

  it("Si j'ajoute deux pions, ils s'empilent", () => {
    const grille = new Grille()
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Jaune)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(CouleurPion.Jaune)
  })

  it("Si j'ajoute deux pions de même couleur, ils s'empilent", () => {
    const grille = new Grille()
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(CouleurPion.Rouge)
  })  

  it("Quand je demande l'état d'une case vide le resultat est vide", () => {
    const grille = new Grille();
    const etatCase = grille.getEtatCase(0, 0)
    expect(etatCase).toBe(EtatCase.Vide)
  })
})