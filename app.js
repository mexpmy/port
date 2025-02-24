const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // Button click active class
    sectBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior if needed
  
        // Remove active class from all buttons
        sections.forEach(section => section.classList.remove('active'));
        sectBtns.forEach(b => b.classList.remove('active-btn'));
  
        // Add active class to the clicked button
        const targetId = this.dataset.id; // Get the data-id
        const targetSection = document.getElementById(targetId); // Get the section

        // Hide all sections
        sections.forEach(section => section.classList.remove('section-active'));
  
        if (targetSection) { //check if targetSection exists
            targetSection.classList.add('active');
            this.classList.add('active-btn');
          } else {
            console.error("Section not found for id:", targetId);
          }
        });
      });
    
      // Show the first section by default (on page load)
      if (sections.length > 0 && sectBtns.length > 0) { //check if sections and buttons exist
        sections[0].classList.add('active');
        sectBtns[0].classList.add('active-btn');
      } else {
        console.error("No sections or buttons found");
      }
    }



PageTransitions();