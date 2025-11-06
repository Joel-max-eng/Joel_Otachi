const typingText = document.querySelector(".typing-text");
const text = `WEB DEVELOPMENT

Frontend
~Html
~Css
~Javascript
~Bootstrap

Backend
~PHP
~Mysql
~C
~Java
~Python

APP DEVELOPMENT
~Platforms: Android,IOS
~Languages: Java,Kotlin,swift
~Frameworks: Flutter,React Native
~Tools: Android Studio

GRAPHIC DESIGN
~Adobe Photoshop
~Illustrator
~CorelDraw
~Branding and motion Graphics
~Printing and Merchandise Design
~Social Media Management

NETWORKING
~Protocols: TCP/IP,UDP,HTTP,HTTPS
~Technologies: DNS,DHCP,VPN,VLAN,NAT
~Hardware: Routers,Switches,Firewalls
~Tools: CiscoPacket Tracer,Nmap

CLOUD COMPUTING
~Platforms: AWS, Google Cloud, Microsoft Azure
~Services: EC2, S3, Lambda, Azure Virtual Machines
~Technologies: Docker, Kubernetes
~Tools: AWS Management Console,  Azure Portal

COMPUTER SKILLS
~Ms Office
~Google drive
~Presentation Software
~Hardware skills
~Spreadsheets
~Collaboration and Communication Software
~Social Media
~GIT
~Penetration and Testing
~Networking
~Mobile Computing
~Intelligent Systems
~Computer Architecture
~Structures and Algorithms
~Installing Softwares
~Troubleshooting Computer applications
~Operating Systems(Windows, linux)
`;

let index = 0;

function type() {
    const currentText = text.slice(0, index + 1);
    typingText.textContent = currentText;
    index++;

    // Scroll to the bottom each time a new character is added
    typingText.scrollTop = typingText.scrollHeight;

    if (index >= text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(type, 20);

