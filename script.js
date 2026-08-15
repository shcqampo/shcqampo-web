// Script básico para interactividad en la página

document.addEventListener('DOMContentLoaded', () => {
    // Alerta interactiva en el botón del banner principal
    const ctaButton = document.getElementById('cta-btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('¡Gracias por tu interés en SHC Qampo! Explora nuestros servicios abajo.');
        });
    }

    // Validación y mensaje al enviar el formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpia los campos del formulario
        });
    }
});