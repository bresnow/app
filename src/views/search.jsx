
const Search = ()=>
	<div id="search" class="section__content">
	<div class=" screen">
	  <form id="search" class="gap">
	    <input class='surface unit max  row' id='query' placeholder='Search !title, @person, #tag...'/>
	  </form>
		<ul class="gap" id="searches">
		</ul>
	</div>
</div>
;

JOY.route.page("search", function () {
	if (!JOY.key) {
		JOY.route("create");
	}
	JOY.head("Search");
	var $search = $("#query");
	$search.focus();
	var $form = $("#search");
	$form.on("keyup", function (e) {
		e.preventDefault();

		// console.log($search.val());
		JOY.user
			.get("friends")
			.map()
			.on(async (d) => {
				debounce(query(d, $search.val()), 300);
			});
	});
	const query = async (pub, v, i) => {
		$("#searches").empty();
		if (pub.slice(1) === JOY.key.pub) return;

		gun.get(pub)
			.get("friends")
			.map()
			.on((f) => {
				if (i) return;
				query(f, v, true);
			});

		var q = v.substring(1);
		if (v.charAt(0) === "@") {
			var friend = await gun.get(pub).get("profile");
			if (q && friend?.name.toLowerCase().includes(q.toLowerCase()))
				JOY.route.render(
					pub.substring(1, 8),
					".persona-friend",
					$("#searches"),
					{
						avatar: {
							src: JOY.avatar(friend?.avatar),
						},
						link: {
							href: `#profile/?pub=${pub}`,
						},
						name: friend?.name,
					}
				);
		}
	};

	const debounce = function (fn, d) {
		let timer;
		return function () {
			let context = this,
				args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(context, args);
			}, d);
		};
	};

	meta.edit({
		name: "Reset",
		place: "search",
		combo: ["R"],
	});
});

export default Search;
