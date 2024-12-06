// Function to show a specific section
function showSection(sectionId) {
    // Select all sections and hide them
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
