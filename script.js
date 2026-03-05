const textData = [

     {
    text:"Hello there! - Read About me",
    link:''
  },
  {
  text: "I am a Computer Technologist with extensive experience in software development, hardware systems, networking, systems integration, and infrastructure maintenance.",
  link: ''
},
{
  text: "My expertise spans end-to-end system implementation, delivering reliable and scalable technology solutions across diverse operational environments.",
  link: ''
},
{
  text: "Alongside my technical practice, I am actively engaged in research at Maseno University, Kenya focusing on Natural Language Processing (NLP) for low-resource languages.",
  link: ''
}, 
{
  text: "My work centers on dataset creation, preprocessing pipelines, and synthetic data generation for African languages, particularly Swahili, Somali and kalenjin.",
  link: ''
},
  {
    text:"My Skills:  ",
    link:'<a href="skills.html">click here!</a>'
  },
  {
    text:"Find Projects have Worked on:  ",
    link:'<a href="projects.html">View !</a>'
  },
  {
    text:"View my Github: ",
    link:'<a href="https://github.com/joel-max-eng">Git hub!</a>'
  },
    {
      text:"Linkedln Profile: ",
      link:'<a href="https://www.linkedin.com/in/joel-otachi-79466738a">View my profile !</a>'
    },
     {
        text:"Contact me: ",
        link:'<a href="mailto:joelotachi@gmail.com.com">Click, Mail me !</a>'
    },
     // Add more objects for additional sentences with links
  ];
  
  const typingElement = document.getElementById("typing-effect");
  
  function typeText(sentence, link, index, charIndex) {
    if (charIndex < sentence.length) {
      typingElement.innerHTML += sentence.charAt(charIndex);
      charIndex++;
      setTimeout(() => typeText(sentence, link, index, charIndex), 15); // Typing speed (adjust as needed)
    } else {
      typingElement.innerHTML += link;
      if (index < textData.length - 1) {
        typingElement.innerHTML += "<br>"; // Add a line break between sentences
      }
      // Create a new div element for the next sentence and its link
      const nextSentenceElement = document.createElement("div");
      typingElement.appendChild(nextSentenceElement);
      setTimeout(() => {
        // Type the next sentence in the new div element
        typeText(textData[index + 1].text, textData[index + 1].link, index + 1, 0);
      }, 80); // Time before starting the next sentence (adjust as needed)
    }
  }
  
  // Start typing effect with the first sentence
  typeText(textData[0].text, textData[0].link, 0, 0);
  
  



















