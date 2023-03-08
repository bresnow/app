// Styles
import "./src/style/style.css";
import "./src/style/app.css";
// import "./src/style/meta.css";

// Scripts
import "gun/gun.js";
import "gun/sea.js";
import "./src/lib/joy.js";
import "./src/lib/meta.js";
import "./src/lib/meta.ui.js";
import app from "./src/app.js";
import nav from "./src/components/nav";
var routes = [
  {
    where: "home",
    icon: "home",
  },
  // {
  // 	where: "profile",
  // 	icon: "user",
  // },
  // {
  // 	where: "create",
  // 	icon: "pencil",
  // },
  {
    where: "settings",
    icon: "settings",
  }
];
// HTML
$("#app").html(`
<main>
${app.home}
</main>
  <footer>
  ${nav(routes)}
  </footer>
`);

// Theme

// app.authLogic();

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
gun.on("auth", async function (ack) {
  if (!storedKey) {
    localStorage.setItem("key", JSON.stringify(JOY.key));
  }
  var pub = "~" + user.is.pub;
  JOY.user.get("profile").on((d) => {
    $("#my").attr("href", `#profile/?pub=${pub}`);
    $("#my img").attr("src", JOY.avatar(d.avatar));
  });
});

if (!location.hash) {
  JOY.route("home");
}