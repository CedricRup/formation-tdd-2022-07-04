enum EtatCase {
  Rouge
}

class Grille {

  getEtatCase(number: number, number2: number) {
    return undefined;
  }

  ajouterPion(number: number, Rouge: EtatCase) {
    
  }
}

describe("grille", () => {
  it("un pion dans la premiere collone", () => {
    const grille = new Grille()
    grille.ajouterPion(0, EtatCase.Rouge)
    const etatCase = grille.getEtatCase(0,0)
    expect(etatCase).toBe(EtatCase.Rouge)
  })
})