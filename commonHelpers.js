import{S as i,a as c,i as n}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=new i(".gallery a");function m(){const a=document.querySelector(".gallery");a.innerHTML=""}function d(a){const s=document.querySelector(".gallery"),o=a.map(t=>`
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
        `).join("");s.innerHTML=o,u.refresh()}function y(){document.querySelector(".loader").style.display="block"}function f(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const h="43277181-ebb9172f58fa43bc64ca23581";async function p(a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;try{return(await c(o)).data.hits}catch{throw new Error("Failed to fetch images")}}const g=document.querySelector(".search-form"),L=document.querySelector(".search-input");document.querySelector(".btn");g.addEventListener("submit",w);async function w(a){a.preventDefault();const s=L.value.trim();if(!s){n.error({title:"Error",message:"Please enter a search query"});return}try{y(),m();const o=await p(s);o.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):d(o)}catch{n.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{f()}}
//# sourceMappingURL=commonHelpers.js.map
