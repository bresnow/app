import Logo from "../components/logo.jsx";

export const NewUser = () => 
<section id="create" class="page main ">
		<article class="section" data-section>
  <div class="center screen gap air">
    <div class="unit row gap">
				<a href="#home">{<Logo size={100} />}</a>
    </div>

    <form id="signup">
      <input class='center unit max row' id='alias' placeholder='Who are you?'/>
      <div class='unit row gap'>
        <input class="act primary" type="submit" value="Get Started" />
      </div>  
    </form>

    <div class='unit row gap'>
      <a href='#auth' class='act surface'>Already have an account</a>
    </div>

  </div>
  </article>
</section>;

export const AuthUser = ( )=> 
<section id="auth" class="page main">
		<article class="section" data-section>
  <div class="center screen gap">
    <div class="unit row gap">
      <a href="#home">{<Logo size={100}/>}</a>
    </div>
      
    <form id="signin">
      <input class='center unit max row' id='key' placeholder='Paste your key.'/>
      <div class='unit row gap'>
        <input class="act primary" type="submit" value="Login" />
      </div>
    </form>

    <div class='unit row gap'>
      <a href='#create' class='rim act surface'>Create an account</a>
    </div>

    <a href='#forgot' class='rim act'>Lost my keys</a>
  </div>
  </article>
</section>
;



JOY.route.page("auth", function () {
	if (JOY.key) {
		JOY.route("home");
	}
	JOY.head("Access", true);
	var key = $("#key");
	key.focus();
	var $form = $("#signin");
	$form.submit(function (e) {
		e.preventDefault();
		JOY.auth(JSON.parse(key.val()), (ack) => {
			if (!ack.err) {
				// history.back();
				JOY.route("home");
			} else {
				JOY.tell(ack.err);
			}
		});
	});
});

JOY.route.page("create", function () {
	if (JOY.key) {
		JOY.route("home");
	}
	JOY.head("Join", true);
	var name = $("#alias");
	name.focus();
	var $form = $("#signup");
	$form.submit(async function (e) {
		e.preventDefault();

		JOY.auth(
			null,
			async (ack) => {
				var avatar = await SEA.work(JOY.key.pub, null, null, {
					name: "SHA-256",
				});
				console.log(avatar, "AVATAR");
				console.log(name.val());
				JOY.user.get("epub").put(JOY.key.epub);
				JOY.user.get("profile").get("name").put(name.val());
				JOY.user.get("profile").get("avatar").put(avatar);
				// history.back();
				JOY.route("home");
			},
			true
		);
	});
});

