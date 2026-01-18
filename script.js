const textData = [
    {
      text: "I’m a low-resource language NLP researcher currently pursuing
          a Master’s degree in Computer Science at Maseno University, Kenya.
         My research focuses on dataset creation, preprocessing, and synthetic data
         generation for African languages particularly Swahili and Somali, leveraging 
        sources such as Wikipedia, Hugging Face datasets, and parallel corpora.",
      link:''
    },
  {
    text:"My Skills:  ",
    link:'<a href="skills.html">click here!</a>'
  },
  {
    text:"Find Projects have worked on: ",
    link:'<a href="https://github.com/joel-max-eng">Git hub!</a>'
  },
    {
        text:"My Email Address: ",
        link:'<a href="mailto:i.geekytechie@gmail.com">i.geekytechie@gmail.com</a>'
    },
    {
        text:"My Twitter handle is: ",
        link:'<a href="https://twitter.com/@joel_otachi" target="_blank">@joel_otachi</a>'  
    },
    {
      text:"More about me can be found: ",
      link:'<a href="https://www.linkedin.com/in/joel-otachi-79466738a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin!</a>'
    },
     // Add more objects for additional sentences with links
  ];
  
  const typingElement = document.getElementById("typing-effect");
  
  function typeText(sentence, link, index, charIndex) {
    if (charIndex < sentence.length) {
      typingElement.innerHTML += sentence.charAt(charIndex);
      charIndex++;
      setTimeout(() => typeText(sentence, link, index, charIndex), 20); // Typing speed (adjust as needed)
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
      }, 100); // Time before starting the next sentence (adjust as needed)
    }
  }
  
  // Start typing effect with the first sentence
  typeText(textData[0].text, textData[0].link, 0, 0);
  
  


