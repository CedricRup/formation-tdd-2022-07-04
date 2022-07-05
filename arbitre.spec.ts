
enum Joueur {
  Jaune,
  Rouge
}

let joueurCourant = Joueur.Jaune

function getJoueurCourant() {
  return joueurCourant;
}

function jouerPion(number: number) {
  joueurCourant = Joueur.Rouge
}

describe("arbitre", () => {

  it("Au début de la partie, Jaune commence", () => {
    expect(getJoueurCourant()).toBe(Joueur.Jaune)
  })

  it("Quand Jaune a joué, c'est au tour de Rouge", () => {
    jouerPion(0)
    expect(getJoueurCourant()).toBe(Joueur.Rouge)
  })

  it("Quand Jaune a joué, puis Rouge, c'est au tour de Jaune", () => {
    jouerPion(0)
    jouerPion(0)
    expect(getJoueurCourant()).toBe(Joueur.Jaune)
  })


})