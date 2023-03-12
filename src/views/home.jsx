
var user = JOY.user

const Home = () => {
	return (
			<section class="main">
				<article class="section" data-section>
					<header class="section__header" style="background-image: url('https://source.unsplash.com/random/1000x1000');">
						<h1 class="section__title">%-- section__title --%</h1>
						<p class="section__subtitle">%-- section__subtitle --%</p>
						<div class="section__controls">

							<div class="user">
								<img src="https://source.unsplash.com/200x200/?nature" class="user__img" alt="" />
								<span class="user__name">%-- username --%</span>
							</div>
						</div>
					</header>
					<div class="section__content">
						<ul class="boxgrid">
							<li class="boxgrid__item boxgrid__item--wide">
								<a href="#settings" class="box box--image">
									<img src="https://source.unsplash.com/600x400/?art" class="box__img" alt="" />
								</a>
							</li>
							<li class="boxgrid__item">
								<a href="#settings" class="box box--weather">
									<p><span class="text--large">30°C</span><br />Sunny</p>
								</a>
							</li>
							<li class="boxgrid__item boxgrid__item--push">
								<a href="#settings" class="box box--video">
									<img src="https://source.unsplash.com/300x300/?art" class="box__img" alt="" />
								</a>
							</li>
							<li class="boxgrid__item boxgrid__item--push">
								<a href="#settings" class="box box--image">
									<img src="https://source.unsplash.com/300x300/?people" class="box__img" alt="" />
								</a>
							</li>
							<li class="boxgrid__item boxgrid__item--push">
								<a href="#settings" class="box box--locations">
									<p><span class="text--large">1.366</span><br />Locations</p>
								</a>
							</li>
							<li class="boxgrid__item">
								<a href="#settings" class="box box--cost">
									<p><span class="text--large">150$</span><br />Daily cost</p>
								</a>
							</li>
							<li class="boxgrid__item">
								<a href="#settings" class="box box--image">
									<img src="https://source.unsplash.com/300x300/?technology" class="box__img" alt="" />
								</a>
							</li>
						</ul>
					</div>
				</article>
			</section>

		)
};

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

	if (!JOY.key) {
		JOY.route("create");
	}
	JOY.head("Home");
	JOY.user.get("home").get("header").put({
		image: "https://cdn.pixabay.com/photo/2023/02/13/10/30/eye-7787024_1280.jpg"
	})
	JOY.user
		.get(`test/paper/files`)
		.map()
		.on(async (d, k) => {
			if (!d || !d?.document || !d?.when) return

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
					class: `icon-cover sap ${colors[Math.floor(Math.random() * colors.length)]
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

export default Home;
