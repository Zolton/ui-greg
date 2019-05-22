// $('.carousel').carousel()

// $('.carousel').carousel({
//     interval: 1000
//   })

const homeLink = document.querySelectorAll(".home-link");
const aboutUs = document.querySelectorAll(".about-us-link");
const loginButton = document.querySelectorAll(".button1");
const languageButton = document.querySelector(".button2")

languageButton.addEventListener("click", activateVoltron)

function activateVoltron () {
homeLink.forEach(change => change.textContent = "家");
homeLink.forEach(change => change.style.fontSize = "2rem");
aboutUs.forEach(change => change.textContent = "私達");
aboutUs.forEach(change => change.style.fontSize = "2rem");
loginButton.forEach(change => change.textContent = "証明の画面");
loginButton.forEach(change => change.style.fontSize = "2rem");
languageButton.style.display = "none";
}



