import Root from './views/demo';
import { hashCheck } from './components/joy-jsx/hash-route';

// hashCheck("app")
gun.opt({peers: ["https://relay.fltngmmth.com/gun"]})
var storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "night"
        : "day");

var storedKey = localStorage.getItem("key");

if (storedTheme) document.documentElement.setAttribute("theme", storedTheme);
if (storedKey) JOY.auth(JSON.parse(storedKey));

gun.on("auth", async function (ack) {
    if (!storedKey) {
        localStorage.setItem("key", JSON.stringify(JOY.key));
    }

    await JOY.user.generateCert(
        "*",
        [{ "*": "notifications" }, { "*": "notify" }],
        "certificates/notifications"
    );
    console.log("Your namespace is publicly available at", ack.soul);
});
JOY.render(<Root />)


