import{S as y,a as f,i}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=new y(".gallery a");function p(){const a=document.querySelector(".gallery");a.innerHTML=""}function g(a){const o=document.querySelector(".gallery"),r=a.map(e=>`
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
        `).join("");o.insertAdjacentHTML("beforeend",r),h.refresh();const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();return window.scrollBy({top:s*2,behavior:"smooth"}),r}function b(){document.querySelector(".loader").style.display="block"}function L(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const S="43277181-ebb9172f58fa43bc64ca23581",u=document.querySelector(".btn");let l=1;const c=15;async function q(a){const r=`https://pixabay.com/api/?${new URLSearchParams({key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:l})}`;try{l+=1;const s=await f(r);return u.classList.replace("btn-hidden","btn"),console.log(Math.floor(s.data.totalHits/c)),console.log(l),Math.floor(s.data.totalHits/c)===l&&u.classList.replace("btn","btn-hidden"),s.data.hits}catch{throw new Error("Failed to fetch images")}}document.querySelector(".gallery");const w=document.querySelector(".btn"),E=document.querySelector(".search-form"),v=document.querySelector(".search-input");let d=1;console.log(d);const $=document.querySelector(".search-form");$.addEventListener("submit",()=>{p(),d=1});E.addEventListener("submit",m);async function m(a){a.preventDefault();const o=v.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search query"});return}try{b();const r=await q(o);r.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{L()}}w.addEventListener("click",m);
//# sourceMappingURL=commonHelpers.js.map
