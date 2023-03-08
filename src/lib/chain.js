// Gun.chain.useCertificate = async function (pub, certPath, path, cb) {
// 	const user = this;
// 	const gun = user.back(-1);
// 	const notifyCert = await user.getCertificate(pub, certPath);

// 	const inbox = gun.user(pub).get(path);
// 	cb({ cert: notifyCert, inbox });
// };
Gun.chain.generateCert = async function (who, where, path) {
	var user = this;
	var gun = user.back(-1);
	var pair = user._.sea;

	var certExists =
		who === "*" ? await user.get(path) : await user.get(path).get(who);
	console.log("Certificate exists!!", certExists);
	if (certExists) return;
	let certificate = await SEA.certify(who, where, pair);
	if (who !== "*") {
		console.log("USER??", user);
		user &&
			user
				.get(path)
				.get(who)
				.put(certificate)
				.once((data) => {
					if (data) {
						console.log("Friend Certificate created for: ", who);
					}
					console.log("Friend Certificate: ", certificate);
					return;
				});
		return;
	}
	user.get(path).put(certificate, ({ ok }) => {
		if (ok) console.log("Public Request Certificate created");
	});
};

Gun.chain.notify = function (pub, message) {
	var gun = this;
	gun.user(pub)
		.get("certificates/notifications")
		.once((cert) => {
			if (cert)
				gun.user(pub)
					.get("notify")
					.get("enabled")
					.put(
						message,
						({ ok, err }) => {
							if (ok) {
								console.log("Notified");
							} else {
								console.log("Notify not successful");
							}
						},
						{ opt: { cert } }
					);
		});
};

/**
 *
 * @param {string} pub
 * @param {object} message
 */
Gun.chain.sendNotification = async function (pub, message) {
	var user = this;
	var gun = user.back(-1);

	gun.get(pub)
		.get("certificates/notifications")
		.once((cert) => {
			if (cert)
				gun.get(pub)
					.get("notifications")
					.set(
						message,
						({ ok, err }) => {
							if (ok) console.log("Notification sent to: ", pub);
							if (err)
								console.log("Notification failed to: ", pub);
						},
						{
							opt: {
								cert,
							},
						}
					);
		});
};
Gun.chain.acceptConnection = async function (pub) {
	var user = this;
	var gun = user.back(-1);
	user.generateCert(pub, { "*": "friends" }, "certificates/friends");
	console.log("Accepting connection");
	gun.get(pub)
		.get("certificates/friends")
		.get(user.is.pub)
		.on(async (cert) => {
			console.log("Friend Cert: ", cert);
			if (cert) {
				if (!(await gun.get(pub).get("friends").get(user.is.pub))) {
					gun.get(pub)
						.get("friends")
						.set(
							user.is.pub,
							({ ok }) => {
								console.log("Adding my pub to friend's graph");
								if (ok) user.get("friends").set(pub);
								console.log(
									"Done setting my friend's pub to mine"
								);
							},
							{ opt: { cert } }
						);
				}
			}
		});
};

Gun.chain.getUsername = async function (pub) {
	var user = this;
	var gun = user.back(-1);
	return gun.get(pub).get("profile").get("name");
};
Gun.chain.connect = async function (pub) {
	var user = this;
	var gun = user.back();
	var epub = await gun.get(pub).get("epub");
	var pair = await SEA.pair();
	var payload = {
		from: user.is.pub,
		created: Date.now(),
		payload: "friend-request",
	};
	var secret = await SEA.secret(epub, pair);
	var encrypted = await SEA.encrypt(payload, secret);
	// console.log(pub.slice(1));
	gun.get(`@${pub.substring(1)}`)
		.get("notifications")
		.set({ data: encrypted, epub: pair.epub });

	user.get("friends").set(pub);
	// return this;
	// var throwaway = gun.user();
	// throwaway.auth(pair);
};
Gun.chain.ack = function (pub) {
	const user = this;
	user.get("friends").set(pub);
	return this;
};
Gun.chain.rej = function (pub) {
	const user = this;
	const gun = user.back(-1);
};

Gun.chain.upload = function (b64, opt, cb) {
	const gun = this;
	var length = b64.length;
	opt = opt || { size: 1024 * 1024 };
	// info.id = Gun.text.random();
	splitAndUpload(b64, 0);

	async function splitAndUpload(b64, chunks) {
		chunks = chunks || 0;
		var b64String = b64.slice(0, opt.size);

		if (b64.length) {
			gun &&
				gun.get(chunks).put(b64String, ({ ok, err }) => {
					if (ok) {
						chunks++;
						splitAndUpload(b64.slice(opt.size), chunks);
					} else {
						splitAndUpload(b64, chunks);
					}
				});
			cb((1 - b64.length / length) * 100);
		} else {
			cb(100);
			return this;
		}
	}
};

Gun.chain.download = async function (proof, size, cb) {
	const gun = this;

	async function loop(i, chunks) {
		i = i || 0;
		chunks = chunks || [];
		let currentProof = await SEA.work(chunks.join(""), null, null, {
			name: "SHA-256",
		});
		if (proof === currentProof) {
			cb(100, chunks.join(""));
			return;
		}
		chunks[i] = await gun.get(i);
		if (chunks[i]) {
			cb((chunks.join("").length / size) * 100, null);
			loop(i + 1, chunks);
		}
	}
	loop();
	return this;
};
