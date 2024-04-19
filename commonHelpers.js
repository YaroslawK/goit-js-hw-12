import{S as h,a as f,i}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p=new h(".gallery a");function g(){const n=document.querySelector(".gallery");n.innerHTML=""}function b(n){const s=document.querySelector(".gallery"),o=n.map(e=>`
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
        `).join("");return s.insertAdjacentHTML("beforeend",o),p.refresh(),o}function L(){document.querySelector(".loader").style.display="block"}function S(){document.querySelector(".btn").style.display="block"}function w(){document.querySelector(".loader").style.display="none"}function q(){document.querySelector(".btn").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const E="43277181-ebb9172f58fa43bc64ca23581",u=document.querySelector(".btn");let c=1;const d=15;async function v(n){const o=`https://pixabay.com/api/?${new URLSearchParams({key:E,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:c})}`;try{c+=1;const e=await f(o);if(u.classList.replace("btn-hidden","btn"),Math.floor(e.data.totalHits/d)===c){u.classList.replace("btn","btn-hidden");return}return e.data.hits}catch{throw new Error("Failed to fetch images. Please try again later!")}}const $=document.querySelector(".btn"),m=document.querySelector(".search-form"),P=document.querySelector(".search-input");let a=1;m.addEventListener("submit",()=>{g(),a=1,q()});m.addEventListener("submit",y);$.addEventListener("click",y);async function y(n){n.preventDefault();const s=P.value.trim();if(!s){i.error({title:"Error",message:"Please enter a search query"});return}try{L();const o=await v(s,a);if(o.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(o),S()),a+=1,a!==2){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({left:0,top:e*2,behavior:"smooth"})}}catch{i.error({title:"Error",message:"We are sorry, but you have reached the end of search results."})}finally{w()}}
//# sourceMappingURL=commonHelpers.js.map
