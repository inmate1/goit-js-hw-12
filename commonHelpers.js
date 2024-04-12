import{a as C,i as h,S as H}from"./assets/vendor-4d51048b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();async function g(t){const r=`https://pixabay.com/api/?${t}`,s=await C(r);if(s.data.hits.length!==0)return s.data}const y=document.querySelector(".img-list");function w(t){const r=t.map(({id:s,largeImageURL:a,previewURL:e,webformatURL:i,tags:l,likes:S,views:q,comments:O,downloads:x})=>`<li class="list-item">
          <a href="${a}" class="list-link">
          <img src="${i}" alt="${l}" class="item-img" width="360" height="160">
          </a>
         <ul class="list-review">
           <li class="review-item">
              <h3 class="review-title">likes</h3>
              <p class="review-text">${S}</p></li>
           <li class="review-item">
              <h3 class="review-title">views</h3>
              <p class="review-text">${q}</p></li>
           <li class="review-item">
              <h3 class="review-title">comments</h3>
              <p class="review-text">${O}</p></li>
           <li class="review-item">
              <h3 class="review-title">downloads</h3>
              <p class="review-text">${x}</p></li>
            </ul>
          </li>`).join("");y.insertAdjacentHTML("beforeend",r)}function v(){const t=document.querySelector(".loader");t.style.display="block"}function b(){const t=document.querySelector(".loader");t.style.display="none"}const L=document.querySelector(".search-form");L.addEventListener("submit",$);const u=document.querySelector(".btn-load-more");u.addEventListener("click",k);let n="",o,f=15,d;const P="43226276-a07a0c17e428cfffb021b9b05",m=new URLSearchParams({key:P,image_type:"photo",orientation:"horizontal",safesearch:!0,q:n,per_page:f,page:o});async function $(t){if(t.preventDefault(),o=1,y.innerHTML="",n=t.target.elements.images.value.trim(),n!==""){u.style.display="none",m.set("q",n);try{v();const s=await g(m);d=s.totalHits,w(s.hits),p.refresh();const e=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:e*2.7,behavior:"smooth"}),d>f&&(o+=1,u.style.display="block")}catch{h.show(c)}finally{b()}L.reset()}}async function k(t){const r=Math.ceil(d/f);m.set("page",o);try{v();const s=await g(m);d=s.totalHits,w(s.hits),p.refresh();const e=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:e*2.7,behavior:"smooth"}),o<r?o+=1:o===r&&(u.style.display="none",c.message="We're sorry, but you've reached the end of search results.",h.show(c))}catch{h.show(c)}b()}let p=new H(".img-list .list-link",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});p.on("shown.simplelightbox",function(){const t=document.querySelector(".sl-image > img");t.style.width="100%",t.style.maxHeight="100%"});const c={titleColor:"#fff",message:"Sorry, there are no images matching<br>your search query.Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%",backgroundColor:" #ef4040",iconUrl:"img/error.svg",position:"topRight",close:!0,closeOnEscape:!1,closeOnClick:!1,timeout:5e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"};
//# sourceMappingURL=commonHelpers.js.map
