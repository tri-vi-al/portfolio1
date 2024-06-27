function resizeIframe() {
    console.log("change")
    var aspectRatio = 16 / 9; // Hier das gewünschte Seitenverhältnis angeben
    var iframe = document.getElementById('myIframe');

    if(iframe.offsetWidth / aspectRatio > window.innerHeight - 120){
        iframe.style.width = (window.innerHeight - 120) * aspectRatio + 'px'
    }
    iframe.style.height = iframe.offsetWidth / aspectRatio + 50 + 'px';
}

window.onload = resizeIframe;
window.onresize = resizeIframe;

document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupButton = document.getElementById('myButton');
    const popup = document.getElementById('emailPopup');
    const closeButton = document.querySelector('.close-button');
    const sendEmailButton = document.getElementById('sendEmailButton');
    const emailInput = document.getElementById('emailInput');
  
    openPopupButton.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    });
  
    sendEmailButton.addEventListener('click', () => {
      const emailAddress = emailInput.value;
  
      if (emailAddress) {
        // Initialize EmailJS
        emailjs.init('yQK0hK5mz_qlUcnnL');
  
        // Send email
        emailjs.send('service_acefm3g', 'template_gb9c6fb', {
          message: emailAddress
        }).then((response) => {
          alert('E-Mail erfolgreich gesendet!');
          popup.style.display = 'none';
          emailInput.value = '';
        }).catch((error) => {
          alert('Fehler beim Senden der E-Mail: ' + error.text);
        });
      } else {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      }
    });
  });
  
  