import{S as h,a as y,i as l}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f=new h(".gallery a"),u=document.querySelector(".btn");function p(){const s=document.querySelector(".gallery");s.innerHTML=""}function g(s){const o=document.querySelector(".gallery"),n=s.map(t=>`
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
        `).join("");return o.insertAdjacentHTML("beforeend",n),f.refresh(),n}function b(){document.querySelector(".loader").style.display="block"}function L(){u.classList.replace("btn-hidden","btn")}function w(){document.querySelector(".loader").style.display="none"}function d(){u.classList.replace("btn","btn-hidden")}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const S="43277181-ebb9172f58fa43bc64ca23581",q=15;async function E(s,o){const t=`https://pixabay.com/api/?${new URLSearchParams({key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:o})}`;try{return(await y(t)).data}catch{throw new Error("Failed to fetch images. Please try again later!")}}const v=document.querySelector(".btn"),P=document.querySelector(".search-form"),$=document.querySelector(".search-input");let a=1,c;const B=s=>{a=1,p(),m(s),d()};P.addEventListener("submit",B);v.addEventListener("click",m);async function m(s){s.preventDefault();const o=$.value.trim();if(!o){l.error({title:"Error",message:"Please enter a search query"});return}try{b();const n=await E(o,a),t=n.hits,e=n.totalHits;if(t.length===0)l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{if(a===1&&(c=Math.ceil(e/t.length)),a++,g(t),a!==2){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({left:0,top:r*2,behavior:"smooth"})}L(),a>c&&(d(),l.error({title:"Error",message:"We are sorry, but you have reached the end of search results."}))}}catch{l.error({title:"Error",message:"We are sorry, but you have reached the end of search results."})}finally{w()}}
//# sourceMappingURL=commonHelpers.js.map
