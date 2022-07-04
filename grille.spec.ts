enum EtatCase {
  Rouge,
  Jaune
}

class Grille {

  getEtatCase(x: number, y: number) {
    return EtatCase.Rouge;
  }

  ajouterPion(colonne: number, couleur: EtatCase) {
    
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
})