document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para el botón CTA principal
    const ctaButtonModern = document.getElementById('ctaButtonModern');
    ctaButtonModern.addEventListener('click', function() {
        // Redirige o desplaza suavemente a la sección de planes, por ejemplo
        document.getElementById('planes').scrollIntoView({ behavior: 'smooth' });
    });

    // Puedes añadir más lógica aquí para los botones "Seleccionar Plan" si lo deseas
    const selectPlanButtons = document.querySelectorAll('#planes button');
    selectPlanButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.closest('.bg-white').querySelector('h3').innerText;
            alert(`¡Has seleccionado el plan ${planName}! Nos pondremos en contacto contigo para completar la inscripción.`);
            // Aquí podrías redirigir a un formulario de contacto específico o abrir un modal
        });
    });
});
