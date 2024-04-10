import iziToast from 'izitoast';

import SimpleLightbox from 'simplelightbox';

const imgGallery = document.querySelector('.img-list');

import { fetchImages } from './js/pixabay-api';

import { createMarkup, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.search-form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  imgGallery.innerHTML = '';
  const elements = event.target.elements;
  const userSearch = elements.images.value.trim();
  if (userSearch === '') {
    return;
  }
  showLoader();

  fetchImages(userSearch)
    .then(data => {
      imgGallery.insertAdjacentHTML('beforeend', createMarkup(data));
      gallery.refresh();
    })
    .catch(error => {
      iziToast.show({
        titleColor: '#fff',
        message:
          'Sorry, there are no images matching<br>your search query.Please try again!',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: ' #ef4040',
        // icon: 'img/error.svg',
        // iconUrl: './img/error.svg',
        position: 'topRight',
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        timeout: 5000,
        resetOnHover: true,
        icon: 'img/error.svg',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}

let gallery = new SimpleLightbox('.img-list .list-link', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

gallery.on('shown.simplelightbox', function () {
  const enlargedImg = document.querySelector('.sl-image > img');
  enlargedImg.style.width = '100%';
  enlargedImg.style.maxHeight = '100%';
});
