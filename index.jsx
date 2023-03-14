// import '@unocss/reset/antfu.css'
import './src/style/uno.css'
import './src/style/application.css'
// import "./src/style/cards.css";
// import "./src/style/app.css";
import "gun/gun.js";
import "gun/sea.js";
import "gun/lib/path.js";
import "gun/sea.js";
import "gun/lib/webrtc.js";
import "gun/lib/radix.js";
import "gun/lib/radisk.js";
import "gun/lib/store.js";
import "gun/lib/rindexed.js";
import "gun/lib/then.js";
import "gun/lib/later.js";
import "gun/lib/load.js";
import "gun/lib/open.js";
import "gun/lib/not.js";
import "gun/lib/axe.js";
import "./src/lib/meta"
// import "@benrbray/prosemirror-math/style/math.css";
// import "katex/dist/katex.min.css";
// import "gun/as.js"
import "./src/lib/chain.js";
import "./src/lib/joy.js";

import "./src/style";
// import hero from "./src/component/hero";
Gun.log.off = true;
// import "@benrbray/prosemirror-math/style/math.css";
import "./src/style/math.css";

import Views from './src/views';
import Logo from './src/components/logo';


var log =  window.log = console.log.bind(console)
var user = window.user = JOY.user;

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
var storedKey = localStorage.getItem("key");

if (storedTheme) document.documentElement.setAttribute("theme", storedTheme);
if (storedKey) {
  JOY.auth(JSON.stringify(storedKey));
}
gun.on("auth", function (ack) {
  log(ack,'auth');
  if (!storedKey) {
    localStorage.setItem("key", JSON.stringify(ack.sea));
  }
  var pub = "~" + user.is.pub;
});

if (!location.hash) {
  JOY.route("home");
}


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

 var layout_header = gun
  .get('layout_header');

layout_header
  .on(({ appname }) => {
!appname ?
    layout_header.put({ appname: 'FLOATING MAMMOTH' }): log("appname filled");
  })
export const LayoutHeader = ({ children }) => {

  return (
    <header name="layout_header" class="header">
      <div class="header__left">
        <a href="#home">
          {children}
        </a>
      </div>

      <div class="header__right">
        <span>%-- appname --%</span>
      </div>
    </header>)
}
JOY.jsxRender(
  <div class="app">
    <LayoutHeader>
      <Logo size={70} />
    </LayoutHeader>


    <Views />

    <footer class="footer">
      <p><a href="#home">@bresnow</a></p>
      <p> <a href="#"></a></p>

      <p class="footer__more">

      </p>
    </footer>
  </div>
)