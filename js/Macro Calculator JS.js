// $('.carousel').carousel()

// $('.carousel').carousel({
//     interval: 1000
//   })

const homeLink = document.querySelectorAll(".home-link");
const aboutUs = document.querySelectorAll(".about-us-link");
const loginButton = document.querySelectorAll(".button1");
const languageButton = document.querySelector(".button2");
const firstRowHeadline = document.querySelector(".firstRow1 h2");
const firstRow2Headline = document.querySelector(".firstRow2 h2");
const firstRow3Headline = document.querySelector(".firstRow3 h2");
const secondRow1Headline = document.querySelector(".secondRow1 h2");
const secondRow2Headline = document.querySelector(".secondRow2 h2");

languageButton.addEventListener("click", activateVoltron);

function activateVoltron() {
  homeLink.forEach(change => (change.textContent = "家"));
  homeLink.forEach(change => (change.style.fontSize = "2rem"));
  aboutUs.forEach(change => (change.textContent = "私達"));
  aboutUs.forEach(change => (change.style.fontSize = "2rem"));
  loginButton.forEach(change => (change.textContent = "証明の画面"));
  loginButton.forEach(change => (change.style.fontSize = "2rem"));
  languageButton.style.display = "none";
}

firstRowHeadline.addEventListener("mouseenter", () => firstRowHeadline.textContent = "命は食べ放題じゃないよ");
firstRowHeadline.addEventListener("mouseleave", () => firstRowHeadline.textContent = "Don't overeat!");

firstRow2Headline.addEventListener("mouseenter", () => firstRow2Headline.textContent = "早く！外へ運動する");
firstRow2Headline.addEventListener("mouseleave", () => firstRow2Headline.textContent = "Get fit!");

firstRow3Headline.addEventListener("mouseenter", () => firstRow3Headline.textContent = "行って ！今日はスタトレ");
firstRow3Headline.addEventListener("mouseleave", () => firstRow3Headline.textContent = "Try it today!");

secondRow1Headline.addEventListener("mouseenter", () => secondRow1Headline.textContent = "新品！携帯電話！タブレット! デスクトップ！");
secondRow1Headline.addEventListener("mouseleave", () => secondRow1Headline.textContent = "Try it today!");

secondRow2Headline.addEventListener("mouseenter", () => secondRow2Headline.textContent = "無給！どこでも、いつでも！");
secondRow2Headline.addEventListener("mouseleave", () => secondRow2Headline.textContent = "Try it today!");
