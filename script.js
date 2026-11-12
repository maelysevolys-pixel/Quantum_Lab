
/* ========================================
   QUANTUM LAB - SCRIPT PRINCIPAL
   ======================================== */


/* 1. OUVRIR UNE EXPERIENCE */

function ouvrirExperience(nom) {

    // Récupérer les éléments HTML nécessaires
    const zone = document.getElementById("zone-experience");
    const contenu = document.getElementById("contenu-experience");
    const accueil = document.getElementById("experiences");

    // Préparer le contenu de l'expérience
    let titre = "";
    let description = "";

    // Choisir l'expérience demandée
   
	if (nom === "fentes") {

		titre = "Les deux fentes";

		description = `
			<p>
				Bienvenue dans l'expérience des deux fentes !
			</p>

			<p>
				Envoyez des particules vers un écran et
				observez comment elles s'accumulent.
			</p>

			<div class="simulation">

				<h3>Laboratoire expérimental</h3>

				<p>Choisissez une configuration :</p>

				<div class="commandes">
					<button onclick="changerModeFentes('simple')">
						Une fente
					</button>

					<button onclick="changerModeFentes('double')">
						Deux fentes
					</button>
				</div>

				<canvas id="ecran-fentes"
					width="700" height="320">
				</canvas>

				<p id="nombre-particules">
					Particules détectées : 0
				</p>

				<div class="commandes">

					<button onclick="lancerParticules(50)">
						Envoyer 50 particules
					</button>

					<button onclick="lancerParticules(200)">
						Envoyer 200 particules
					</button>

					<button onclick="reinitialiserFentes()">
						Réinitialiser
					</button>

				</div>

				<p id="explication-fentes">
					Deux fentes ouvertes : observez la figure
					d'interférences.
				</p>

			</div>
		`;

	}

else if (nom === "qubit") {

    titre = "La superposition quantique";

    description = `
        <p>
            Un qubit peut être dans une superposition
            des états |0⟩ et |1⟩.
        </p>

        <div class="simulation">

            <h3>Laboratoire du qubit</h3>
				<div class="visualisation-qubit">
					<h3>Sphère de Bloch</h3>

					<canvas id="sphere-bloch" width="500" height="360">
					</canvas>

					<p class="legende-bloch">
						|0⟩ : pôle supérieur — |1⟩ : pôle inférieur
					</p>
				</div>

            <p>
                Modifiez la probabilité d'obtenir l'état |1⟩ :
            </p>

            <input
                type="range"
                id="curseur-qubit"
                min="0"
                max="100"
                value="50"
                oninput="actualiserQubit()"
            >

            <p id="valeur-qubit">50 %</p>

            <div class="probabilites">
                <p>Probabilité de mesurer |0⟩ :
                    <strong id="probabilite-zero">50 %</strong>
                </p>

                <p>Probabilité de mesurer |1⟩ :
                    <strong id="probabilite-un">50 %</strong>
                </p>
            </div>

            <div class="commandes">
                <button onclick="mesurerQubit()">
                    Mesurer le qubit
                </button>
            </div>

            <h3>Résultat de la mesure</h3>

            <p id="resultat-qubit">
                Le qubit attend d'être mesuré...
            </p>

            <p id="explication-qubit">
                Modifiez le curseur puis effectuez une mesure.
            </p>

        </div>
    `;
}


else if (nom === "intrication") {

    titre = "L'intrication quantique";

    description = `
        <p>
            Deux qubits intriqués partagent un même état quantique.
            Leurs résultats de mesure peuvent être corrélés.
        </p>

        <div class="simulation">

            <h3>Laboratoire de l'intrication</h3>
			<div class="visualisation-intrication">

				<div class="qubit-visuel" id="visuel-qubit-a">
					<div class="particule"></div>
						<p>QUBIT A</p>
						<strong id="valeur-visuelle-a">?</strong>
					</div>

					<div class="connexion-intrication">
						<span>INTRICATION</span>
					<div class="ligne-quantique"></div>
				</div>

				<div class="qubit-visuel" id="visuel-qubit-b">
					<div class="particule"></div>
						<p>QUBIT B</p>
					<strong id="valeur-visuelle-b">?</strong>
				</div>

			</div>

            <p>
                Voici une paire de qubits intriqués.
                Effectuez une mesure pour découvrir leurs résultats !
            </p>

            <div class="probabilites">

                <div>
                    <h3>Qubit A</h3>
                    <p id="resultat-qubit-a">En attente...</p>
                </div>

                <div>
                    <h3>Qubit B</h3>
                    <p id="resultat-qubit-b">En attente...</p>
                </div>

            </div>

            <div class="commandes">

                <button onclick="mesurerIntrication()">
                    Mesurer les deux qubits
                </button>

                <button onclick="reinitialiserIntrication()">
                    Nouvelle paire
                </button>

            </div>

            <p id="explication-intrication">
                Les deux qubits attendent leur mesure.
            </p>

        </div>
    `;
}


    // Afficher le contenu de l'expérience
contenu.innerHTML = `
    <div class="contenu-ouvert">
        <p class="sous-titre">QUANTUM EXPERIMENT</p>

        <h2>${titre}</h2>

        <div class="description-experience">
            ${description}
        </div>
    </div>
`;

// Afficher la zone de l'expérience
accueil.hidden = true;
zone.hidden = false;


// Initialiser la simulation correspondante
if (nom === "fentes") {
    initialiserFentes();
}

else if (nom === "qubit") {
    actualiserQubit();
}
// Remonter au début de l'expérience
zone.scrollIntoView({ behavior: "smooth" });

} // FIN DE LA FONCTION ouvrirExperience()


/* 2. FERMER UNE EXPERIENCE */

function fermerExperience() {

    const zone = document.getElementById("zone-experience");
    const accueil = document.getElementById("experiences");

    // Cacher l'expérience
    zone.hidden = true;

    // Réafficher les cartes
    accueil.hidden = false;

    accueil.scrollIntoView({ behavior: "smooth" });
}


/* 3. MESSAGE SURPRISE */

function afficherMessage() {

    const message = document.getElementById("message-final");

    // Vérifier si le message est déjà affiché
    if (message.textContent !== "") {
        return;
    }

    message.textContent =
        "Bonjour ou Bonsoir Madame !\n "+
        "A travers ce petit site web, "+
		"je tenais à vous remercier du \n"+
		"fond du coeur de m'avoir redonner "+
		"goût à la vie.\n "+
		"Merci de m'avoir appris à "+
		"prendre du recule. \n" +
        "Merci pour cette année! \n"+
		"Overall, thank you for everything! \n"+
		"Une hacker... (just kidding ☺)";

}

// ========================================
// EXPERIENCE 01 - LES DEUX FENTES
// VERSION CORRIGEE
// ========================================
// ========================================
// VARIABLES DE L'EXPERIENCE 01
// ========================================

let modeFentes = "double";

let impactsFentes = [];

let contexteFentes = null;

let particulesEnCours = [];

let animationFentes = null;

// 1. INITIALISER LA SIMULATION

function initialiserFentes() {

    const canvas = document.getElementById("ecran-fentes");

    if (!canvas) return;

    // Arrêter une éventuelle ancienne animation
    if (animationFentes !== null) {
        cancelAnimationFrame(animationFentes);
        animationFentes = null;
    }

    contexteFentes = canvas.getContext("2d");

    impactsFentes = [];
    particulesEnCours = [];

    dessinerExperience();
    actualiserCompteur();

}


// 2. CHANGER LE MODE EXPERIMENTAL

function changerModeFentes(mode) {

    modeFentes = mode;

    // Arrêter les particules en déplacement
    if (animationFentes !== null) {
        cancelAnimationFrame(animationFentes);
        animationFentes = null;
    }

    impactsFentes = [];
    particulesEnCours = [];

    dessinerExperience();
    actualiserCompteur();

    const explication = document.getElementById(
        "explication-fentes"
    );

    if (mode === "simple") {

        explication.textContent =
            "Une fente ouverte : observez une figure de diffraction.";

    } else {

        explication.textContent =
            "Deux fentes ouvertes : observez une figure d'interférences.";

    }

}


// 3. CALCULER UNE POSITION FINALE

function calculerPosition() {

    let positions = [];
    let total = 0;

    for (let i = 0; i <= 800; i++) {

        let y = -1 + (i / 400);

        let sinc;

        if (Math.abs(y) < 0.0001) {
            sinc = 1;
        } else {
            sinc = Math.sin(Math.PI * 1.5 * y) /
                   (Math.PI * 1.5 * y);
        }

        let probabilite = sinc * sinc;

        if (modeFentes === "double") {

            let interference = Math.cos(
                Math.PI * 7 * y
            );

            probabilite *= interference * interference;

        }

        positions.push({
            y: y,
            poids: probabilite
        });

        total += probabilite;

    }

    let hasard = Math.random() * total;
    let somme = 0;

    for (let position of positions) {

        somme += position.poids;

        if (somme >= hasard) {

            return 160 + position.y * 135;

        }

    }

    return 160;

}


// 4. ENVOYER DES PARTICULES

function lancerParticules(nombre) {

    // Vérifier que le canvas existe
    const canvas = document.getElementById("ecran-fentes");

    if (!canvas) {
        console.error("Canvas introuvable !");
        return;
    }

    // Vérifier que le contexte est initialisé
    if (!contexteFentes) {
        initialiserFentes();
    }

    // Créer les particules
    for (let i = 0; i < nombre; i++) {

        let positionFente = 160;

        if (modeFentes === "double") {

            positionFente = Math.random() < 0.5 ? 130 : 190;

        }

        particulesEnCours.push({

            x: 55,
            y: 160,

            ancienneX: 55,
            ancienneY: 160,

            cibleY: calculerPosition(),
            fenteY: positionFente

        });

    }

    // Lancer l'animation si elle est arrêtée
    if (animationFentes === null) {

        animationFentes = requestAnimationFrame(
            animerParticules
        );

    }

}


// 5. ANIMER LES PARTICULES

function animerParticules() {

    for (let particule of particulesEnCours) {

        // Sauvegarder l'ancienne position
        particule.ancienneX = particule.x;
        particule.ancienneY = particule.y;

        // Faire avancer la particule
        particule.x += 3;

        // Trajet entre la source et les fentes
        if (particule.x <= 300) {

            let progression = (particule.x - 55) / 245;

            particule.y =
                160 + (particule.fenteY - 160) * progression;

        }

        // Trajet entre les fentes et l'écran
        else {

            let progression = (particule.x - 300) / 320;

            particule.y =
                particule.fenteY +
                (particule.cibleY - particule.fenteY) * progression;

        }

    }


    // Enregistrer les impacts sur l'écran
    for (let i = particulesEnCours.length - 1; i >= 0; i--) {

        if (particulesEnCours[i].x >= 620) {

            impactsFentes.push({

                x: 620 + Math.random() * 8,
                y: particulesEnCours[i].cibleY

            });

            particulesEnCours.splice(i, 1);

        }

    }


    // Actualiser l'affichage
    dessinerExperience();
    actualiserCompteur();


    // Continuer ou arrêter l'animation
    if (particulesEnCours.length > 0) {

        animationFentes = requestAnimationFrame(
            animerParticules
        );

    } else {

        animationFentes = null;

    }

}


// 6. DESSINER LA SIMULATION

function dessinerExperience() {

    const canvas = document.getElementById("ecran-fentes");

    if (!canvas || !contexteFentes) return;

    const ctx = contexteFentes;

    // Fond
    ctx.fillStyle = "#101a2c";
    ctx.fillRect(0, 0, 700, 320);


    // Source lumineuse
    ctx.fillStyle = "#55dff0";

    ctx.beginPath();
    ctx.arc(55, 160, 9, 0, Math.PI * 2);
    ctx.fill();


    // Mur
    ctx.fillStyle = "#718096";
    ctx.fillRect(295, 0, 10, 320);


    // Ouvertures
    if (modeFentes === "simple") {

        ctx.clearRect(295, 147, 10, 26);

    } else {

        ctx.clearRect(295, 120, 10, 20);
        ctx.clearRect(295, 180, 10, 20);

    }


    // Écran de détection
    ctx.fillStyle = "#55dff0";
    ctx.fillRect(620, 0, 3, 320);


    // Impacts déjà enregistrés
    for (let impact of impactsFentes) {

        ctx.fillStyle = "#55dff0";

        ctx.beginPath();
        ctx.arc(impact.x, impact.y, 2, 0, Math.PI * 2);
        ctx.fill();

    }


    // Particules en déplacement
    for (let particule of particulesEnCours) {

        // Traînée lumineuse
        ctx.beginPath();

        ctx.moveTo(
            particule.ancienneX,
            particule.ancienneY
        );

        ctx.lineTo(
            particule.x,
            particule.y
        );

        ctx.strokeStyle = "#55dff0";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;

        ctx.stroke();

        ctx.globalAlpha = 1;


        // Particule
        ctx.beginPath();

        ctx.arc(
            particule.x,
            particule.y,
            4,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#55dff0";
        ctx.shadowBlur = 12;

        ctx.fill();

        ctx.shadowBlur = 0;

    }


    // Légendes
    ctx.fillStyle = "#ffffff";
    ctx.font = "12px Arial";

    ctx.fillText("SOURCE", 25, 190);
    ctx.fillText("FENTES", 275, 225);
    ctx.fillText("ECRAN", 590, 305);

}


// 7. ACTUALISER LE COMPTEUR

function actualiserCompteur() {

    const compteur = document.getElementById(
        "nombre-particules"
    );

    if (compteur) {

        compteur.textContent =
            "Particules détectées : " + impactsFentes.length;

    }

}


// 8. REINITIALISER

function reinitialiserFentes() {

    if (animationFentes !== null) {

        cancelAnimationFrame(animationFentes);

        animationFentes = null;

    }

    particulesEnCours = [];
    impactsFentes = [];

    dessinerExperience();
    actualiserCompteur();

}

/* =================================
   EXPERIENCE 2 : LE QUBIT
================================= */

// Actualiser les probabilités
function actualiserQubit() {

    const curseur = document.getElementById("curseur-qubit");

    const probabiliteUn = Number(curseur.value);
    const probabiliteZero = 100 - probabiliteUn;

    document.getElementById("valeur-qubit").textContent =
        probabiliteUn + " %";

    document.getElementById("probabilite-zero").textContent =
        probabiliteZero + " %";

    document.getElementById("probabilite-un").textContent =
        probabiliteUn + " %";
	dessinerSphereBloch(probabiliteUn);
}


// Effectuer une mesure aléatoire
function mesurerQubit() {

    const curseur = document.getElementById("curseur-qubit");

    const probabiliteUn = Number(curseur.value);

    // Tirage d'un nombre aléatoire entre 0 et 100
    const tirage = Math.random() * 100;

    const resultat = tirage < probabiliteUn ? 1 : 0;

    const zoneResultat = document.getElementById("resultat-qubit");
    const explication = document.getElementById("explication-qubit");

    zoneResultat.textContent =
        "Résultat obtenu : |" + resultat + "⟩";

    if (resultat === 1) {

        explication.textContent =
            "Le résultat |1⟩ a été obtenu. " +
            "Il avait " + probabiliteUn +
            " % de chances d'apparaître.";

    } else {

        explication.textContent =
            "Le résultat |0⟩ a été obtenu. " +
            "Il avait " + (100 - probabiliteUn) +
            " % de chances d'apparaître.";

    }
}

/* =================================
   EXPERIENCE 3 : L'INTRICATION
================================= */

function mesurerIntrication() {

    // Choisir aléatoirement le résultat du premier qubit
    const resultatA = Math.random() < 0.5 ? 0 : 1;

    // Le deuxième qubit obtient le même résultat
    const resultatB = resultatA;

    // Afficher les résultats textuels
    document.getElementById("resultat-qubit-a").textContent =
        "Résultat : |" + resultatA + "⟩";

    document.getElementById("resultat-qubit-b").textContent =
        "Résultat : |" + resultatB + "⟩";

    // Afficher les résultats dans les blocs visuels
    document.getElementById("valeur-visuelle-a").textContent =
        "|" + resultatA + "⟩";

    document.getElementById("valeur-visuelle-b").textContent =
        "|" + resultatB + "⟩";

    // Activer les effets lumineux
    const qubitA = document.getElementById("visuel-qubit-a");
    const qubitB = document.getElementById("visuel-qubit-b");

    qubitA.classList.add("qubit-mesure");
    qubitB.classList.add("qubit-mesure");

    // Afficher l'explication
    document.getElementById("explication-intrication").textContent =
        "Les deux qubits ont obtenu le résultat " + resultatA +
        ". Dans cet état intriqué, leurs résultats sont parfaitement corrélés.";

}
//à modifier if needed
function reinitialiserIntrication() {

    document.getElementById("resultat-qubit-a").textContent =
        "En attente...";

    document.getElementById("resultat-qubit-b").textContent =
        "En attente...";

    document.getElementById("valeur-visuelle-a").textContent = "?";
    document.getElementById("valeur-visuelle-b").textContent = "?";

    document.getElementById("visuel-qubit-a").classList.remove("qubit-mesure");
    document.getElementById("visuel-qubit-b").classList.remove("qubit-mesure");

    document.getElementById("explication-intrication").textContent =
        "Les deux qubits attendent leur mesure.";

}

/* =================================
   SPHERE DE BLOCH
================================= */


function dessinerSphereBloch(probabiliteUn) {

    const canvas = document.getElementById("sphere-bloch");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const centreX = canvas.width / 2;
    const centreY = canvas.height / 2;
    const rayon = 125;

    const p = probabiliteUn / 100;

    // Position du qubit
    const x = 2 * Math.sqrt(p * (1 - p));
    const z = 1 - 2 * p;

    const pointX = centreX + x * rayon;
    const pointY = centreY - z * rayon;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Effet lumineux autour de la sphère
    ctx.save();
    ctx.shadowColor = "#16c7c1";
    ctx.shadowBlur = 22;

    // Fond légèrement transparent de la sphère
    const degrade = ctx.createRadialGradient(
        centreX - 40, centreY - 50, 10,
        centreX, centreY, rayon
    );

    degrade.addColorStop(0, "rgba(22, 199, 193, 0.13)");
    degrade.addColorStop(1, "rgba(22, 199, 193, 0.01)");

    ctx.beginPath();
    ctx.arc(centreX, centreY, rayon, 0, Math.PI * 2);
    ctx.fillStyle = degrade;
    ctx.fill();

    // Contour de la sphère
    ctx.strokeStyle = "#16c7c1";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();

    // Grille horizontale : équateur
    ctx.beginPath();
    ctx.ellipse(
        centreX, centreY,
        rayon, rayon * 0.32,
        0, 0, Math.PI * 2
    );

    ctx.strokeStyle = "rgba(118, 86, 214, 0.8)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Méridien vertical
    ctx.beginPath();
    ctx.ellipse(
        centreX, centreY,
        rayon * 0.32, rayon,
        0, 0, Math.PI * 2
    );

    ctx.strokeStyle = "rgba(22, 199, 193, 0.55)";
    ctx.stroke();

    // Axe vertical
    ctx.beginPath();
    ctx.moveTo(centreX, centreY - rayon - 8);
    ctx.lineTo(centreX, centreY + rayon + 8);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.setLineDash([3, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Vecteur représentant l'état du qubit
    ctx.beginPath();
    ctx.moveTo(centreX, centreY);
    ctx.lineTo(pointX, pointY);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Point lumineux
    ctx.beginPath();
    ctx.arc(pointX, pointY, 8, 0, Math.PI * 2);

    ctx.fillStyle = "#16c7c1";
    ctx.shadowColor = "#16c7c1";
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Petit reflet au centre du point
    ctx.beginPath();
    ctx.arc(pointX - 2, pointY - 2, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Légendes
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";

    ctx.fillText("|0⟩", centreX, centreY - rayon - 12);
    ctx.fillText("|1⟩", centreX, centreY + rayon + 25);

    ctx.font = "12px Arial";
    ctx.fillStyle = "#a9b8ce";
    ctx.fillText("Équateur", centreX + rayon + 35, centreY + 4);
}
