document.addEventListener("DOMContentLoaded", function() {
    // Scroll to contact section
    const contactUsButton = document.getElementById('contact-us-button');
    contactUsButton.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Modal functionality
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');

    const serviceDescriptions = {
        "MOT": "Our MOT service ensures your vehicle meets the minimum safety and environmental standards. We provide a thorough inspection and testing of your vehicle to keep it roadworthy.",
        "Exhaust": "Our Exhaust service includes inspection, repair, and replacement of exhaust systems. We ensure your vehicle runs efficiently and reduces harmful emissions.",
        "Suspension": "Our Suspension service covers the inspection and repair of your vehicle's suspension system. We ensure a smooth and stable ride by addressing issues with shocks, struts, and other suspension components.",
        "Battery": "Our Battery service includes testing, charging, and replacement of car batteries. We ensure your vehicle starts reliably and runs smoothly with a fully functional battery.",
        "Brake pads / discs": "Our Brake pads / discs service involves the inspection, repair, and replacement of brake pads and discs. We ensure your vehicle's braking system is safe and effective.",
        "Service": "Our comprehensive Service includes a full vehicle check-up, oil change, filter replacement, and other essential maintenance tasks to keep your vehicle in top condition.",
        "Tyres": "Our Tyres service offers a wide range of new and part-worn tyres. We provide fitting, balancing, and alignment services to ensure your vehicle's tyres are safe and perform optimally.",
        "Tracking": "Our Tracking service ensures your vehicle's wheels are properly aligned. We use advanced equipment to adjust the angles of the wheels to the manufacturer's specifications, improving handling and tyre life.",
        "Wheel balancing": "Our Wheel balancing service corrects the imbalance in your wheels. We use precise equipment to ensure your wheels rotate evenly, reducing vibration and improving tyre wear."
    };

    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            modalTitle.textContent = service;
            modalDescription.textContent = serviceDescriptions[service];
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});