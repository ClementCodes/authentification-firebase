/** @format */

const btnInscription = document.querySelector(".btn-inscription");
const btnConnection = document.querySelector(".btn-connection");
const deco = document.querySelector(".btn-deco");

const formInscription = document.querySelector(".form-inscription");
const emailInscription = document.querySelector(".email-inscription");

const formConnection = document.querySelector(".form-connection");
const mdpInscription = document.querySelector(".mdp-inscription");

btnInscription.addEventListener("click", () => {
  if (formConnection.classList.contains("apparition")) {
    formConnection.classList.remove("apparition");
  }
  formInscription.classList.toggle("apparition");
});
console.log(btnInscription);
btnConnection.addEventListener("click", () => {
  if (formInscription.classList.contains("apparition")) {
    formInscription.classList.remove("apparition");
  }
  formConnection.classList.toggle("apparition");
});

//inscrption firebase

formInscription.addEventListener("submit", (e) => {
  e.preventDefault();

  const mailValeur = emailInscription.value;
  const mdpInscriptionValeur = mdpInscription.value;

  auth
    .createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
    .then((cred) => {
      console.log(cred);
      formInscription.requestFullscreen();
      formInscription.classList.toggle("apparition");
    });
});

//Deconnection

deco.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("deconnecté");
  });
});

//Connexion

formConnection.addEventListener("submit", (e) => {
  e.preventDefault();

  const mailValeur = emailConnection.value;
  const mdpConnectionValeur = mdpConnection.value;

  auth
    .signInWithEmailAndPassword(mailValeur, mdpConnectionValeur)
    .then((cred) => {
      console.log("Connexion", cred.user);
      formConnection.reset();
      formConnection.classList.toggle("apparition");
    });
});

// Gérer le contenu
const h1 = document.querySelector("h1");
const info = document.querySelector(".info");
auth.onAuthStateChanged((utilisateur) => {
  if (utilisateur) {
    info.innerText = "Voici le contenu privé";
    h1.innerText = "Vous voila de retour  (:!:)";
  } else {
    console.log("utilisateur s'est déconnécté");
    info.innerText = "Contenu public";
    h1.innerText = "Bienvenue , inscrivez-vous ou conectez vous !!!";
  }
});
