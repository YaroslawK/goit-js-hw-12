import{S as y,a as f,i as l}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=new y(".gallery a");function p(){const o=document.querySelector(".gallery");o.innerHTML=""}function g(o){const s=document.querySelector(".gallery"),r=o.map(e=>`
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
        `).join("");s.insertAdjacentHTML("beforeend",r),h.refresh();const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();return window.scrollBy({top:a*2,behavior:"smooth"}),r}function b(){document.querySelector(".loader").style.display="block"}function L(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const w="43277181-ebb9172f58fa43bc64ca23581",c=document.querySelector(".btn");let i=1;const u=15;async function S(o){const r=`https://pixabay.com/api/?${new URLSearchParams({key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:i})}`;try{i+=1;const a=await f(r);return c.classList.replace("btn-hidden","btn"),Math.floor(a.data.totalHits/u)===i&&c.classList.replace("btn","btn-hidden"),a.data.hits}catch{throw new Error("Failed to fetch images")}}const q=document.querySelector(".btn"),d=document.querySelector(".search-form"),E=document.querySelector(".search-input");d.addEventListener("submit",()=>{p()});d.addEventListener("submit",m);q.addEventListener("click",m);async function m(o){o.preventDefault();const s=E.value.trim();if(!s){l.error({title:"Error",message:"Please enter a search query"});return}try{b();const r=await S(s);r.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r)}catch{l.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{L()}}
//# sourceMappingURL=commonHelpers.js.map
