import { SEA } from "gun";

const app = {};
const gun = Gun({ peers: ["http://localhost:8765/gun"] });
const user = gun.user();
var liveStreams = {};
const saveUser = (key) => {
  localStorage.setItem("profile", JSON.stringify(key));
};

const loadUser = () => {
  const userData = localStorage.getItem("profile") || "";
  if (!userData) return;
  // console.log("userdata: ", JSON.parse(userData));
  return JSON.parse(userData);
};

const key = loadUser();

var hash = window.location.hash.substring(1);
if (!hash) {
  as.route("main");
}
as.route.page("main", function () {
  console.log("main", key);

  if (!key) {
    as.route("home");
  }
  user.auth(key);
  app.script();
});
as.route.page("home", function () {
  if (key) {
    user.auth(key);
    as.route("main");
  }
  console.log("home");
});
// checkKey();

const logo = (size) => {
  return `
  <svg class="unit max" width="${size}em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect  width="48" height="48" rx="17.431" fill="var(--background)"/>
      <path d="M20.3868 13.1076C20.3868 14.8555 18.9699 16.2725 17.222 16.2725C15.4741 16.2725 14.0571 14.8555 14.0571 13.1076C14.0571 11.3597 15.4741 9.9428 17.222 9.9428C18.9699 9.9428 20.3868 11.3597 20.3868 13.1076Z" fill="var(--green)"/>
      <path d="M8.29981 29.9136C7.06552 31.1479 7.06552 33.149 8.29981 34.3833C9.53409 35.6176 11.5353 35.6176 12.7695 34.3833L8.29981 29.9136ZM25.8238 21.329C27.0581 20.0947 27.0581 18.0936 25.8238 16.8593C24.5895 15.625 22.5884 15.625 21.3541 16.8593L25.8238 21.329ZM12.7695 34.3833L25.8238 21.329L21.3541 16.8593L8.29981 29.9136L12.7695 34.3833Z" fill="var(--yellow)"/>
      <path d="M34.6733 36.0574C35.9076 37.2917 37.9088 37.2917 39.1431 36.0574C40.3773 34.8231 40.3773 32.8219 39.1431 31.5876L34.6733 36.0574ZM31.0348 23.4794C29.8005 22.2451 27.7994 22.2451 26.5651 23.4794C25.3308 24.7137 25.3308 26.7148 26.5651 27.9491L31.0348 23.4794ZM39.1431 31.5876L31.0348 23.4794L26.5651 27.9491L34.6733 36.0574L39.1431 31.5876Z" fill="var(--red)"/>
  </svg>
`;
};

app.auth = `
      <div id="authForm" class="full">
          <input id="username" placeholder="username" autocomplete="off" type="text" class="unit col rim">
          <button id="register" class="unit col rim">Get Started!</button>
          <span  id="login" class="unit col rim"><a href="#">Already have account</a></span>
      </div>

`;

app.template = `

<select id="select"><option id="from">from</option></select>
<div class="center pad">
      <div id="streams" class="unit gap">

      </div>
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

app.navBar = `
  <div id="main" class="page full center">
  
    <main>
   
      ${app.template}
    </main>


    <nav id="navbar">
      <ul id="navbar-nav">
          <li id="nav-item" class="unit row center gap">  
              <a id="logo" href="" >${logo(2)}</a>
          </li>
        <li id="nav-item">
          <a id="nav-link" href="#">
            <ion-icon id="icon-svg" name="home"></ion-icon>
            <span id="link-text">Home</span>
          </a>
        </li>

        <li id="nav-item">
          <a id="nav-link" href="#">
            <ion-icon  id="icon-svg" name="flash"></ion-icon>
            <span id="link-text">Live</span>
          </a>
        </li>

        <li id="nav-item">
          <a id="nav-link" href="#">
            <ion-icon id="icon-svg" name="compass"></ion-icon>
            <span id="link-text">Discover</span>
          </a>
        </li>

        <li id="nav-item">
          <a id="nav-link" href="#">
            <ion-icon  id="icon-svg" name="moon"></ion-icon>
            <span id="link-text">Theme</span>
          </a>
        </li>

        
      </ul>
    </nav>

  </div>

`;
app.authLogic = () => {
  $(document).ready(function () {
    $("#register").click(async function () {
      const username = $("#username").val();
      register(username);
    });

    async function register(username) {
      if (username.length !== 0) {
        var pair = await SEA.pair();
        user.auth(pair, (cb) => {
          console.log("authenticated: ", cb);
          user.get("profile").put({
            username: username,
          });
          as.route("main");
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
    console.log("Check ./upload.html");
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

      var username = await gun.user(pub).get("profile").get("username");
      if (!(user.is.pub == pub))
        liveStreams[pub] = { name: username, key: data };

      updateLiveStreams(liveStreams);
    });

  if (user.is) {
    console.log("userG: ", user.is);
    var userData = { pub: user.is.pub, stream: id };
    var hash = await SEA.work(id, null, null, { name: "SHA-256" });
    console.log("hash", hash);

    if ($(`#${user.is.pub}`).length) {
      console.log("te", $(`#${pub}`).length);
      return;
    }
    var liveData = gun.get("#live").get(user.is.pub + "#" + hash);
    console.log("liveData: ", await liveData);

    if (!(await liveData)) {
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
        var $b = $("<img>").attr("id", key); //.text(streams[key].name);
        $b.css({
          width: "15rem",
          height: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
          backgroundColor: "var(--blue)",
          borderRadius: "var(--radius)",
          opacity: ".7",
        });

        if ($("#streams").length == streams.length) {
          return;
        }
        // console.log("img: ", img);

        // console.log("KKK: ", streams[key].key);
        // console.log("k: ", key);

        $b.on("click", function () {
          // on();
        });

        // var rand = Math.random().toString(32).substring(2);

        // // $b.append($("#img"));
        // as.route.render(rand, ".img", $b, {});
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
    console.log("el: ");
    // var i = $(`#${r}`);
    // var newimg = $("#img").clone();
    // el.append($("#img"));
    gun
      .user(pub)
      .get("test")
      .get("video")
      .get(key)
      .on(async (data) => {
        if (pass.value) {
          data = await SEA.decrypt(data, pass.value);
        }
        el.attr("src", data); // = data;
        // console.log("img: ", img);
        console.log("data", i);
        // as.route.render(pub, '.')
        // $("#img").src = data; // Beware: Some browsers memory leak fast src updates.
      });
  }
};

export default app;
