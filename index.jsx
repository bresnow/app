// import "./src/style/style.css";
import './src/style/application.css'
// import "./src/style/cards.css";
// import "./src/style/app.css";
import "gun/gun.js";
import "gun/sea.js";
// import "@benrbray/prosemirror-math/style/math.css";
// import "katex/dist/katex.min.css";
// import "gun/as.js"
import "./src/lib/chain.js";
import "./src/lib/joy.js";
// import "./src/lib/as.js";
import "./src/lib/meta.js";
import "./src/lib/meta.ui.js";
import "./src/style";

// import hero from "./src/component/hero";
Gun.log.off = true;
// import "@benrbray/prosemirror-math/style/math.css";
import "./src/style/math.css";

import NavigationBar from "./src/components/nav.jsx";
import Home from './src/views/home.jsx'
import Settings from "./src/views/settings"
import Header from './src/components/header';
import { navigationRoutes } from './src/utils/constants';
window.log = console.log.bind(console)
var user = JOY.user;
JOY.opt = {
  match: '%-- ',
  end: ' --%'
}
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
      document.getElementById("navbar").style.bottom = "0";
    }
  } else {
    if (x) {
      document.getElementById("navbar").style.bottom = "-10em";
    }
  }
  prevScrollpos = currentScrollPos;
};

document.querySelector("#app").innerHTML = (
  <div class="app">
    <header class="header">
      <div class="header__left">
        <span>FLOATING MAMMOTH</span>
      </div>

      <div class="header__right">
        <p></p>
      </div>
    </header>

    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          {/* <a href="#vienna" class="nav__link" data-scroll-to>
            <div class="media">
              <img src="https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&vib=20&w=2000" alt="" class="media__img" />
                <p class="media__content">
                  <strong>Vienna</strong><br />
                  Austria
                </p>
            </div>
          </a> */}
        </li>
        <li class="nav__item">
          {/* <a href="#lisbon" class="nav__link" data-scroll-to>
            <div class="media">
              <img src="https://lonelyplanetimages.imgix.net/mastheads/54989636.jpg?sharp=10&vib=20&w=2000" alt="" class="media__img" />
                <p class="media__content">
                  <strong>Lisbon</strong><br />
                  Portugal
                </p>
            </div>
          </a> */}
        </li>
        <li class="nav__item">
          {/* <a href="#newyork" class="nav__link" data-scroll-to>
            <div class="media">
              <img src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=2000" alt="" class="media__img" />
                <p class="media__content">
                  <strong>New York</strong><br />
                  USA
                </p>
            </div>
          </a> */}
        </li>
      </ul>
    </nav>
    {/* <div id={location.hash.substring(1)}> */}
  <Home/>
  {/* <Settings/> */}
    {/* </div> */}
    <footer class="footer">
      <p><a href="#">@bresnow</a></p>
      <p> <a href="#"></a></p>

      <p class="footer__more">
       
      </p>
    </footer>
  </div>
 
)
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
