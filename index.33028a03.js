!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i),i("kvC6y");var r=i("bpxeT"),o=i("2TvXO"),c=i("9JQa4"),l=i("dh4R1");i("fj34r");var d=document.querySelector(".gallery"),u=document.querySelector(".pagination__box"),s=document.querySelector(".pagination__container");function p(){var e=localStorage.getItem("currentFilms")||{};try{return JSON.parse(e).total_pages}catch(e){console.log("nothing")}}function _(){return(_=e(r)(e(o).mark((function t(){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p(),(0,c.default)(),!(n<=7&&n>=1)){e.next=7;break}return b(n),document.querySelector(".js-page-1").classList.add("pagination__item--select"),u.addEventListener("click",y),e.abrupt("return");case 7:u.innerHTML="",m(n),document.querySelector(".js-page-1").classList.add("pagination__item--select"),a=document.querySelector(".pagination__btnLeft"),document.querySelector(".pagination__btnRight"),a.disabled=!0,s.addEventListener("click",(function(e){if(e.target.classList.contains("pagination__item")||e.target.classList.contains("pagination__btnLeft")||e.target.classList.contains("pagination__btnRight")){if(e.target.classList.contains("pagination__item")){var t=Number(e.target.textContent);v(t),f(n,t),document.querySelector(".pagination__btnLeft").disabled=1===t,document.querySelector(".pagination__btnRight").disabled=t===n}if(e.target.classList.contains("pagination__btnLeft")){var a=document.querySelector(".pagination__item--select"),i=Number(a.textContent)-1;v(i),f(n,i),console.log(document.querySelector(".pagination__item--select").textContent),console.log(1===Number(document.querySelector(".pagination__item--select").textContent)),1===Number(document.querySelector(".pagination__item--select").textContent)?document.querySelector(".pagination__btnLeft").disabled=!0:document.querySelector(".pagination__btnLeft").disabled=!1}if(e.target.classList.contains("pagination__btnRight")){var r=document.querySelector(".pagination__item--select"),o=Number(r.textContent)+1;v(o),f(n,o),Number(document.querySelector(".pagination__item--select").textContent)===n?document.querySelector(".pagination__btnRight").disabled=!0:document.querySelector(".pagination__btnRight").disabled=!1}}}));case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function f(e,t){var n,a;u.innerHTML="",null===(n=document.querySelector(".pagination__btnLeft"))||void 0===n||n.remove(),null===(a=document.querySelector(".pagination__btnRight"))||void 0===a||a.remove();var i=5-(Math.ceil(5/3)-2),r=e-4;t<i?m(e):t>=i&&t<=r?function(e,t){q(s);var n=document.createElement("ul");n.classList.add("pagination__list");var a=h(1);n.appendChild(a),L(n);for(var i=t-(Math.ceil(2.5)-1);i<=t+(Math.ceil(2.5)-1);i+=1){var r=h(i);n.appendChild(r)}L(n);var o=h(e);n.appendChild(o),u.appendChild(n),S(s)}(e,t):function(e){q(s);var t=document.createElement("ul");t.classList.add("pagination__list");var n=h(1);t.appendChild(n),L(t);for(var a=e-4;a<=e;a+=1){var i=h(a);t.appendChild(i)}u.appendChild(t),S(s)}(e),document.querySelector(".js-page-".concat(t)).classList.add("pagination__item--select")}function v(e){return g.apply(this,arguments)}function g(){return(g=e(r)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.innerHTML="",l.default.pageNumber=n,(0,c.default)();case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e){q(s);var t=document.createElement("ul");t.classList.add("pagination__list");for(var n=0;n<5;n+=1){var a=h(n+1);t.appendChild(a)}L(t);var i=h(e);t.appendChild(i),u.appendChild(t),S(s)}function b(e){var t=document.createElement("ul");t.classList.add("pagination__list");for(var n=0;n<e;n+=1){var a=h(n+1);t.appendChild(a)}u.appendChild(t)}function h(e){var t=document.createElement("li");return t.classList.add("pagination__item","js-page-".concat(e)),t.innerText=e,t}function y(e){e.target.classList.contains("pagination__item")&&(d.innerHTML="",l.default.pageNumber=Number(e.target.textContent),(0,c.default)(),document.querySelector(".js-page-".concat(currentPage)).classList.add("pagination__item--select"))}function L(e){var t=document.createElement("li");t.classList.add("pagination__dots"),t.innerText="...",e.appendChild(t)}function q(e){var t=document.createElement("button");t.classList.add("pagination__btnLeft"),t.innerText="<",t.type="button",e.prepend(t)}function S(e){var t=document.createElement("button");t.classList.add("pagination__btnRight"),t.innerText=">",t.type="button",e.append(t)}i("gdWjx"),i("5xtVg"),i("gcjAE"),i("9VC5X");var x=i("fj34r");document.querySelector(".modal").addEventListener("click",(function(e){var t=e.target,n=t.closest("div").dataset.id;if("queueInModal"===t.id)return N(t),function(e){var t=x.default.load("currentFilms"),n=C.findIndex((function(t){return t.id===Number(e)})),a=C.find((function(t){return t.id===Number(e)})),i={},r=!0,o=!1,c=void 0;try{for(var l,d=t.results[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var u=l.value;u.id===Number(e)&&(i={genre_ids:u.genre_ids,release_date:u.release_date,poster_path:u.poster_path,backdrop_path:u.backdrop_path,title:u.title,popularity:u.popularity,vote_average:u.vote_average,vote_count:u.vote_count,overview:u.overview,id:u.id})}}catch(e){o=!0,c=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw c}}return a?(C.splice(n,1),void x.default.save("queue",C)):(C.push(i),void x.default.save("queue",C))}(n);if("watchedInModal"===t.id)return N(t),function(e){var t=x.default.load("currentFilms"),n=w.findIndex((function(t){return t.id===Number(e)})),a=w.find((function(t){return t.id===Number(e)})),i={},r=!0,o=!1,c=void 0;try{for(var l,d=t.results[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var u=l.value;u.id===Number(e)&&(i={genre_ids:u.genre_ids,release_date:u.release_date,poster_path:u.poster_path,backdrop_path:u.backdrop_path,title:u.title,popularity:u.popularity,vote_average:u.vote_average,vote_count:u.vote_count,overview:u.overview,id:u.id})}}catch(e){o=!0,c=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw c}}a?(w.splice(n,1),x.default.save("watched",w)):(w.push(i),x.default.save("watched",w))}(n)}));var C=x.default.load("queue")||[],w=x.default.load("watched")||[];function N(e){var t=document.querySelector("#queueInModal"),n=document.querySelector("#watchedInModal");"queueInModal"===e.id?(t.classList.add("button-list--active"),n.classList.remove("button-list--active")):(n.classList.add("button-list--active"),t.classList.remove("button-list--active"))}!function(){_.apply(this,arguments)}()}();
//# sourceMappingURL=index.33028a03.js.map
