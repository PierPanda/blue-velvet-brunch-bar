
const menuLinks = document.querySelectorAll('.menu-header__list-item a, .menu-footer__list-item a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

var modal = document.getElementById("menuModal");
var carte = document.getElementById("carte");
var closeBtn = document.getElementsByClassName("close")[0];
var pdfImage = document.getElementById("pdfImage");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

var pages = [
  "./assets/carte/Menu-page-1.png",
  "./assets/carte/Menu-page-2.png"
  ];

var currentPage = 0;

closeBtn.onclick = function() {
  modal.classList.add('show');
  modal.style.display = "none";
}

carte.onclick = function() {
  modal.classList.add('show');
  modal.style.display = "flex";
  pdfImage.src = pages[currentPage];
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
    modal.style.display = "none";
  }
}

prevBtn.onclick = function() {
  if (currentPage > 0) {
    currentPage--;
    pdfImage.src = pages[currentPage];
    updateButtonState();
  }
};

nextBtn.onclick = function() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    pdfImage.src = pages[currentPage];
    updateButtonState();
  }
};

function updateButtonState() {
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}
