import header from "../component/header.js";
import icon from "../component/icon.js";
const home = `
<div id="home" class="page hold">
	<div class="center screen">
		<div id="drafts" class="flex">
		</div>
	</div>
</div>
`;
var user = JOY.user;
var colors = ["green", "yellow", "red", "blue"];
JOY.route.page("home", function () {
	if (!JOY.key) {
		JOY.route("create");
	}
	JOY.head("Home");

	JOY.user
		.get(`test/paper/files`)
		.map()
		.on(async (d, k) => {
			if (!d || !d?.document || !d?.when) return;

			var when = JOY.since(new Date(d.when));
			JOY.route.render(k, ".paper-card", $("#drafts"), {
				"data-paper": {
					"data-paper": k,
				},
				"data-link": {
					"data-link": `#paper/?file=${k}&?pub=${JOY.key.pub}`,
				},
				link: {
					href: `#paper/?file=${k}&?pub=${JOY.key.pub}`,
				},
				cover: {
					src: d.cover,
					class: `icon-cover sap ${
						colors[Math.floor(Math.random() * colors.length)]
					}`,
				},
				name: `${d.name || `Untitled-${k}`}`,
				when: when,
			});
			$(".delete").on("click", function (e) {
				e.preventDefault();
				let p = $(this).attr("data-paper");
				$(this).parent().parent().remove();
				JOY.user.get(`test/paper/files`).get(p).put(null);
				JOY.tell(
					`<strong class="greent">Successfully</strong> Deleted!`
				);
			});
			$(".share").on("click", function (e) {
				e.preventDefault();
				let p = $(this).attr("data-link");
				navigator.clipboard.writeText(location.origin + p);
				JOY.tell(
					`<strong class="greent">Copied!</strong> Share this with others!`
				);
			});
			var dup = {};
			$("#drafts")
				.children()
				.each(function () {
					if (dup.hasOwnProperty(this.id)) {
						$(this).remove();
					} else {
						dup[this.id] = "true";
					}
				});
		});
	// console.log(meta);
	meta.edit({
		name: "Create",
		place: "home",
		combo: ["C"],
		fake: -1,
		on: () => {
			var key = JOY.key;
			if (!key) {
				JOY.tell(
					`<strong class="bluet">Join</strong> to save your data!`
				);
				return;
			}
			var uuid = Gun.text.random(11);
			var url = `#paper/?file=${uuid}&?pub=${JOY.key.pub}`;
			JOY.user
				.get(`test/paper/files`)
				.get(uuid)
				.put({
					name: "Untitled-" + uuid.slice(0, 4),
				})
				.on((d) => {
					JOY.route(url);
				});
		},
	});
});

export default home;
