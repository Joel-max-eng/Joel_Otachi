//articles i've read
const typingText = document.querySelector(".typing-text");
const text = "@Joel_otachi: ~$ Articles I've read\n\n~ PHP & MYSQL for Dummies, 3rd Edition\n\n~ Java Programming(Maseno university).\n\n~ Programing in C (Maseno University).\n\n~ Data Structures and Algorithms (Maseno University)\n\n~ Html 5 Professional notes(GoalKicker.com)\n\n~ Html www.w3schools.com\n\n~ Javascript Notes for professionals(goalkicker.com)\n\n~ CSS3 Notes for Professional(goalkicker.com)\n\n~ SQL Notes for professionals(goalkicker.com)\n\n~ Computer Packages(Disticntion)Citizen College\n\n~ Lets make it happen in the world of Technology!!!\n\n";
let index = 0;

function type() {
    const currentText = text.slice(0, index + 1);
    typingText.textContent = currentText;
    index++;

    if (index >= text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(type, 20);
