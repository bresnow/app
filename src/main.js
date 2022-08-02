// Styles
import "./style/style.css";
import "./style/app.css";
import "./style/meta.css";

// Scripts
import "gun/gun.js";
import "gun/sea.js";
import "./js/lib/as.js";
// import "./js/lib/meta.js";
// import "./js/lib/meta.ui.js";
import app from "./js/app.js";
const logo = (size) => {
  return `
  <svg class="unit max" width="${size}em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect  width="48" height="48" rx="17.431" fill="var(--background)"/>
      <path d="M20.3868 13.1076C20.3868 14.8555 18.9699 16.2725 17.222 16.2725C15.4741 16.2725 14.0571 14.8555 14.0571 13.1076C14.0571 11.3597 15.4741 9.9428 17.222 9.9428C18.9699 9.9428 20.3868 11.3597 20.3868 13.1076Z" fill="var(--green)"/>
      <path d="M8.29981 29.9136C7.06552 31.1479 7.06552 33.149 8.29981 34.3833C9.53409 35.6176 11.5353 35.6176 12.7695 34.3833L8.29981 29.9136ZM25.8238 21.329C27.0581 20.0947 27.0581 18.0936 25.8238 16.8593C24.5895 15.625 22.5884 15.625 21.3541 16.8593L25.8238 21.329ZM12.7695 34.3833L25.8238 21.329L21.3541 16.8593L8.29981 29.9136L12.7695 34.3833Z" fill="var(--yellow)"/>
      <path d="M34.6733 36.0574C35.9076 37.2917 37.9088 37.2917 39.1431 36.0574C40.3773 34.8231 40.3773 32.8219 39.1431 31.5876L34.6733 36.0574ZM31.0348 23.4794C29.8005 22.2451 27.7994 22.2451 26.5651 23.4794C25.3308 24.7137 25.3308 26.7148 26.5651 27.9491L31.0348 23.4794ZM39.1431 31.5876L31.0348 23.4794L26.5651 27.9491L34.6733 36.0574L39.1431 31.5876Z" fill="var(--red)"/>
  </svg>
`;
};

// HTML

// ${key ? app.navBar : app.auth}
$("#app").html(`
   <div id="home" class="page full center">
      ${app.auth}
  </div> 
  ${app.navBar}
`);

// Theme
app.authLogic();
app.script();
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);
// Events
