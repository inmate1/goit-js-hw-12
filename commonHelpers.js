import{a as P,i as f,S as H}from"./assets/vendor-01f77cb3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();async function y(t){const r=`https://pixabay.com/api/?${t}`,s=await P(r);if(s.data.hits.length!==0)return s.data}const g=document.querySelector(".img-list");function w(t){const r=t.map(({id:s,largeImageURL:l,previewURL:e,webformatURL:i,tags:n,likes:S,views:O,comments:q,downloads:x})=>`<li class="list-item">
          <a href="${l}" class="list-link">
          <img src="${i}" alt="${n}" class="item-img" width="360" height="160">
          </a>
         <ul class="list-review">
           <li class="review-item">
              <h3 class="review-title">likes</h3>
              <p class="review-text">${S}</p></li>
           <li class="review-item">
              <h3 class="review-title">views</h3>
              <p class="review-text">${O}</p></li>
           <li class="review-item">
              <h3 class="review-title">comments</h3>
              <p class="review-text">${q}</p></li>
           <li class="review-item">
              <h3 class="review-title">downloads</h3>
              <p class="review-text">${x}</p></li>
            </ul>
          </li>`).join("");g.insertAdjacentHTML("beforeend",r)}function v(){const t=document.querySelector(".loader");t.style.display="block"}function b(){const t=document.querySelector(".loader");t.style.display="none"}const L=document.querySelector(".search-form");L.addEventListener("submit",C);const a=document.querySelector(".btn-load-more");a.addEventListener("click",k);let u="",o,h=15,m;const $="43226276-a07a0c17e428cfffb021b9b05",c=new URLSearchParams({key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,q:u,per_page:h,page:o});async function C(t){if(t.preventDefault(),o=1,c.set("page",o),g.innerHTML="",u=t.target.elements.images.value.trim(),u!==""){a.style.display="none",c.set("q",u);try{v();const s=await y(c);m=s.totalHits,w(s.hits),p.refresh(),m>h&&(o+=1,a.style.display="block")}catch{f.show(d)}finally{b()}L.reset()}}async function k(t){const r=Math.ceil(m/h);a.disabled=!0,c.set("page",o);try{v();const s=await y(c);m=s.totalHits,w(s.hits),p.refresh(),a.disabled=!1;const e=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),o<r?o+=1:o===r&&(a.style.display="none",d.message="We're sorry, but you've reached the end of search results.",f.show(d))}catch{f.show(d)}b()}let p=new H(".img-list .list-link",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});p.on("shown.simplelightbox",function(){const t=document.querySelector(".sl-image > img");t.style.width="100%",t.style.maxHeight="100%"});const d={titleColor:"#fff",message:"Sorry, there are no images matching<br>your search query.Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%",backgroundColor:" #ef4040",iconUrl:"img/error.svg",position:"topRight",close:!0,closeOnEscape:!1,closeOnClick:!1,timeout:5e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"};
//# sourceMappingURL=commonHelpers.js.map
