// JavaScript for Dropdown Menus and Animations

// Toggle dropdown visibility
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownContent = button.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Add initial animation classes to cards
document.querySelectorAll('.card').forEach(card => {
    card.classList.add('animate__animated', 'animate__fadeInUp');
});

// ScrollReveal animations
ScrollReveal().reveal('.dropbtn', {
    delay: 280,
    distance: '40px',
    origin: 'left',
});

ScrollReveal().reveal('.dropdown-content .card', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.getElementById("checkbox").addEventListener("change", function() {
    var audio = document.getElementById("music");
    if (this.checked) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Opcional: Reinicia la música desde el principio al pausar
    }
  });


document.getElementById("checkbox").addEventListener("change", function() {
    var audio = document.getElementById("music");
    if (this.checked) {
        audio.play().catch(function(error) {
            console.log("No se pudo reproducir el audio: ", error);
        });
    } else {
        audio.pause();
        audio.currentTime = 0; // Reinicia la música desde el principio al pausar
    }
});
