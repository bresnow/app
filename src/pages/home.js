import header from "../components/header.js";
import icon from "../components/icon.js";
var user = JOY.user;
var introArea = ` 
<header name="header" class=" pt100 pb50 bg-grad-stellar" style="background: url({{ image }}) 50% 50% no-repeat; border-radius: 25px; background-size: cover;">

                <div class="container mb50 pt50 pb50">

                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="font-source-sans-pro font-size-light color-light animated" >
                                <small class="color-white">All Hail The </small>
                                <span class="fs-75 txt-grad-animation">Floating Mammoth</span>
                            </h1>
                            <h4 class=" mt-25 color-gray animated" data-animation="fadeInUp" data-animation-delay="200">
                                This application is in development.<br/> Shortcut: To edit content, press  <span class="fs-75 txt-grad-animation">C</span> on  your keyboard and edit text content in  <span class="fs-75 txt-grad-animation">markdown</span>.
                            </h4>
                        </div>

                    </div>
                </div>
        </header>`
const home = `
<div id="home" name="~${JOY.key.pub}"class="page hold">
	<div name="home" class="center screen">
	${introArea}
		<div id="drafts" class="flex">
		</div>
	</div>
</div>
`;

JOY.style({
	'.txt-grad-animation': {
		color: '#fff',
		background: '-webkit-linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
		background: '-moz-linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
		background: '-o-linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
		background: 'linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
		backgroundSize: '400% 400%',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		'-webkit-animation': 'txtanimation2 15s ease infinite',
		'-moz-animation': 'txtanimation2 15s ease infinite',
		animation: 'txtanimation2 15s ease infinite',
	}
})
var colors = ["green", "yellow", "red", "blue"];
JOY.route.page("home", function () {
	JOY.user.get('profile').once(d => console.log(d))
	if (!JOY.key) {
		JOY.route("create");
	}
	JOY.head("Home");
	JOY.user.get("home").get("header").put({
		bg: "https://cdn.pixabay.com/photo/2023/02/13/10/30/eye-7787024_1280.jpg"})
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
	console.log(meta);
	
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
