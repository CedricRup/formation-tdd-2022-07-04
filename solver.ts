import { CouleurPion, EtatCase, Grille } from "./grille";

export enum ResultatPartie {
    GagnantRouge = "GagnantRouge",
    GagnantJaune = "GagnantJaune",
    MatchNul = "MatchNul",
    Continue = "Continue",
}

export function solver(grille: Grille) {
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
    if (etatInitial === EtatCase.Vide) {
        return ResultatPartie.Continue
    }
    for (let i = 1; i < 4; i++) {
        const etatCase = grille.getEtatCase(0, i + j);

        if (etatInitial !== etatCase) {
            return ResultatPartie.Continue;
        }
    }
    return versResultatPartie(etatInitial);
}