import lz from 'lz-string'
var user = JOY.user

const Home = () => {
	return (

		<div id="home" class="section__content mt-md">
			<ul name="#" class="boxgrid">
				<li class="boxgrid__item boxgrid__item--wide">
					<a href="#settings" class="box box--image">
						<img src="#" class="box__img" alt="" />
						<p contenteditable="true"></p>
					</a>
				</li>
				{/* <li class="boxgrid__item">
					<div id="creator_mode" class="box bg-red box--image">
						<p><span class="text--large">30°C</span><br />Sunny</p>
					</div>
				</li>
				{/* class boxgrid__item--push 
				<li class="boxgrid__item boxgrid__item--wide">
					<a href="#best" class="box box--video">
						<img src="#" class="box__img" alt="" />
					</a>
				</li>
				<li class="boxgrid__item ">
					<a href="#best" class="box box--image">
						<img src="#" class="box__img" alt="" />
					</a>
				</li>
				<li class="boxgrid__item ">
					<a href="#profile" class="box box--image">
						<p><span class="text--large">1.366</span><br />Locations</p>
					</a>
				</li>
				<li class="boxgrid__item">
					<a href="#best" class="box box--image">
						<p><span class="text--large">150$</span><br />Daily cost</p>
					</a>
				</li>
				<li class="boxgrid__item">
					<a href="#best" class="box box--image">
						<img src="" class="box__img" alt="" />
					</a>
	</li>*/}
				<li class="boxgrid__item">
					<a id="logout"class="box box--image bg-red">
						<img src="#" class="box__img" alt="" />
						<p className='mx-auto' > <span className="text--large">LOGOUT</span> </p>
					</a>
				</li>		
			</ul> 
		</div>

	)
};

JOY.style({
	'.txt-grad-animation': {
		color: '#fff',
		background: 'linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
		backgroundSize: '400% 400%',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		'-webkit-animation': 'txtanimation2 15s ease infinite',
		'-moz-animation': 'txtanimation2 15s ease infinite',
		animation: 'txtanimation2 15s ease infinite',
	}
})
var storedKey = localStorage.getItem("key");
var compress = lz.compressToEncodedURIComponent
var colors = ["green", "yellow", "red", "blue"];
JOY.route.page("home", function () {
	if (!JOY.key) {
		JOY.route("create");
	}
document.querySelector("#logout").addEventListener('click', function(e){
	log("LEMONSQUEE")
	JOY.user.leave();
	localStorage.removeItem("key");
	JOY.key = {};
	location.reload()
})
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
export default Home;
