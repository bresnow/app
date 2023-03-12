import QRCode from "../lib/qrcode.min.js";

const Settings = ()=>

	<section id="settings" class="page main">
		<article class="section" data-section>
		<div>
			<div class="surface col center sap">Account</div>
			<p>Save a backup of your private key first! Otherwise you can't log in back to this account.</p>
			<button id="switch" class="green">Switch Account</button>
			<button id="logout" class="red">Logout</button>
		</div>
		<div>
			<div class="surface col center sap">Private Key</div>
			<p><b class="redt">DANGER!</b> Private key gives access to your account. Don't give or show your private key to anyone else!</p>
			<button id="download-key">Download Key</button>
			<button id="copy-key" class="secondary">Copy Key</button>
			<button id="show-qr" class="accent">Show QR Code</button>
			<div id="private-qr" class="unit"></div>
		</div>
		<div>

			<div class="surface unit col center sap">Appearance</div>
			<p>Only theme change, more customization to come!</p>
			<button id="theme"></button>
			</div>
		<div >
			<div class="surface unit col center sap">About</div>
			<p class="gap">
			<strong></strong> A decentralized social platform that aims to be the center for creativity and arts.
			</p>
			<button id="install">Install</button>
		</div>
		</article>
	</section>
;
			// <spa class="surface col center sap">Peer</spa>
			// <p>In construction</p>
			// </details >
			// <details>
			// <summary class="surface col center sap">Language</summary>
			// <p>In construction</p>
			// </details>
			// <details>
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
	$("#install").show();
	deferredPrompt = e;
});
JOY.route.page("settings", function () {
	if (!JOY.key) {
		JOY.route("create");
	}
	JOY.head("Settings");
	var before = document.documentElement.getAttribute("theme");
	$("#theme").text(JOY.capitalize(before));
	$("#install").on("click", async () => {
		if (deferredPrompt !== null) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			if (outcome === "accepted") {
				deferredPrompt = null;
			}
		}
	});
	JOY.user.get("profile").on(async (p) => {
		JOY.route.render("p", ".persona-main", $("#persona"), {
			username: p.name,
			avatar: {
				src: JOY.avatar(p.avatar),
			},
		});
	});
	function logout() {
		JOY.user.leave();
		localStorage.removeItem("key");
		JOY.key = {};
	}
	$("#theme")
		.unbind("click")
		.on("click", function (e) {
			var before = document.documentElement.getAttribute("theme");
			var now = before === "day" ? "night" : "day";
			document.documentElement.setAttribute("theme", now);
			localStorage.setItem("theme", now);
			$("#theme").text(JOY.capitalize(now));
			JOY.tell(`${JOY.capitalize(now)} mode enabled.`);
			return;
		});
	$("#switch")
		.unbind("click")
		.on("click", function (e) {
			logout();
			JOY.route("auth");
		});
	$("#logout")
		.unbind("click")
		.on("click", function (e) {
			logout();
			JOY.route("home");
		});

	$("#download-key")
		.unbind("click")
		.on("click", function (e) {
			if (!JOY.key) {
				JOY.tell("Please Create/Login to access this!");
				return;
			}
			JOY.download(
				"ariob-key.txt",
				JSON.stringify(JOY.key),
				"text/plain",
				"utf-8"
			);
		});
	$("#copy-key")
		.unbind("click")
		.on("click", function (e) {
			if (!JOY.key) {
				JOY.tell("Please Create/Login to access this!");
				return;
			}
			navigator.clipboard.writeText(JSON.stringify(JOY.key));
		});
	$("#show-qr")
		.unbind("click")
		.on("click", function (e) {
			if (!JOY.key) {
				JOY.tell("Please Create/Login to access this!");
				return;
			}
			let btn = $(e.target);
			let show = $("#private-qr img").length === 0;
			let SHOW_TEXT = "Show QR Code";
			let hidePrivateKeyInterval;
			function reset() {
				clearInterval(hidePrivateKeyInterval);
				$("#private-qr").empty();
				btn.text(SHOW_TEXT);
			}
			function hideText(s) {
				return `Hide QR Code (${s})`;
			}
			if (show) {
				let showPrivateKeySecondsRemaining = 20;
				btn.text(hideText(showPrivateKeySecondsRemaining));
				hidePrivateKeyInterval = setInterval(() => {
					if ($("#private-qr img").length === 0) {
						clearInterval(hidePrivateKeyInterval);
						return;
					}
					showPrivateKeySecondsRemaining -= 1;
					if (showPrivateKeySecondsRemaining === 0) {
						reset();
					} else {
						btn.text(hideText(showPrivateKeySecondsRemaining));
					}
				}, 1000);
				let qrCodeEl = $("#private-qr");
				new QRCode(qrCodeEl[0], {
					text: JSON.stringify(JOY.key),
					width: 300,
					height: 300,
					colorDark: "#000000",
					colorLight: "#ffffff",
					correctLevel: QRCode.CorrectLevel.H,
				});
			} else {
				reset();
			}
		});

	// meta.edit({
	// 	place: "settings",
	// 	name: "Logout",
	// 	fake: -1,
	// 	combo: ["L"],
	// 	on: (eve) => {
	// 		JOY.user.leave();
	// 		localStorage.removeItem("key");
	// 		location.reload();
	// 		JOY.key = {};
	// 	},
	// });

	// meta.edit({
	// 	place: "settings",
	// 	name: "Theme",
	// 	fake: -1,
	// 	combo: ["T"],
	// 	on: function () {
	// 		var before = document.documentElement.getAttribute("theme");
	// 		var now = before === "day" ? "night" : "day";
	// 		document.documentElement.setAttribute("theme", now);
	// 		localStorage.setItem("theme", now);
	// 		JOY.tell(
	// 			`${now.charAt(0).toUpperCase() + now.slice(1)} mode enabled.`
	// 		);
	// 		return;
	// 	},
	// });
});

export default Settings;
