import{S as d,a as m,i as a}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=new d(".gallery a");function f(){const s=document.querySelector(".gallery");s.innerHTML=""}function h(s){const o=document.querySelector(".gallery"),r=s.map(e=>`
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
        `).join("");o.insertAdjacentHTML("beforeend",r),y.refresh();const{height:n}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();return window.scrollBy({top:n*2,behavior:"smooth"}),r}function p(){document.querySelector(".loader").style.display="block"}function g(){document.querySelector(".loader").style.display="none"}window.addEventListener("load",()=>{document.querySelector(".loader").style.display="block",setTimeout(()=>{document.querySelector(".loader").style.display="none"},500)});const b="43277181-ebb9172f58fa43bc64ca23581",L=document.querySelector(".btn");let c=1;async function S(s){const r=`https://pixabay.com/api/?${new URLSearchParams({key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:c})}`;try{c+=1;const n=await m(r);return L.classList.replace("btn-hidden","btn"),console.log(n),n.data.hits}catch{throw new Error("Failed to fetch images")}}document.querySelector(".gallery");const i=document.querySelector(".btn");console.log(i);const q=document.querySelector(".search-form"),w=document.querySelector(".search-input"),E=document.querySelector(".search-form");E.addEventListener("submit",()=>{f()});q.addEventListener("submit",u);async function u(s){s.preventDefault();const o=w.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query"});return}try{p();const r=await S(o);r.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(r)}catch{a.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}finally{g()}}i.addEventListener("click",u);
//# sourceMappingURL=commonHelpers.js.map
