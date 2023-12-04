const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dayRaw = urlParams.get("day");
const day = dayRaw === null ? 18 : dayRaw;

const date = day % 10 == 1 ?
		day + "st" : 
		(day % 10 == 2 ?
			day + "nd" :
			(day % 10 == 3 ?
				day + "rd" :
				day + "th"));

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the " + date + "!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
