
function changeLinkColor(event) {
    event.preventDefault();
  
    
    event.target.style.color = "red";
  }
  
  
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", changeLinkColor);
  });
  
  
  function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    console.log("Current date and time:", dateTimeString);
  }
  
  
  window.onload = function() {
    displayWelcomeMessage();
    displayDateTime();
  };

  document.addEventListener('DOMContentLoaded', function() {
    const greetingButton = document.createElement('button');
    greetingButton.textContent = 'Greet Me!';
    document.body.appendChild(greetingButton);
  
    greetingButton.addEventListener('click', function() {
      alert('Hello, friend!');
    });
  });