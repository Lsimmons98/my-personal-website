
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
  
  
  function greetUser(name) {
    console.log("Hello, " + name + "! Welcome to my website.");
  }
  
  
  window.onload = function() {
    displayWelcomeMessage();
    displayDateTime();
    greetUser("Liam");
  };