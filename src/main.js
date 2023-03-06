// Styles
import "./style/style.css";
import 'animate.css';
import "./style/app.css";
// Scripts
import "gun/gun.js";
import "gun/sea.js";
import "./js/lib/as.js";
// import "./js/lib/dom.js";
import "./js/lib/meta.js";
// import "./js/lib/meta.ui.js";
import app from "./js/app.js";

// Load the app 
var routes = [
	{
		where: "home",
		icon: "home",
	},
	{
		where: "profile",
		icon: "user",
	},
	{
		where: "create",
		icon: "pencil",
	},
	{
		where: "settings",
		icon: "settings",
	}
];
$("#app").html(`

${app.main}
<div id="home" class="page full center">
${app.auth}
</div> 
<footer>
${app.navBar}
</footer>
</div>
   ${app.live}
`);


app.authenticate()
;

JOY.route.page("main", function () {
  console.log("main");

  app.script();
});

// gun.on("auth", app.script());
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);
// Events
