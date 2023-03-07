import Gun, { SEA } from "gun";

const app = {};
const gun = Gun({ localStorage: false });
var log = console.log.bind(console)

const user = gun.user();
var liveStreams = {};
const saveUser = (key) => {
  localStorage.setItem("profile", JSON.stringify(key));
};

const loadUser = () => {
  const userData = localStorage.getItem("profile") || "";
  if (!userData) return;
  console.log("userdata: ", JSON.parse(userData));
  return JSON.parse(userData);
};

const key = loadUser();
JOY.user.auth(key, ack => log(ack))

var hash = window.location.hash.substring(1);
if (!hash) {
  JOY.route("main");
}
JOY.route.page("main", function () {
  log("main", key);

  if (!key) {
    JOY.route("create");
  }
  JOY.user.auth(key);
  app.script();
});
JOY.route.page("main", function () {
  if (key) {
    JOY.user.auth(key);
    JOY.route("main");
  }
  log("main");
}); 
// checkKey();

const logo = (size) => {
  return `
    <svg
        width=${size}
        viewBox="0 0 1066 466"
        class="center"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g transform="translate(0 -.005) scale(.80928)">
          <clipPath id="a">
            <path d="M0 0h1317.22v575.14H0z" />
          </clipPath>
          <g clipPath="url(#a)">
            <path
              d="M384.55 236.87c38.87-.012 74.852 20.995 93.95 54.85-14.359-44.398-55.973-74.675-102.635-74.675-59.176 0-107.87 48.694-107.87 107.87 0 18.567 4.793 36.823 13.915 52.995a107.946 107.946 0 0 1-5.188-33.06c0-59.172 48.656-107.878 107.828-107.94v-.04ZM710.29 280.94c.108.203.201.414.28.63l-.17-.86a2.424 2.424 0 0 1-.11.23Z"
                fill="#fff"
                fillRule="nonzero"
            />
            <path
              d="M995 356.72c.1-1.81.18-3.64.18-5.49a92.204 92.204 0 0 0-1.57-16.89 90.461 90.461 0 0 0-27.84-49.94 73.814 73.814 0 0 1 14.698 44.198c0 37.606-28.744 69.503-66.148 73.402-.68.09-1.37.15-2.06.19-1 .11-2.11.15-3.18.17-.84 0-1.68.05-2.52.05-.84 0-1.67 0-2.51-.05-.61 0-1.21 0-1.85-.08-30-1.4-61.55-17.31-87.78-40.5-19.77-17.47-36.54-39.07-47.29-61.7-.69-1.43-1.34-2.87-2-4.31l.48-5.19a131.28 131.28 0 0 0-26.31-56.29c-2.16-11.3-9.37-29.55-30.84-54.58.47-.92 1-1.82 1.5-2.69l-.1.71c.019-.062.042-.122.07-.18.14-.37.3-.75.46-1.11.16-.36 0 0 0 0 .26-.67.57-1.35.89-2 .15-.34.31-.67.48-1 .17-.33.26-.55.4-.81l.09-.17c.68-1.31 1.42-2.57 2.19-3.81a.625.625 0 0 1-.11-.12c-.32-.29-.64-.61-1-.93.31.31.64.62 1 .92l.12.12a56.802 56.802 0 0 1 7.12-9.2c5.85-6.14 7.74-14.16 15.84-17.21a56.774 56.774 0 0 1 5-1.65h.14l.54.55c.18.2.35.4.52.61a15.724 15.724 0 0 1 3.59 10.5 15.4 15.4 0 0 1-1 5.11c.37.09.74.19 1.1.3 1.45.41 8.18 4.09 9.55 4.68a.472.472 0 0 1 0 .13l.06.23a12.834 12.834 0 0 1 3.5 2.19l1.59.12c35.46 5.33 42.35 22.42 48.34 57.65.353-3.057.53-6.132.53-9.21 0-39-7-60.86-44.09-67.48-.28-.06-.55-.1-.83-.14l-.63 1c0-.35.05-.71.06-1.07v-.28c.044-1.244.007-2.49-.11-3.73a32.458 32.458 0 0 0-5.73-16 32.942 32.942 0 0 0-9.69-9.23h-.05c-.45-.28-5.17-.56-5.64-.83a34.17 34.17 0 0 0-4.3-2c-.27-.11-.54-.2-.8-.29l-1.31-.24a1.119 1.119 0 0 0-.33-.05h-.11c.07-.54.13-1.09.2-1.63.48-4.15.78-8.39.89-12.69.55-22.66 5-42.2-4.13-57.76C719.14 15.26 687.62.36 657.46 0v.15C627.78.84 596.72 15.64 581.77 41c-9.2 15.59-4.76 35.16-4.21 57.88.107 4.18.39 8.28.85 12.3l.27 2.22c-.26.09-.53.18-.8.29a32.201 32.201 0 0 0-4.56 2.13c-.39.21-.76.44-1.13.67-3.85 2.38-11.4 5.54-13.95 9.23a32.56 32.56 0 0 0-5.73 16 28.852 28.852 0 0 0-.11 3.73v.28l.06 1.07-.63-1c-.28 0-.55.08-.83.14-37.14 6.62-44.09 27.39-44.09 66.41a80.024 80.024 0 0 0 .53 9.22c6-35.24 12.88-51.26 48.34-56.59l1.47-.22a13.002 13.002 0 0 1 3.5-2.19l.06-.23v-.13c1.37-.59 8.1-4.27 9.55-4.68.36-.11.74-.21 1.1-.3a15.4 15.4 0 0 1-1-5.11 15.724 15.724 0 0 1 3.59-10.5c.18-.21.34-.41.52-.61l.54-.55h.15c1.71.47 3.37 1 5 1.65 8.09 3.05 10 11.07 15.83 17.21a56.918 56.918 0 0 1 7.13 9.2l.11-.12-.12.12c.78 1.24 1.51 2.5 2.19 3.81l.09.17c.14.26.28.54.4.81s.33.66.48 1c.32.66.63 1.34.89 2 .16.36.32.74.45 1.11.028.058.051.118.07.18.25.64.5 1.28.73 1.93-22 25.59-29 44.1-31 55.35l-.09.33-.4-.59a131.194 131.194 0 0 0-26.48 56.49l.48 5.19c-.64 1.45-1.28 2.88-2 4.31-10.76 22.63-27.53 44.23-47.3 61.7-26.15 23.29-57.72 39.2-87.72 40.6l-1.85.09h-5.03c-1.07 0-2.12-.07-3.17-.17-.69-.05-1.38-.11-2.06-.19-37.372-3.94-66.07-35.824-66.07-73.403a73.821 73.821 0 0 1 14.68-44.177A90.487 90.487 0 0 0 322.67 335a92.226 92.226 0 0 0-1.58 16.9c.008 47.881 37.939 87.927 85.75 90.53.76 0 1.53.06 2.29.08.76.02 1.74 0 2.62 0h2.38c11.85-.38 24.55-3.67 37.52-9.2 36.34-15.47 74.57-48.56 100.91-84.92A213.542 213.542 0 0 0 576 308v4.45c.19 30 22.14 127.3 34.43 126.92a7.846 7.846 0 0 0 2.92-.7c.341-.139.675-.296 1-.47 0-.34-.13-.9-.28-1.64-19.45-112.79-11.15-140.16-11.15-140.16.15-19.43 14.26-32.94 14.26-32.94a16.338 16.338 0 0 0-1.61-3.43 46.386 46.386 0 0 1-3.72-18.24v-.23c0-7 6.91-13.6 9.69-19.55.57-1.21 1.18-2.4 1.85-3.54.051-.1.107-.197.17-.29 8-13.7 17.55-11.26 34.55-11.43h.82c17 .17 26.5-2.27 34.55 11.43.73 1.24 1.39 2.51 2 3.83 2.78 5.95 9.66 12.57 9.7 19.55v.23a46.392 46.392 0 0 1-3.26 17.12 15.28 15.28 0 0 0-2.39 4.56c-.533 1.644 14.11 13.51 14.26 32.94h-.1s6.55 23 4.49 76c0 0 .31-1.42.78-3.84-.1 1.31-.22 2.6-.36 3.84.33.18.65.34 1 .48.918.424 1.91.665 2.92.71.206.015.414.015.62 0 11.76-.6 17.69-31.6 17.88-61.07v-3.58a216.02 216.02 0 0 0 22.71 38.83c26.34 36.36 64.57 69.45 100.92 84.92 13 5.52 25.66 8.82 37.51 9.2h5.01c.86 0 1.53 0 2.28-.09 38.184-2.093 71.126-28.118 82-64.78a92.116 92.116 0 0 0 4.28-22.15c.514-7.531-.29.63-.73 1.84ZM634.62 144.14a68.456 68.456 0 0 0-41.82-30.69c-17.421-4.344-6.28-18.11 2.86-26.54s25.3-5.62 34.2-14.52c8.9-8.9 41.46-34.52 77.93-8.9 0 0 16.85 11.24 16.77 21.08-.08 9.84 0 28.88 0 28.88s-28.94 12.21-37.93 30.69c0 0-29-5.26-52.01 0Zm79.69 151.8c-.09.15-.16.3-.25.45h-.32l.57-.45Zm5.29 69v1.22c-.01-.41-.01-.82 0-1.22Z"
                fill="#fff"
                fillRule="nonzero"
            />
            <path
              d="M1049.25 324.84c-.03-59.158-48.72-107.818-107.88-107.818-46.672 0-88.294 30.288-102.65 74.698 19.114-33.815 55.071-54.794 93.915-54.794 59.181 0 107.885 48.699 107.885 107.88 0 11.238-1.76 22.408-5.21 33.104a107.4 107.4 0 0 0 13.94-53.07ZM683.7 142.34a.156.156 0 0 0 0-.1h-.09a.775.775 0 0 1 .09.1ZM622.61 263.67s33.62-24.28 68.64 0c0 0-32.33-36.3-68.64 0Z"
                fill="#fff"
                fillRule="nonzero"
            />

          </g>
        </g>
      </svg>`;
};

app.auth = `
      <div id="authForm" class="full">
          <input id="username" placeholder="username" autocomplete="off" type="text" class="unit col rim">
          <button id="register" class="unit col rim">Get Started!</button>
          <span  id="login" class="unit col rim"><a href="#">Already have account</a></span>
      </div>

`;

app.live = `
<div id="live" class="page center pad">
      <select id="select"><option id="from">from</option></select>
      <div id="overlay">
        <img id="img" width="100%" class="unit col sap"><br/>
      </div>
        <video id="video" width="100%" controls autoplay style="display: none;"></video>
        <canvas id="canvas" width="0" style="display: none;"></canvas>
      <div class="gap col center">
        <input id="pass" placeholder="password" type="password"  class="unit col rim">
        <input id="res" value="240" step="32" max="1080" type="number" class="unit col rim" >
			  <button id="logout">Logout</button>
      </div>
</div>
    `;
var introArea = ` 
        <header class="pt100 pb50 bg-grad-stellar" style="background: url(assets/img/bg/new-img-bg-14.jpg) 50% 50% no-repeat; background-size: cover;">

                <div class="container mb50 pt50 pb50">

                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="font-source-sans-pro font-size-light color-light animated" data-animation="fadeInUp" data-animation-delay="100">
                                <small class="color-white">All Hail The </small>
                                <span class="fs-75 txt-grad-animation">Floating Mammoth</span>
                            </h1>
                            <h4 class=" mt-25 color-gray animated" data-animation="fadeInUp" data-animation-delay="200">
                                This application is in development.
                            </h4>
                                <button href="mp-index-new-1.html" class="btn bg-grad-animation-1 btn-lg mt-20 ml-20" target="_blank">View On Github</button>
                        </div>

                    </div>
                </div>

        </header>`

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
  }})
  
app.main = `
  <div id="main" name="~${key.pub}" class="page center">
      <main name="main">
      ${introArea}
            <h1 name="profile">Hello! {{ user }}</h1>
            <p name="lead" class="leading">{{ temp }}</p>
    
<!-- <p name="p.lonely" contenteditable >{{ text }}</p> --!>
      <div id="streams" class="unit gap">
      </div>
      </main>
  </div>

`;
{/* <button id="popoverButton" type="button" class="btn btn-primary btn-lg" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Custom popover</button> */}
app.navBar = `
  <div class="full center mt-2">
    <nav name="navbar" id="navbar">
      <ul id="navbar-nav">
          <li id="nav-item" class="unit row center gap">  
              <a id="logo" href="" >${logo(100)}</a>
          </li>
        <li id="navbar-item">
          <a id="nav-link" href="{{ Link00 }}">
            <ion-icon id="icon-svg" name="home"></ion-icon>
            <span id="link-text">Home</span>
          </a>
        </li>

        <li id="navbar-item">
          <a id="nav-link" href="{{ Link01 }}">
            <ion-icon  id="icon-svg" name="flash"></ion-icon>
            <span id="link-text">Live</span>
          </a>
        </li>

        <li id="navbar-item">
          <a id="nav-link" href=""{{ Link02  }}"">
            <ion-icon id="icon-svg" name="compass"></ion-icon>
            <span id="link-text">Discover</span>
          </a>
        </li>

        <li id="navbar-item">
          <a id="nav-link" href="#">
            <ion-icon  id="icon-svg" name="moon"></ion-icon>
            <span id="link-text">Theme</span>
          </a>
        </li>

        
      </ul>
    </nav>

  </div>

`;
JOY.style(
  {
    "#nav": {
      "z-index": 999,
      height: "100%",
      width: "3em",
      position: "fixed",
      // left: "0",
      top: 0,
    },
    "#nav ul": {
      padding: "1em 0",
      margin: 0,
      // "white-space": "nowrap",
      "list-style": "none",
      display: "flex",
      gap: "2em",
      "justify-content": "space-around",
      "flex-direction": "column",
      "align-items": "center",
      // "flex-wrap": "wrap",
    },
  },
);
JOY.style(
  {
    "#nav": {
      width: "70vw",
      height: "2.5em",
      background: "var(--surface)",
      position: "fixed",
      bottom: 0,
      transition: "bottom 0.5s",
      right: "5em",
      margin: "1em auto",
      "border-radius": "var(--radius)",
    },
    "#nav ul": {
      "white-space": "nowrap",
      height: "100%",
      display: "flex",
      "list-style": "none",
      "align-items": "center",
      "justify-content": "space-around",
      "flex-wrap": "wrap",
      "flex-direction": "row",
    },
  },
  "only screen and (max-width: 600px)"
);
app.authenticate = () => {
  $(document).ready(function () {
    $("#register").click(async function () {
      const username = $("#username").val();
      await register(username);
    });


    async function register(username) {
      if (username.length !== 0) {
        var pair = await SEA.pair();
        user.auth(pair, (cb) => {
          user.get("main").get("profile").put({ user: username })
          JOY.route("main");
          saveUser(pair);
        });
      } else {
        alert("no input provided!!!");
      }
    }
    $("#username").on("keyup", function (e) {
      const username = $("#username").val();
      if (e.which === 13) {
        register(username);
      }
    });
    $("#logout").click(function () {
      user.leave();
      localStorage.removeItem("profile");
      window.location.reload();
    });
  });
};

// live stream
app.script = async () => {
  var stream = canvas.getContext("2d");
  (stream = canvas.getContext("2d")), (stream.from = navigator.mediaDevices);

  (await stream.from.enumerateDevices()).forEach((device, i) => {
    if ("videoinput" !== device.kind) {
      return;
    }
    var opt = $(from).clone().prependTo("select").get(0);
    $(opt).text((opt.id = device.label || "Camera " + i));
    opt.value = device.deviceId;
  });

  $("select").on("change", async (eve) => {
    $(from).text("Off"); // update label
    if ("Off" == select.value) {
      return video.srcObject.getTracks()[0].stop();
    }
    video.srcObject = await stream.from.getUserMedia({
      audio: false,
      video: (select.value && { deviceId: { exact: select.value } }) || {
        facingMode: "environment",
      },
    });
  });
  $("#upload").on("change", async (eve) => {
    log("Check ./upload.html");
  });
  if (!user.is) {
    return;
  }
  // unique id
  var id = await SEA.work(user.is.pub, null, null, { name: "SHA-256" });

  setInterval(async (tmp) => {
    if (!(video.srcObject || "").active) {
      return;
    }
    var size = parseInt(res.value);
    stream.drawImage(
      video,
      0,
      0,
      (canvas.width = size || video.videoWidth * 0.1),
      (canvas.height =
        size * (video.videoHeight / video.videoWidth) ||
        video.videoHeight * 0.1)
    );
    var b64 = canvas.toDataURL("image/jpeg");
    if (pass.value) {
      b64 = await SEA.encrypt(b64, pass.value);
    }
    user.get("test").get("video").get(id).put(b64);
  }, 99);
  ``;

  gun
    .get("#live")
    .map()
    .once(async (data, key) => {
      var pub = key.split("#")[0];

      var username = gun.user(pub).get("profile").get("username");
      if (!(user.is.pub == pub))
        liveStreams[pub] = { name: username, key: data };

      updateLiveStreams(liveStreams);
    });

  if (user.is) {
    var userData = { pub: user.is.pub, stream: id };
    var hash = await SEA.work(id, null, null, { name: "SHA-256" });
    console.log("hash", hash);

    if ($(`#${user.is.pub}`).length) {
      console.log("te", $(`#${pub}`).length);
      return;
    }
    var liveData = gun.get("#live").get(user.is.pub + "#" + hash);
    console.log("liveData: ", liveData);

    if (!liveData) {
      liveData.put(id);
    }
  }
  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  function updateLiveStreams(streams) {
    for (const key in streams) {
      if (!$(`button#${key}`).length) {
        var $b = $("<img>").attr("id", key);

        var users = $("<span>").text(streams[key].name);
        users.css({
          position: "relative",
          top: "2.5rem",
          left: "3rem",
        });
        $b.css({
          width: "15rem",
          height: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem",
          backgroundColor: "var(--blue)",
          borderRadius: "var(--radius)",
          opacity: ".7",
        });

        if ($("#streams").length === streams.length) {
          return;
        }

        $b.on("click", function () {
          // on();
        });
        live(key, streams[key].key, $b);
        $("#streams").append($b);
      }
    }
    var dup = {};
    $("#streams")
      .children()
      .each(function () {
        if (dup.hasOwnProperty(this.id)) {
          $(this).remove();
        } else {
          dup[this.id] = "true";
        }
      });

    console.log("STREAMS: ", streams);
  }
  // $("#overlay").click(off);

  function live(pub, key, el) {
    console.log("el: ", el);

    gun
      .user(pub)
      .get("test")
      .get("video")
      .get(key)
      .on(async (data) => {
        if (pass.value) {
          data = await SEA.decrypt(data, pass.value);
        }
        el.attr("src", data); // Beware: Some browsers memory leak fast src updates.
      });
  }
};

export default app;
