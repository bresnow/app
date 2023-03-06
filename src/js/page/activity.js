import header from "../component/header.js";

const activity = `
<div id="activity" class="page hold center">
	<div class="center screen gap hold">
	  <ul id="activities">
	  </ul>
	</div>
</div>
`;

JOY.route.page("activity", function () {
	var notifications = {};
	if (!JOY.key) {
		JOY.route("create");
	}
	// .get("notifications").
	JOY.head("Activity");
	gun.get(`@${JOY.key.pub}`)
		.get("notifications")
		.map()
		.on(async (d, k) => {
			console.log("NOTIFY: ", d);
			if (!d) return;
			if ($(`#${k.substring(0, 5)}`).length > 1) return;
			var notification = d.data;
			var secret = await SEA.secret(d.epub, JOY.key);
			var decrypted = await SEA.decrypt(notification, secret);
			console.log(decrypted);
			// var decrypted = await SEA.decrypt(notification.data, JOY.key.epub);
			// console.log(decrypted);
			// return;
			var soul = k;
			var pub = "~" + decrypted.from;
			var who = await gun.getUsername(pub);
			var when = JOY.since(new Date(decrypted.created));
			console.log(pub);
			JOY.route.render(
				soul.substring(0, 5),
				".notification-ask",
				$("#activities"),
				{
					from: {
						"data-from": pub,
					},
					message: `${who} is requesting to connect with you!`,
					when: when,
				}
			);
		});

	// async function render(n) {
	// 	for (let [soul, notification] of Object.entries(n)) {
	// 		console.log(soul, node);
	// 		if (!node) return;

	// 		console.log("RENDERED");
	// 	}
	// }
	$(".accept").click(function () {
		var from = $(this).parent().attr("data-from");
		var soul = $(this).parent().parent().parent();
		gun.get(`@${JOY.key.pub}`)
			.get("notifications")
			.get(soul.attr("id"))
			.put(null);
		soul.remove();
		JOY.user.get("friends").set(from);
	});
	$(".reject").click(function () {
		// var from = $(this).parent().attr("data-from");
		var soul = $(this).parent().parent().parent();
		gun.get(`@${JOY.key.pub}`)
			.get("notifications")
			.get(soul.attr("id"))
			.put(null);
		soul.remove();
	});
	meta.edit({
		name: "Clear",
		place: "activity",
		combo: ["C"],
	});
});

export default activity;
