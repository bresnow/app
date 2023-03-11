
const Friends = () => 
<div id="friends" class="page hold center">
	<div class="center screen rim hold">
	  <ul id="friend">
	    
	  </ul>
	</div>
</div>
;

JOY.route.page("friends", function () {
	if (!JOY.key) {
		JOY.route("create");
	}
	JOY.head("Friends");
	JOY.user
		.get("friends")
		.map()
		.on(async (d, k) => {
			console.log(d);
			if (!d) return;
			var friend = await gun.get(d).get("profile");
			console.log(friend);
			JOY.route.render(
				d.substring(1, 8),
				".persona-friend",
				$("#friend"),
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
		});
});

export default Friends;
