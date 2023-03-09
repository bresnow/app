import "./src/style/style.css";
import "./src/style/app.css";
import "gun/gun.js";
import "gun/sea.js";
// import "gun/lib/ison.js";
// import "@benrbray/prosemirror-math/style/math.css";
// import "katex/dist/katex.min.css";
// import "gun/as.js"
import "./src/lib/chain.js";
import "./src/lib/joy.js";
import "./src/lib/meta.js";
import "./src/lib/meta.ui.js";
import "./src/style";
// import hero from "./src/component/hero";
Gun.log.off = true;
// import "@benrbray/prosemirror-math/style/math.css";
import "./src/style/math.css";
// import "katex/dist/katex.min.css";
import nav from "./src/components/nav.js";
import header from "./src/components/header.js";
import {  views } from "./src/views";
import { create, auth } from "./src/views/auth";
// import logo from './component/logo';
// import h from "./lib/amnion-runtime";
var user = JOY.user;
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
var storedKey = localStorage.getItem("key");

if (storedTheme) document.documentElement.setAttribute("theme", storedTheme);
if (storedKey) {
  JOY.auth(JSON.parse(storedKey));
}
// JOY.route("home");
gun.on("auth", async function (ack) {
  if (!storedKey) {
    localStorage.setItem("key", JSON.stringify(JOY.key));
  }
  var pub = "~" + user.is.pub;
  user.get("profile").on((d) => {
    $("#my").attr("href", `#profile/?pub=${pub}`);
    $("#my img").attr("src", JOY.avatar(d.avatar));
  });
});

if (!location.hash) {
  JOY.route("home");
}
var prevScrollpos = window.pageYOffset;
var x = window.matchMedia("(min-width: 600px)");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if (x) {
      document.getElementById("nav").style.bottom = "0";
    }
  } else {
    if (x) {
      document.getElementById("nav").style.bottom = "-10em";
    }
  }
  prevScrollpos = currentScrollPos;
};

var routes = [
  {
    where: "home",
    icon: "home",
  },
  {
  	where: "profile",
  	icon: "user",
  },
  // {
  // 	where: "create",
  // 	icon: "pencil",
  // },
  {
    where: "settings",
    icon: "settings",
  }
];
if (!location.hash) {
  JOY.route("home");
}
document.querySelector("#app").innerHTML = `
 	${create}
	${auth}
	<header>
		${header}
	</header>
	<div id="loader" class="full hold"><div id="spinner"></div></div>
	<main>
		${views}
	</main>
	<footer>
		${nav(routes)}
	<footer>
`;
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

$(window).on("load", function () {
  disableScroll();
  setTimeout(() => {
    $("#loader").hide();
    enableScroll();
  }, 700);
});
