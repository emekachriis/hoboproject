const countingText = document.getElementById("fivehundredM");
const targetNumber= 5293;
const interval = 50;
const increment = Math.ceil(targetNumber / (5000 / interval));

let currentNumber = 0;
const intervalid =  setInterval(() => {
    currentNumber += increment;
    if(currentNumber >= targetNumber){
        clearInterval(intervalid);

        currentNumber= targetNumber;
    }
    countingText.innerText = currentNumber;
}, interval);

const scrollSection =  document.getElementsByClassName("sectionTwo");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionPosition = scrollSection.offsetTop + scrollSection.offsetHeight /2;

    if(scrollPosition > sectionPosition){
        countingText.setAttribute("id", "fivehundredM");
    }
});