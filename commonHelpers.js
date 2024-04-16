import{S as m,a as y,i as c}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const f=new m(".gallery a");function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function d(r){const o=document.querySelector(".gallery"),a=r.map(t=>`
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
        `).join("");o.insertAdjacentHTML("beforeend",a),f.refresh()}function p(){document.querySelector(".loader").style.display="block"}function g(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const b="43277181-ebb9172f58fa43bc64ca23581",n=document.querySelector(".btn"),L=document.querySelector(".gallery");n.addEventListener("click",w);let l=1;async function u(r){const a=`https://pixabay.com/api/?${new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l})}`;try{const t=await y(a);return t.data.totalHits<=500&&n.classList.replace("btn-hidden","btn"),t.data.hits}catch{throw new Error("Failed to fetch images")}}async function w(){l+=1,console.log(l),n.disabled=!0;try{const r=await u(l);L.insertAdjacentHTML("beforeend",d(r)),n.disabled=!1}catch{throw new Error("Failed to fetch images")}}const S=document.querySelector(".search-form"),q=document.querySelector(".search-input");S.addEventListener("submit",E);async function E(r){r.preventDefault();const o=q.value.trim();if(!o){c.error({title:"Error",message:"Please enter a search query"});return}try{p(),h();const a=await u(o);a.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):d(a)}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{g()}}
//# sourceMappingURL=commonHelpers.js.map
