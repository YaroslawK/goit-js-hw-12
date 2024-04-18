import{S as y,a as f,i}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const h=new y(".gallery a");function p(){const r=document.querySelector(".gallery");r.innerHTML=""}function u(r){const s=document.querySelector(".gallery"),a=r.map(t=>`
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
        `).join("");s.insertAdjacentHTML("beforeend",a),h.refresh()}function g(){document.querySelector(".loader").style.display="block"}function b(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const L="43277181-ebb9172f58fa43bc64ca23581",l=document.querySelector(".btn"),w=document.querySelector(".gallery");l.addEventListener("click",q);let n=1;const S=document.querySelector(".search-form");S.addEventListener("submit",()=>{n=1});console.log(n);async function d(r){const a=`https://pixabay.com/api/?${new URLSearchParams({key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20,page:n})}`;try{const t=await f(a);return l.classList.replace("btn-hidden","btn"),t.data.hits}catch{throw new Error("Failed to fetch images")}}async function q(){n+=1,console.log(n),l.disabled=!0;try{const r=m.value.trim(),s=await d(r);w.insertAdjacentHTML("beforeend",u(s)),l.disabled=!1}catch{throw new Error("Failed to fetch images")}}const E=document.querySelector(".search-form"),m=document.querySelector(".search-input");E.addEventListener("submit",v);async function v(r){r.preventDefault();const s=m.value.trim();if(!s){i.error({title:"Error",message:"Please enter a search query"});return}try{g(),p();const a=await d(s);a.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):u(a)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{b()}}
//# sourceMappingURL=commonHelpers.js.map
