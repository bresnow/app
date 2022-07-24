const app = {};

app.template = `<select id="select"><option id="from">from</option></select>
    <div class="center pad">
      <img id="img" width="100%" class="sap"><br/>
      <video id="video" width="100%" controls autoplay style="display: none;"></video>
      <canvas id="canvas" width="0" style="display: none;"></canvas>
      <div class="gap ">
        <input id="pass" placeholder="password" type="password" class="unit col">
        <input id="res" value="240" step="32" max="1080" type="number" class="unit col rim" >
        <button>Go</button>
      </div>
    </div>`;

app.script = async () => {
	var gun = Gun("http://localhost:8765/gun");
	var stream = canvas.getContext("2d");
	stream.from = navigator.mediaDevices;

	(await stream.from.enumerateDevices()).forEach((device, i) => {
		if ("videoinput" !== device.kind) {
			return;
		}
		var opt = $(from).clone().prependTo("select").get(0);
		$(opt).text((opt.id = device.label || "Camera " + i));
		opt.value = device.deviceId;
		console.log(opt.value);
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
		gun.get("test").get("video").put(b64);
	}, 99);

	gun.get("test")
		.get("video")
		.on(async (data) => {
			if (pass.value) {
				data = await SEA.decrypt(data, pass.value);
			}
			img.src = data; // Beware: Some browsers memory leak fast src updates.
		});
	console.log(stream);
};

export default app;
