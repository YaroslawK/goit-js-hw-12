import{S as y,a as f,i}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const h=new y(".gallery a");function p(){const s=document.querySelector(".gallery");s.innerHTML=""}function u(s){const r=document.querySelector(".gallery"),a=s.map(t=>`
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
        `).join("");r.insertAdjacentHTML("beforeend",a),h.refresh()}function g(){document.querySelector(".loader").style.display="block"}function b(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const L="43277181-ebb9172f58fa43bc64ca23581",l=document.querySelector(".btn"),w=document.querySelector(".gallery");l.addEventListener("click",S);let c=1;async function d(s){const a=`https://pixabay.com/api/?${new URLSearchParams({key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:c})}`;try{const t=await f(a);return t.data.totalHits<=500&&l.classList.replace("btn-hidden","btn"),t.data.hits}catch{throw new Error("Failed to fetch images")}}async function S(){c+=1,console.log(c),l.disabled=!0;try{const s=m.value.trim(),r=await d(s);console.log(r),w.insertAdjacentHTML("beforeend",u(r)),l.disabled=!1}catch{throw new Error("Failed to fetch images")}}const q=document.querySelector(".search-form"),m=document.querySelector(".search-input");q.addEventListener("submit",E);async function E(s){s.preventDefault();const r=m.value.trim();if(console.log(r),!r){i.error({title:"Error",message:"Please enter a search query"});return}try{g(),p();const a=await d(r);a.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):u(a)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{b()}}
//# sourceMappingURL=commonHelpers.js.map
