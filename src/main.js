import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

import { fetchImages } from './js/pixabay-api';

import {
  createMarkup,
  showLoader,
  hideLoader,
  imgGallery,
} from './js/render-functions';

const form = document.querySelector('.search-form');
form.addEventListener('submit', onSubmit);
const btnLoadMore = document.querySelector('.btn-load-more');
btnLoadMore.addEventListener('click', onLoad);

let userSearch = '';
let page;
let limit = 15;
let totalHits;

const API_KEY = '43226276-a07a0c17e428cfffb021b9b05';
const params = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  q: userSearch,
  per_page: limit,
  page: page,
});

async function onSubmit(event) {
  event.preventDefault();
  page = 1;
  imgGallery.innerHTML = '';
  const elements = event.target.elements;
  userSearch = elements.images.value.trim();
  if (userSearch === '') {
    return;
  }
  btnLoadMore.style.display = 'none';
  params.set('q', userSearch);
  try {
    showLoader();

    const data = await fetchImages(params);
    totalHits = data.totalHits;
    createMarkup(data.hits);
    gallery.refresh();

    if (totalHits > limit) {
      page += 1;
      btnLoadMore.style.display = 'block';
    }
  } catch (error) {
    iziToast.show(iziTParams);
  } finally {
    hideLoader();
  }
  form.reset();
}

async function onLoad(event) {
  const totalPages = Math.ceil(totalHits / limit);
  btnLoadMore.disabled = true;
  params.set('page', page);

  try {
    showLoader();
    const data = await fetchImages(params);
    totalHits = data.totalHits;
    createMarkup(data.hits);
    gallery.refresh();
     btnLoadMore.disabled = false;
    const galleryCard = document.querySelector('.list-item');
    const cardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (page < totalPages) {
      page += 1;
    } else if (page === totalPages) {
      btnLoadMore.style.display = 'none';
      iziTParams.message =
        "We're sorry, but you've reached the end of search results.";
      iziToast.show(iziTParams);
    }
  } catch (error) {
    iziToast.show(iziTParams);
  }
  hideLoader();
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





const iziTParams = {
  titleColor: '#fff',
  message:
    'Sorry, there are no images matching<br>your search query.Please try again!',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '150%',
  backgroundColor: ' #ef4040',
  // icon: 'errIcon',
  iconUrl: 'img/error.svg',
  position: 'topRight',
  close: true,
  closeOnEscape: false,
  closeOnClick: false,
  timeout: 5000,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
};