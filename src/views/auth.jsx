import Logo from "../components/logo.jsx";
import '../style/style.css'
export const NewUser = () => 
{
	return(
		<div class="main">
			<input type="checkbox" id="chk" aria-hidden="true" />

				<div class="signup">
					<form>
						<label for="chk" aria-hidden="true">Sign up</label>
						<input type="text" name="txt" placeholder="User name" required=""/>
							<input type="email" name="email" placeholder="Email" required=""/>
								<input type="password" name="pswd" placeholder="Password" required=""/>
									<button>Sign up</button>
								</form>
							</div>

							<div class="login">
								<form>
									<label for="chk" aria-hidden="true">Login</label>
						<input type="email" name="email" placeholder="Email" required="" />
						<input type="password" name="pswd" placeholder="Password" required="" />
											<button>Login</button>
										</form>
							</div>
							</div>
	)
}

export const AuthUser = ( )=> 
	<section id="auth" class="section__content">
		<article class="section" data-section>
  <div class="center screen gap">
    <div class="unit row gap">
      <a href="#home"><Logo size={100}/></a>
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

