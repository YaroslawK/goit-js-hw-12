import{S as y,a as f,i as c}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const h=new y(".gallery a");function p(){const a=document.querySelector(".gallery");a.innerHTML=""}function d(a){const o=document.querySelector(".gallery"),r=a.map(e=>`
        <li class="item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" class="image"/>
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
            <h3>Likes</h3>
            <p>${e.likes}</p>
                </li>
                <li class="stats-list-item">
            <h3>Views</h3>
            <p>${e.views}</p>
                </li>
                <li class="stats-list-item">
            <h3>Comments</h3>
            <p>${e.comments}</p>
                </li>
                <li class="stats-list-item">
            <h3>Downloads</h3>
            <p>${e.downloads}</p>
                </li>
            </ul>    
        </li>
        `).join("");return o.insertAdjacentHTML("beforeend",r),h.refresh(),r}function g(){document.querySelector(".loader").style.display="block"}function b(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const w="43277181-ebb9172f58fa43bc64ca23581",n=document.querySelector(".btn"),L=document.querySelector(".gallery");n.addEventListener("click",q);let i=1;const S=document.querySelector(".search-form");S.addEventListener("submit",()=>{i=1});async function u(a){const r=`https://pixabay.com/api/?${new URLSearchParams({key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i})}`;try{const e=await f(r);return n.classList.replace("btn-hidden","btn"),e.data.hits}catch{throw new Error("Failed to fetch images")}}async function q(){i+=1,n.disabled=!0;try{const o=document.querySelector(".image").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"});const r=m.value.trim(),e=await u(r);L.insertAdjacentHTML("beforeend",d(e)),n.disabled=!1}catch{throw new Error("Failed to fetch images")}}const E=document.querySelector(".search-form"),m=document.querySelector(".search-input");E.addEventListener("submit",v);async function v(a){a.preventDefault();const o=m.value.trim();if(!o){c.error({title:"Error",message:"Please enter a search query"});return}try{g(),p();const r=await u(o);r.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):d(r)}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{b()}}
//# sourceMappingURL=commonHelpers.js.map
