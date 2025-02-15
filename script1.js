//articles i've read
const typingText = document.querySelector(".typing-text");
const text = "@Joel_otachi: ~$ Articles I've read\n\n~ PHP & MYSQL for Dummies, 3rd Edition.\n\n~ Java Programming, Maseno university.\n\n~ Programing in C, Maseno University.\n\n~ Python Notes for proffessionals.\n\n~ Linux Commands.\n\n~ Data Structures and Algorithms, Maseno University.\n\n~ Html 5 Professional notes, GoalKicker.com.\n\n~ Object oriented programming, Maseno University.\n\n~ Discrete Structures, Maseno University.\n\n~ Electrical Principles, Maseno University.\n\n~ Engineering Mathematics, Maseno University.\n\n~ Computer Architecture, Maseno University.\n\n~ Artificial Intelligence.\n\n~ Automata Theory, Maseno University.\n\n~ Networking , Maseno university(CISCO).\n\n~ Operating Systems, Maseno University.\n\n~ Pattern Recognitions, Maseno University.\n\n~ Advanced Database Systems, Maseno University.\n\n~ Neural networks, Maseno University.\n\n~Data Mining, Maseno University.\n\n~ Intelligent agents, Maseno University.\n\n~ Optical fibres, Maseno University.\n\n~ Simulation and modelling, Maseno University.\n\n~ Computer Design lab, Maseno University.\n\n~ Software Engineering, Maseno University.\n\n~ Computer Systems Engineering, Maseno University.\n\n~ Social and professional issues, Maseno University.\n\n~ Computer-Aided Analysis and Design, Maseno University.\n\n~ Enterprenuership and small Business Management, Maseno University.\n\n~ Html www.w3schools.com.\n\n~ Javascript Notes for professionals, goalkicker.com.\n\n~ CSS3 Notes for Professional, goalkicker.com.\n\n~ SQL Notes for professionals, goalkicker.com.\n\n~ IC3 Course at Citizen College.\n\n~ Lets make it happen in the world of Technology!\n\n";
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
