!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);o("bpxeT"),o("2TvXO");o("dh4R1"),o("kvC6y"),o("gdWjx"),o("5xtVg");var r=o("5sWi4"),d=o("fj34r");o("26XG5");o("9VC5X"),o("gcjAE"),(0,r.paginationLocalStorage)("watched");document.querySelector(".my-gallery");document.querySelector(".header__buttons-library").addEventListener("click",(function(e){var t=e.target;if(t===n)return d.default.load("queue")?((0,r.paginationLocalStorage)("queue"),void c(t)):void c(t);if(t===i)return d.default.load("watched")?((0,r.paginationLocalStorage)("watched"),void c(t)):void c(t)}));var n=document.querySelector('[data-add="queue"]'),i=document.querySelector('[data-add="watched"]');function c(e){e===n?(i.classList.remove("btn--active"),n.classList.add("btn--active")):(i.classList.add("btn--active"),n.classList.remove("btn--active"))}}();
//# sourceMappingURL=my-library.38e92cd6.js.map