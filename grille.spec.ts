import { CouleurPion, EtatCase, Grille } from "./grille";


describe("grille", () => {
  it("Quand j'ajoute un pion dans la premiere colonne, il tombe au fond de la colonne", () => {
    const grille = new Grille()
    grille.ajouterPion(0, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(0,0)
    expect(etatCase).toBe(EtatCase.Rouge)
  })

  it("Si j'ajoute deux pions, ils s'empilent", () => {
    const grille = new Grille()
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Jaune)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(EtatCase.Jaune)
  })

  it("Si j'ajoute deux pions de même couleur, ils s'empilent", () => {
    const grille = new Grille()
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(0,1)
    expect(etatCase).toBe(EtatCase.Rouge)
  })  

  it("Quand je demande l'état d'une case vide le resultat est vide", () => {
    const grille = new Grille();
    const etatCase = grille.getEtatCase(0, 0)
    expect(etatCase).toBe(EtatCase.Vide)
  })

  it("Je peux rajouter 6 pions dans une même colonne", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(0, 5)
    expect(etatCase).toBe(EtatCase.Rouge)
  })

  it("Je peux rajouter 6 pions dans une même colonne", () => {
    const grille = new Grille();
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    grille.ajouterPion(0, CouleurPion.Rouge)
    expect(()=>grille.ajouterPion(0, CouleurPion.Rouge)).toThrow("Cette colonne est pleine")
  })

  it("Je peux rajouter 1 pion dans la 2e colonne", () => {
    const grille = new Grille();
    grille.ajouterPion(1, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(1, 0)
    expect(etatCase).toBe(EtatCase.Rouge)
  })

  it("Je peux rajouter 1 pion dans la 2e colonne et la premiere reste vide", () => {
    const grille = new Grille();
    grille.ajouterPion(1, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(0, 0)
    expect(etatCase).toBe(EtatCase.Vide)
  })


  it("Je peux rajouter 1 pion dans la 7e colonne", () => {
    const grille = new Grille();
    grille.ajouterPion(6, CouleurPion.Rouge)
    const etatCase = grille.getEtatCase(6, 0)
    expect(etatCase).toBe(EtatCase.Rouge)
  })


  it("Je peux pas rajouter 1 pion dans la 8e colonne", () => {
    const grille = new Grille();
    expect(()=>grille.ajouterPion(7, CouleurPion.Rouge)).toThrow("Cette colonne n'existe pas")
  })


  it("Je peux pas rajouter 1 pion dans une colonne < 0", () => {
    const grille = new Grille();
    expect(()=>grille.ajouterPion(-1, CouleurPion.Rouge)).toThrow("Cette colonne n'existe pas")
  })


})