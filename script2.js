//articles i've read
const typingText = document.querySelector(".typing-text");
const text = "WEB DEVELOPMENT\n\nFront-End\n~Html\n~Css\n~Javascript\n~Bootstrap\n\nBack-End\n~PHP\n~Mysql\n~C\n~Java\n~Python\n\nAPP DEVELOPMENT\n\n~Platforms-Android,IOS\nLanguages-Java,Kotlin,swift\n~Frameworks-Flutter,React Native\n~Tools-Android Studio\n\nCOMPUTER SKILLS\n~Ms Office\n~Google drive\n~Presentation Software\n~Hardware skills\n~Spreadsheets\n~Collaboration and Communication Software\n~Social Media\n~GIT\n~Penetration and Testing\n~Networking\n~Mobile Computing\n~Intelligent Systems\n~Computer Architecture\n~Structures and Algorithms\n~Installing Softwares\n~Troubleshooting Computer applications\n~Operating Systems(Windows, linux)\n";
let index = 0;

function type() {
    const currentText = text.slice(0, index + 1);
    typingText.textContent = currentText;
    index++;

    if (index >= text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(type, 40);
