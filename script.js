const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-product]').forEach(link => {
  link.addEventListener('click', () => {
    const productInterest = document.getElementById('productInterest');
    if (productInterest) productInterest.value = link.dataset.product;
  });
});

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const product = document.getElementById('productInterest').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !product) {
      document.getElementById('formStatus').textContent = 'Please complete your name, phone number, and collection.';
      return;
    }

    const text = [
      'Namaste Sunny Art Emporium, I would like to make an enquiry.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${product}`,
      message ? `Message: ${message}` : ''
    ].filter(Boolean).join('\n');

    document.getElementById('formStatus').textContent = 'Opening WhatsApp with your enquiry. Please send the message in WhatsApp to complete your enquiry.';
    window.open(`https://wa.me/918539888510?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
