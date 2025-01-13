
  document.querySelectorAll('.komik-item').forEach
    item.addEventListener('click', 
      alert(`You clicked on ${item.querySelector('h3').textContent}`)
      // Redirect to the comic's details page
      // window.location.href = 'comic-details.html';
    )
    function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
    }