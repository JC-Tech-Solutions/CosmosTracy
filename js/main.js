document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('was-validated');
  if (form.checkValidity()) {
    document.getElementById('formMsg').classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  }
});
