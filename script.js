const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar nav');

menuBtn?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.right = '7vw';
  nav.style.flexDirection = 'column';
  nav.style.background = '#111';
  nav.style.padding = '22px';
});

/* PRIVATE QR GALLERY */
const params = new URLSearchParams(window.location.search);
const eventId = params.get('event');

const privateGallery = document.querySelector('[data-private-gallery]');

if (privateGallery && !eventId) {
  privateGallery.innerHTML = `
    <div class="private-gallery-box">
      <h3>Galerie privée</h3>
      <p>
        Veuillez scanner le QR code de votre événement
        pour accéder aux photos.
      </p>
    </div>
  `;
}
