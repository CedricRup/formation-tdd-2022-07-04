enum EtatCase {
  Rouge,
  Jaune,
  Vide
}

class Grille {

  getEtatCase(x: number, y: number) {
    return this.colonne1[y];
  }

  colonne1 : EtatCase[] = [];

  ajouterPion(colonne: number, couleur: EtatCase) {
    this.colonne1.push(couleur);
  }
}

describe("grille", () => {
  it("Quand j'ajoute un pion dans la premiere colonne, il tombe au fond de la colonne", () => {
    const grille = new Grille()
    grille.ajouterPion(0, EtatCase.Rouge)
    const etatCase = grille.getEtatCase(0,0)
    expect(etatCase).toBe(EtatCase.Rouge)
  })

  it("Si j'ajoute deux pions, ils s'empilent", () => {
    const grille = new Grille()
    grille.ajouterPion(0, EtatCase.Rouge)
    grille.ajouterPion(0, EtatCase.Jaune)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(EtatCase.Jaune)
  })

  it("Si j'ajoute deux pions de même couleur, ils s'empilent", () => {
    const grille = new Grille()
    grille.ajouterPion(0, EtatCase.Rouge)
    grille.ajouterPion(0, EtatCase.Rouge)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(EtatCase.Rouge)
  })  

  it("Quand je veux l'état d'une case sans ajouter de pion -> Etat vide", () => {
    const grille = new Grille();
    const etatCase = grille.getEtatCase(0, 0);
    expect(etatCase).toBe(EtatCase.Vide);
  })
})