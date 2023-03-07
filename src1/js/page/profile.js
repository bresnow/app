const profile = `
<div id="profile" class="page hold center">

	<div class="center pad screen gap leak">
	<div contenteditable id="profile_title">LALALA</div>
		    <img
      class="avatar
    />
		<div class='mine'>
		  <button id="cpk">Copy Key</button>
		</div>
		<div class='their'>
			<button id="conn">Add Friend</button>
      		<button id="share">Share</button>
		</div>
		<div id="profile-view" class="unit row min">
			<h3 class="tab left act">Friends</h3>
			<h3 class="tab left act surfacet">Posts</h3>
		</div>
		<ul id='others'></ul>
		<ul id='posts' class="flex"></ul>
	</div>
</div>
`;
let user = JOY.user
var colors = ["green", "yellow", "red", "blue"];
JOY.route.page("profile", async function (a) {
	if (!JOY.key) {
		JOY.route("create");
	}

	JOY.head("Profile");
	var url = new URLSearchParams(location.hash.split("/")[1]);
	var pub = url.get("pub");
	var tabs = {
		friends: {
			graph: JOY.user.get(pub).get("friends"),
			render: async function (d, k) {
				$("#posts").empty();
				var friend = await JOY.user.get(d).get("profile");
				JOY.route.render(
					d.substring(1, 8),
					".persona-friend",
					$("#others"),
					{
						avatar: {
							src: JOY.avatar(friend.avatar),
						},
						link: {
							href: `#profile/?pub=${d}`,
						},
						name: friend.name,
					}
				);
			},
		},
		posts: {
			graph: JOY.user.get(pub).get("posts"),
			render: async function (d, k) {
				$("#others").empty();
				var paper = await gun.get(pub).get("test/paper/files").get(d);
				JOY.route.render(
					k.substring(1, 4),
					".paper-card-mini",
					$("#posts"),
					{
						"data-paper": {
							"data-paper": k,
						},
						"data-link": {
							"data-link": `#paper/?file=${k}&?pub=${pub.slice(
								1
							)}`,
						},
						link: {
							href: `#paper/?file=${d}&?pub=${pub.slice(1)}`,
						},
						cover: {
							src: paper.cover,
							class: `icon-cover sap ${
								colors[
									Math.floor(Math.random() * colors.length)
								]
							}`,
						},
						name: `${paper.name}`,
						when: when,
					}
				);
				var dup = {};
				$("#posts")
					.children()
					.each(function () {
						if (dup.hasOwnProperty(this.id)) {
							$(this).remove();
						} else {
							dup[this.id] = "true";
						}
					});
			},
		},
	};

	$(".mine").addClass("none");
	$(".their").addClass("none");
	gun.get(pub)
		.get("profile")
		.on(async (p) => {
			JOY.route.render("p", ".persona-main", $("#persona"), {
				username: p.name,
				avatar: {
					src: JOY.avatar(p.avatar),
				},
			});
			JOY.user
				.get("friends")
				.map()
				.on((a) => {
					if (a == pub) {
						$("#conn").addClass("none");
					}
				});
		});
	$("#profile-view .tab").each((i, tab) => {
		$(tab).click(function () {
			$(this).removeClass("surfacet");
			$(this).siblings(".tab").addClass("surfacet");
			var current = tabs[$(tab).text().toLowerCase()];
			render(current.graph, current.render);
		});
		if ($(tab).hasClass("surfacet")) {
			return;
		}
		var current = tabs[$(tab).text().toLowerCase()];
		render(current.graph, current.render);
	});
	function render(graph, cb) {
		if (!graph) return;
		graph.map().on(cb);
	}
	meta.edit({
		place: "profile",
		name: "Share",
		fake: -1,
		combo: ["S"],
		on: async (eve) => {
			navigator.clipboard.writeText(location.href);
			JOY.tell(
				`<strong class="greent">Copied! </strong> your profile link.`
			);
		},
	});
	if (JOY.key && `~${JOY.key.pub}` === pub) {
		$(".mine").removeClass("none");
		meta.edit({
			place: "profile",
			name: "Avatar",
			fake: -1,
			combo: ["A"],
			on: async (eve) => {
				var avatar = await SEA.work(Gun.text.random(16), null, null, {
					name: "SHA-256",
				});
				JOY.user.get("profile").get("avatar").put(avatar);
			},
		});

		var username = $("p[name='username']");
		if (JOY.key && "~" + JOY.key.pub === pub) {
			if (!username.text()) {
				username.text("Double Tap!");
			}
			username.addClass("noselect");
			username.on("dblclick", function () {
				meta.ask(
					"Change username",
					(name) => {
						JOY.user.get("profile").get("name").put(name);
					},
					null,
					true
				);
			});
		}
		$("#cpk").click(() => {
			navigator.clipboard.writeText(JSON.stringify(JOY.key));
		});
		return;
	} else {
		$(".their").removeClass("none");
	}

	$("#conn").click(() => {
		JOY.user.connect(pub);
	});
	$("#share").click(() => {
		navigator.clipboard.writeText(location.href);
	});
});
export default profile;
