import header from "../components/header.js";
import icon from "../components/icon.js";
var user = JOY.user;
var introArea = ` 
<header name="header" class=" pt100 pb50 bg-grad-stellar" style="background: url({{ image }}) 50% 50% no-repeat; border-radius: 25px; background-size: cover;">

<div class="container mb50 pt50 pb50">
<div class="col-md-12 text-center">
                    <div class="row">
		<ul class="Words">
  <li class="Words-line">
    <p>&nbsp;</p>
    <p class="color-white">Hail The</p>
  </li>
  <li class="Words-line">
    <p class="fs-75 txt-grad-animation">FLOATING</p>
    <p class="fs-75 txt-grad-animation">FLTNGMMTH</p>
  </li>
  <li class="Words-line">
    <p class="faint__title">All Hail</p>
    <p class="faint__title">The Beast</p>
  </li>
  <li class="Words-line">
  <p class="fs-75 txt-grad-animation">MAMMOTH</p>
  <p class="fs-75 txt-grad-animation"><small>Designed By</small></p>
  </li>
    <li class="Words-line">
    <p class="clear__title" >p</p>
    <p>Bresnow</p>
  </li>

</ul>                   
                        </div>

                    </div>
                </div>
        </header>`

const cards = `
  <div class="example-2 card">
    <div class="wrapper">
      <div class="header">
        <div class="date">
          <span class="day">12</span>
          <span class="month">Aug</span>
          <span class="year">2016</span>
        </div>
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Jane Doe</span>
          <h1 class="title"><a href="#">HashContent Card: Test</a></h1>
          <p class="text">Nearly There</p>
          <a href="#" class="button">Read more</a>
        </div>
      </div>
    </div>
  </div>`
const home = `
<div id="home" class="page hold">
	<div name="home" class="center screen">
	${introArea}
		<div id="drafts" class="flex row">
		${cards}
		</div>
	
	</div>
</div>
`;

JOY.style({
	'.container': {
		backgroundColor: '#5138BE',
		margin: 'auto',
		display: 'flex',
		borderRadius: "var(--radius)"

	},
	'.Words': {
		padding: '80px 0',
		fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
		fontSize: '68px',
		fontWeight: '900',
		letterSpacing: -'2px',
		textTransform: 'uppercase',
		transform: 'translate3d(0, 0, 0)',
		'-webkit-font-smoothing': 'antialiased',
		'-webkit-font-kerning': 'normal',
		'-webkit-text-size-adjust': '100%',
	},
	'.Words-line': {
		height: '50px',
		overflow: 'hidden',
		position: 'relative',
	},
	'.Words-line:nth-child(odd)': {
		transform: 'skew(60deg, -30deg) scaleY(0.66667)',
	},
	'.Words-line:nth-child(even)': {
		transform: 'skew(0deg, -30deg) scaleY(1.33333)',
	},
	'.Words-line:nth-child(1)': {
		left: '29px',
	},
	'.Words-line:nth-child(2)': {
		left: '58px',
	},
	'.Words-line:nth-child(3)': {
		left: '87px',
	},
	'.Words-line:nth-child(4)': {
		left: '116px',
	},
	'.Words-line:nth-child(5)': {
		left: '145px',
	},
	'.Words-line:nth-child(6)': {
		left: '174px',
	},
	'.Words-line:nth-child(7)': {
		left: '203px',
	},
	p: {
		height: '50px',
		lineHeight: '1em',
		padding: '0 10px',
		transition: 'all 0.4s ease-in-out',
		transform: 'translate3d(0, 0, 0)',
		verticalAlign: 'top',
		whiteSpace: 'nowrap',
	},
	"p small": {
		fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',

	},
	'.Words:hover p': {
		transform: 'translate3d(0, -50px, 0)',
	},
	".faint__title": {
		opacity: 0.3
	},
	".clear__title": {
		opacity: 0
	}
})
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
