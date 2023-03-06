// Styles
import "uno.css"
import "./style/style.css";
import "./style/app.css";
import "./style/meta.css";
// Scripts
import "gun/gun.js";
import "gun/sea.js";
import "./js/lib/as.js";
import * as  dom from "gun/lib/dom"
import "./js/lib/meta.js";
import "./js/lib/meta.ui.js";
import app from "./js/app.js";

$ === undefined ? $ = dom : $ = window.$
// HTML

$("#app").html(`
   <div id="home" class="page full center">
   ${app.auth}
   </div> 
   ${app.navBar}
   ${app.main}
   ${app.live}
`);

// Theme

app.authenticate()
;

// as.route.page("main", function () {
//   console.log("main");

//   app.script();
// });

// gun.on("auth", app.script());
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);
// Events
