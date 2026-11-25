
/* =================================
   SOUTENIR DUNKERQUE RP
   SCRIPT PRINCIPAL
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const boutons = document.querySelectorAll(".montants button");
    const champMontant = document.getElementById("montant");
    const boutonDon = document.querySelector(".bouton.don");

    let montantSelectionne = 0;

    // Sélection des montants prédéfinis

    boutons.forEach((bouton) => {

        bouton.addEventListener("click", () => {

            montantSelectionne = Number(
                bouton.textContent.replace("€", "").trim()
            );

            champMontant.value = montantSelectionne;

            boutons.forEach((b) => {
                b.classList.remove("actif");
            });

            bouton.classList.add("actif");

        });

    });


    // Montant personnalisé

    champMontant.addEventListener("input", () => {

        montantSelectionne = Number(champMontant.value);

        boutons.forEach((bouton) => {
            bouton.classList.remove("actif");
        });

    });


    // Vérification du don

    boutonDon.addEventListener("click", () => {

        const montant = Number(champMontant.value);

        if (!Number.isFinite(montant) || montant < 1) {

            alert("Merci de choisir un montant valide d'au moins 1 €.");

            return;

        }

        if (montant > 500) {

            alert("Le montant maximum autorisé est de 500 €.");

            return;

        }

        alert(
            "Merci pour ton soutien à Dunkerque RP ! ❤️\n\n" +
            "Montant choisi : " + montant + " €\n\n" +
            "Le paiement sera bientôt disponible."
        );

    });

});
