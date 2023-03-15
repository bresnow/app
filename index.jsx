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


var log = window.log = console.log.bind(console)
var user = JOY.user;
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "night"
    : "day");
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


if (!location.hash) {
  JOY.route("home");
}
export const PageHeader = ({ children }) => {

  return (
    <header  class="header">
      <div class="header__left">
        <a href="#home">
          {children}
        </a>
      </div>

      <div name="layout_header" class="header__right">
        <span>%-- appname --%</span>
      </div>
    </header>)
}
JOY.jsxRender(
  <div class="app" data-as >
    <PageHeader>
      <Logo size={70} />
    </PageHeader>


    <Views />

    <footer class="footer">
      <p><a href="#home">@bresnow</a></p>
      <p> <a href="#"></a></p>

      <p class="footer__more">

      </p>
    </footer>
  </div>
)