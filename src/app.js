import { SEA } from "gun";
import paper from "./pages/paper";
import logo from "./components/logo";
const app = {};
const gun = Gun({ peers: [""] });
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
  JOY.route("main");
}

// checkKey();



app.auth = `
<div id="auth" class="page full center">
      <div id="authForm" class="full">
          <input id="username" placeholder="username" autocomplete="off" type="text" class="unit col rim">
          <button id="register" class="unit col rim">Get Started!</button>
          <span  id="login" class="unit col rim"><a href="#">Already have account</a></span>
      </div>
<div id="auth" class="page full center">
`;
JOY.route.page("auth", () => {
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
});



//////////////==-------------- Home
var hero = `
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
        </header>
`
app.home = `   
<div id="home" class="page full center">
      ${app.auth}
      ${hero}
  </div> `



JOY.route.page("home", function () {
    JOY.user.get('profile').once(d => console.log(d))
    if (!JOY.key) {
      JOY.route("auth");
    }
    JOY.head("Home");

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
  // app.script();/
});
JOY.route.page("home", function () {
  if (key) {
    user.auth(key);
    JOY.route("main");
  }
  console.log("home");
});
// video and stuff
// app.script = async () => {
//   var stream = canvas.getContext("2d");
//   (stream = canvas.getContext("2d")), (stream.from = navigator.mediaDevices);

//   (await stream.from.enumerateDevices()).forEach((device, i) => {
//     if ("videoinput" !== device.kind) {
//       return;
//     }
//     var opt = $(from).clone().prependTo("select").get(0);
//     $(opt).text((opt.id = device.label || "Camera " + i));
//     opt.value = device.deviceId;
//   });

//   $("select").on("change", async (eve) => {
//     $(from).text("Off"); // update label
//     if ("Off" == select.value) {
//       return video.srcObject.getTracks()[0].stop();
//     }
//     video.srcObject = await stream.from.getUserMedia({
//       audio: false,
//       video: (select.value && { deviceId: { exact: select.value } }) || {
//         facingMode: "environment",
//       },
//     });
//   });
//   $("#upload").on("change", async (eve) => {
//     console.log("Check ./upload.html");
//   });
//   if (!user.is) {
//     return;
//   }
//   var id = await SEA.work(user.is.pub, null, null, { name: "SHA-256" });

//   setInterval(async (tmp) => {
//     if (!(video.srcObject || "").active) {
//       return;
//     }
//     var size = parseInt(res.value);
//     stream.drawImage(
//       video,
//       0,
//       0,
//       (canvas.width = size || video.videoWidth * 0.1),
//       (canvas.height =
//         size * (video.videoHeight / video.videoWidth) ||
//         video.videoHeight * 0.1)
//     );
//     var b64 = canvas.toDataURL("image/jpeg");
//     if (pass.value) {
//       b64 = await SEA.encrypt(b64, pass.value);
//     }
//     user.get("test").get("video").get(id).put(b64);
//   }, 99);
//   ``;

//   gun
//     .get("#live")
//     .map()
//     .once(async (data, key) => {
//       var pub = key.split("#")[0];
//       var username = await gun.user(pub).get("profile").get("username");
//       if (!(user.is.pub == pub))
//         liveStreams[pub] = { name: username, key: data };

//       updateLiveStreams(liveStreams);
//     });

//   if (user.is) {
//     console.log("userG: ", user.is);
//     var userData = { pub: user.is.pub, stream: id };
//     var hash = await SEA.work(id, null, null, { name: "SHA-256" });
//     console.log("hash", hash);

//     if ($(`#${user.is.pub}`).length) {
//       console.log("te", $(`#${pub}`).length);
//       return;
//     }
//     var liveData = gun.get("#live").get(user.is.pub + "#" + hash);
//     console.log("liveData: ", await liveData);

//     if (!(await liveData)) {
//       liveData.put(id);
//     }
//   }
//   function updateLiveStreams(streams) {
//     for (const key in streams) {
//       if (!$(`button#${key}`).length) {
//         var $b = $("<button>").attr("id", key).text(streams[key].name);

//         if ($("#streams").length == streams.length) {
//           return;
//         }
//         $b.on("click", function () {
//           console.log("CLICKED: ", key);
//           live(key, streams[key].key);
//         });
//         $("#streams").append($b);
//       }
//     }
//     var dup = {};
//     $("#streams")
//       .children()
//       .each(function () {
//         if (dup.hasOwnProperty(this.id)) {
//           $(this).remove();
//         } else {
//           dup[this.id] = "true";
//         }
//       });

//     console.log("STREAMS: ", streams);
//   }
//   function getLiveStreams() {
//     console.log("livestreams: ", liveStreams);
//     return liveStreams;
//   }

//   function live(pub, key) {
//     gun
//       .user(pub)
//       .get("test")
//       .get("video")
//       .get(key)
//       .on(async (data) => {
//         if (pass.value) {
//           data = await SEA.decrypt(data, pass.value);
//         }
//         console.log("data", data);

//         img.src = data; // Beware: Some browsers memory leak fast src updates.
//       });
//     // gun
//     //   .get("test")
//     //   .get("video")
//     //   .get(key)
//     //   .on(async (data) => {
//     //     if (pass.value) {
//     //       data = await SEA.decrypt(data, pass.value);
//     //     }
//     //     console.log("data", data);

//     //     img.src = data; // Beware: Some browsers memory leak fast src updates.
//     //   });
//   }
// };
// app.template = `
// <select id="select"><option id="from">from</option></select>
//     <div class="center pad">
//       <div id="streams" class="unit max">

//       </div>
//       <img id="img" width="50%" class="unit col sap"><br/>
//       <video id="video" width="100%" controls autoplay style="display: none;"></video>
//       <canvas id="canvas" width="0" style="display: none;"></canvas>
//       <div class="gap col center">
//         <input id="pass" placeholder="password" type="password"  class="unit col rim">
//         <input id="res" value="240" step="32" max="1080" type="number" class="unit col rim" >
// 			  <button id="logout">Logout</button>
//       </div>
//     </div>
//     `;
export default app;
