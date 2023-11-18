 const textToType = "YOUR HEALTH,\nOUR OPTIMUM PRIORITY.";
 const typingSpeed = 50; // Adjust typing speed (milliseconds per character)
 const typingTextElement = document.getElementById("typing-text");
            
     function typeText() {
     let currentIndex = 0;
     const textLength = textToType.length;
            
     function typeNextCharacter() {
     if (currentIndex < textLength) {
     typingTextElement.textContent += textToType[currentIndex];
     currentIndex++;
     setTimeout(typeNextCharacter, typingSpeed);
      }
     }
            
       typeNextCharacter();
      }
            
      // Start typing when the page loads
     window.onload = typeText;
     