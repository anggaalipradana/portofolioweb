// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1000,
    once: true
  });

  // Navbar Toggle
  const toggleMenu = document.querySelector('.toggle-menu');
  const navLinks = document.querySelector('.nav-links');

  toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    });
  });

  // Update Tentang Website
  function updateAboutSection(team1, team2) {
    const aboutSection = document.querySelector('#about p');
    aboutSection.textContent = `
      ini adalah website kolaborasi portofolio dari kelompok lima yang terdiri dari ${
        team1.length
      } anggota yang bertugas membuat website, sedangkan kelompok enam terdiri dari ${
      team2.length
    } anggota untuk mereview hasilnya dan memastikan kualitasnya.
    `;
  }

  // Render Team Members
  function renderTeamMembers(teamData, containerId) {
    const container = document.querySelector(`#${containerId} .members`);
    container.innerHTML = ''; // Bersihkan kontainer sebelum mengisi
    teamData.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');
      memberDiv.dataset.aos = 'zoom-in';
      memberDiv.innerHTML = `
        <img src="${member.image || 'https://via.placeholder.com/150'}" alt="${member.name}">
        <h4>${member.name}</h4>
        <p>${member.role}</p>
        <div class="info">
          <p>${member.description.slice(0, 100)}...</p>
        </div>
      `;
      memberDiv.addEventListener('click', () => showMemberDetails(member));
      container.appendChild(memberDiv);
    });
  }

  // Show Member Details Modal
  function showMemberDetails(member) {
    const modal = document.getElementById('member-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
      <h2>${member.name}</h2>
      <p><strong>Role:</strong> ${member.role}</p>
      <p><strong>Description:</strong> ${member.description}</p>
      <div>
        <h3>Skills</h3>
        <ul>
          ${member.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h3>Notable Projects</h3>
        <ul>
          ${member.projects.map(project => `<li>${project}</li>`).join('')}
        </ul>
      </div>
    `;
    
    modal.style.display = 'block';
    modal.querySelector('.modal-content').scrollTop = 0; // Set scroll position to top
  }

  // Close Modal
  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', () => {
    document.getElementById('member-modal').style.display = 'none';
  });

  // Update "Tentang" and Render Teams
  updateAboutSection(teamPembuatWeb, teamReviewerWeb);
  renderTeamMembers(teamPembuatWeb, 'team-pembuat-web');
  renderTeamMembers(teamReviewerWeb, 'team-reviewer-web');
});
