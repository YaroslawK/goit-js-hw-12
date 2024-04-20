import{S as y,a as f,i}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p=new y(".gallery a"),d=document.querySelector(".btn");function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function b(o){const s=document.querySelector(".gallery"),n=o.map(t=>`
        <li class="item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" class="image"/>
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
            <h3>Likes</h3>
            <p>${t.likes}</p>
                </li>
                <li class="stats-list-item">
            <h3>Views</h3>
            <p>${t.views}</p>
                </li>
                <li class="stats-list-item">
            <h3>Comments</h3>
            <p>${t.comments}</p>
                </li>
                <li class="stats-list-item">
            <h3>Downloads</h3>
            <p>${t.downloads}</p>
                </li>
            </ul>    
        </li>
        `).join("");return s.insertAdjacentHTML("beforeend",n),p.refresh(),n}function L(){document.querySelector(".loader").style.display="block"}function S(){d.classList.replace("btn-hidden","btn")}function w(){document.querySelector(".loader").style.display="none"}function m(){d.classList.replace("btn","btn-hidden")}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const q="43277181-ebb9172f58fa43bc64ca23581",c=document.querySelector(".btn"),u=15;async function E(o,s){const t=`https://pixabay.com/api/?${new URLSearchParams({key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:s})}`;try{const e=await f(t),r=e.data.totalHits/u;return c.classList.replace("btn-hidden","btn"),Math.ceil(r)<=s&&c.classList.replace("btn","btn-hidden"),e.data.hits}catch{throw new Error("Failed to fetch images. Please try again later!")}}const v=document.querySelector(".btn"),$=document.querySelector(".search-form"),P=document.querySelector(".search-input");let a=1;const B=o=>{a=1,g(),h(o),m()};$.addEventListener("submit",B);v.addEventListener("click",h);async function h(o){o.preventDefault();const s=P.value.trim();if(!s){i.error({title:"Error",message:"Please enter a search query"});return}try{L();const n=await E(s,a);if(n.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(n),S(),a>33&&m()),a++,a!==2){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({left:0,top:t*2,behavior:"smooth"})}}catch{i.error({title:"Error",message:"We are sorry, but you have reached the end of search results."})}finally{w()}}
//# sourceMappingURL=commonHelpers.js.map
