const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const messages = [
  "Yes is the other button",
  "Wait, think about it, yes is nicer",
  "I really think yes fits you more",
  "Come on now, Yes",
  "Don't be a party pooper!!",
  "Hmm, you really are persistent, Yes is better",
  "Nee nee, give in",
  "you scared to get beat Naomi!!"
];

function createMessageBox(message) {
  const messageBox = document.createElement('div');
  messageBox.style.border = '2px solid pink';
  messageBox.style.borderRadius = '10px';
  messageBox.style.padding = '10px';
  messageBox.style.position = 'absolute';
  messageBox.style.zIndex = '1000';
  messageBox.style.backgroundColor = 'white';
  messageBox.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  messageBox.innerHTML = message;
  wrapper.appendChild(messageBox);

  // Position the message box above the button
  const noBtnRect = noBtn.getBoundingClientRect();
  messageBox.style.left = noBtnRect.left + 'px';
  messageBox.style.top = (noBtnRect.top - messageBox.offsetHeight) + 'px';

  // Create a tail for the speech bubble
  const tail = document.createElement('div');
  tail.style.width = '0';
  tail.style.height = '0';
  tail.style.borderLeft = '10px solid transparent';
  tail.style.borderRight = '10px solid transparent';
  tail.style.borderBottom = '10px solid pink';
  tail.style.position = 'absolute';
  tail.style.left = '50%';
  tail.style.bottom = '100%';
  tail.style.transform = 'translateX(-50%)';
  messageBox.appendChild(tail);

  // Remove the message box after 0.7 seconds
  setTimeout(() => {
    wrapper.removeChild(messageBox);
  }, 700);
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "!! I knew you'd pick yes🤥, text me yes too XD";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

function moveNoButton() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  createMessageBox(randomMessage);
}

// Mouseover for desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Touch event for mobile devices
noBtn.addEventListener("touchstart", moveNoButton);
