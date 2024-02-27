

document.querySelector("body").appendChild(h2);

function displayWelcomeMessage(name) {
    alert("Welcome to " + name + "'s Personal Website!");
  }
  
  // Function to toggle a class on click
  function toggleClass(elementId, className) {
    var element = document.getElementById(elementId);
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  
  // Event listener to trigger the welcome message when the page loads
  window.addEventListener('load', function() {
    var userName = "Liam Simmons"; // Replace with your name
    displayWelcomeMessage(userName);
  });
  
  // Event listener to toggle a class on click
  document.getElementById('toggleButton').addEventListener('click', function() {
    toggleClass('toggleElement', 'active');
  });