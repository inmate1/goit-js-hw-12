
export function createMarkup(array) {
  return array
    .map(
      ({
        id,
        largeImageURL,
        previewURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="list-item">
          <a href="${largeImageURL}" class="list-link">
          <img src="${webformatURL}" alt="${tags}" class="item-img" width="360" height="160">
          </a>
         <ul class="list-review">
           <li class="review-item">
              <h3 class="review-title">likes</h3>
              <p class="review-text">${likes}</p></li>
           <li class="review-item">
              <h3 class="review-title">views</h3>
              <p class="review-text">${views}</p></li>
           <li class="review-item">
              <h3 class="review-title">comments</h3>
              <p class="review-text">${comments}</p></li>
           <li class="review-item">
              <h3 class="review-title">downloads</h3>
              <p class="review-text">${downloads}</p></li>
            </ul>
          </li>`
    )
    .join('');
}

hideLoader();


export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}