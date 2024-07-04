function changerCouleur() {
    const paragraphe = document.getElementById('paragraphe');
    paragraphe.style.color = getCouleurAleatoire();
}

function getCouleurAleatoire() {
    const lettres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
}
