import "./src/style/style.css";
import "./src/style/cards.css";
import "./src/style/app.css";
import "gun/gun.js";
import "gun/sea.js";
// import "gun/lib/ison.js";
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
// import "katex/dist/katex.min.css";
import nav from "./src/components/nav.js";
import header from "./src/components/header.js";
import { views } from "./src/views";
import { create, auth } from "./src/views/auth";
import Icon from "./src/components/icon.jsx";
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
  {
    where: "create",
    icon: "pencil",
  },
  {
    where: "settings",
    icon: "settings",
  }
];
if (!location.hash) {
  JOY.route("home");
}
let items = ['one', 'two', 'three'];
const Header = () => (
  <header name="header" class=" pt100 pb50 bg-grad-stellar" style="background: url({{ image }}) 50% 50% no-repeat; border-radius: 25px; background-size: cover;">
    <div class="container mb50 pt50 pb50">
      <div class="col-md-12 text-center">
        <div class="row">
          <ul class="Words">
            <li class="Words-line">
              <p>&nbsp;</p>
              <p class="color-white">Hail The</p>
            </li>
            <li class="Words-line">
              <p class="fs-75 txt-grad-animation">FLOATING</p>
              <p class="fs-75 txt-grad-animation">FLTNGMMTH</p>
            </li>
            <li class="Words-line">
              <p class="faint__title">Under</p>
              <p class="faint__title">Construction</p>
            </li>
            <li class="Words-line">
              <p class="fs-75 txt-grad-animation">MAMMOTH</p>
              <p class="fs-75 txt-grad-animation"><small>Designed By</small></p>
            </li>
            <li class="Words-line">
              <p class="clear__title" >p</p>
              <p>Bresnow</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)
document.querySelector("#app").innerHTML = (<div class="foo">
  <h1>Under Construction</h1>
  <Header />
  {/* <p>Here is a list of {items.length} items:</p>
  <ul>
    {items.map(item => (
      <li>{item}</li>
    ))}
  </ul> */}
</div>);
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
