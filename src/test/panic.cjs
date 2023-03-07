var config = {
	IP: "localhost",
	port: 8080,
	servers: 1,
	browsers: 1,
	browser: {
		port: 5173,
	},
	route: {
		// "/": __dirname + "../../dist/index.html",
		"/gun.js": __dirname + "/../../gun.js",
		"/jquery.js": __dirname + "/../../examples/jquery.js",
	},
};

/*
	Welcome, person!
	You have found the test that causes gun to PANIC with load!
	Above are options to configure, the only ones useful are:
	 - browsers // number of browsers you want to load test across.
	 - each // the number of messages each browser should sync.
	This test is less than 200 lines of code (without comments)!
	However, if you aren't familiar with PANIC - you are in for a surprise!
	I'm Plublious, and I shall be your guide!
*/

// First we need to create a PANIC server.
// Each device/browser in the distributed system we are testing connects to it.
// It then coordinates these clients to cause chaos in the distributed system.
// Cool huh?
var panic;
try {
	panic = require("panic-server");
} catch (e) {
	console.log(
		"PANIC not installed! `npm install panic-server panic-manager panic-client`"
	);
}

panic
	.server()
	.on("request", function (req, res) {
		// Static server
		config.route[req.url] &&
			require("fs").createReadStream(config.route[req.url]).pipe(res);
	})
	.listen(config.port); // Start panic server.

// In order to tell the clients what to do,
// We need a way to reference all of them.
var clients = panic.clients;

// Some of the clients may be NodeJS servers on different machines.
// PANIC manager is a nifty tool that lets us remotely spawn them.
var manager = require("panic-manager")();
manager.start({
	clients: Array(config.servers)
		.fill()
		.map(function (u, i) {
			// Create a bunch of servers.
			return {
				type: "node",
				port: config.port + (i + 1), // They'll need unique ports to start their servers on, if we run the test on 1 machine.
			};
		}),
	panic: "http://" + config.IP + ":" + config.port, // Auto-connect to our panic server.
});

// Now lets divide our clients into "servers" and "browsers".
var servers = clients.filter("Node.js");
var browsers = clients.excluding(servers);
var alice = browsers.pluck(1);
// Sweet! Now we can start the tests.
// PANIC works with Mocha and other testing libraries!
// So it is easy to use PANIC.
clients.on("add", function () {
	if (this.atLeast(config.browsers + config.servers)) {
		browsers.browser = clients.excluding(servers).pluck(1);
	}
});
describe("Ariob Panic Testing\n========================", function () {
	// We'll have to manually launch the browsers,
	// So lets up the timeout so we have time to do that.
	this.timeout(10 * 60 * 1000);

	it("Servers have joined!", function () {
		// Alright, lets wait until enough gun server peers are connected.
		return servers.atLeast(config.servers);
	});

	it("GUN has spawned!", function () {
		// Once they are, we need to actually spin up the gun server.
		var tests = [],
			i = 0;
		servers.each(function (client) {
			// for each server peer, tell it to run this code:
			tests.push(
				client.run(
					function (test) {
						// NOTE: Despite the fact this LOOKS like we're in a closure...
						// it is not! This code is actually getting run
						// in a DIFFERENT machine or process!
						var env = test.props;
						// As a result, we have to manually pass it scope.
						test.async();
						// Clean up from previous test.
						// try {
						// 	require("fs").unlinkSync(env.i + "data.json");
						// } catch (e) {}
						var server = require("http").createServer(function (
							req,
							res
						) {
							res.end("I am " + env.i + "!");
						});
						// Launch the server and start gun!
						var Gun;
						try {
							Gun = require("gun");
						} catch (e) {
							console.log(
								"GUN not found! You need to link GUN to PANIC. Nesting the `gun` repo inside a `node_modules` parent folder often fixes this."
							);
						}
						// Attach the server to gun.
						var gun = Gun({
							file: env.i + "data",
							web: server,
							localStorage: false,
						});
						server.listen("8765", function () {
							// This server peer is now done with the test!
							// It has successfully launched.
							test.done();
						});
					},
					{ i: (i += 1), config: config }
				)
			);
		});
		// NOW, this is very important:
		// Do not proceed to the next test until
		// every single server (in different machines/processes)
		// have ALL successfully launched.
		return Promise.all(tests);
	});
	it(config.browsers + " browser(s) have joined!", async function () {
		var browser = await require("puppeteer").launch({
			defaultViewport: null,
			headless: true,
		});
		var page = await browser.newPage();
		// page.setViewport({ width: 1200, hieght: 642 });
		page.on("console", (msg) => {
			if (msg.text() === "JSHandle@object") {
				// FIXME: Avoid text comparison
				return;
			}
			console.log(`[${msg.type()}]: ${msg.text()}`);
		});
		await page.addScriptTag({
			url: "http://" + config.IP + ":" + config.port + "/panic.js",
		});

		await page.addScriptTag({
			content:
				"panic.server('" +
				"http://" +
				config.IP +
				":" +
				config.port +
				"'); console.log('333')",
		});
		await page.goto("http://" + config.IP + ":" + config.browser.port);
		// require("../test/open.cjs").web(
		// 	config.browsers,
		// 	"http://" + config.IP + ":" + config.browser.port
		// );
		return browsers.atLeast(1);
	});
	it("Create Alice", function () {
		alice.run(function (test) {
			console.log("I AM ALICE");
			test.async();
			// 	// window.user.create("alice", "xyzabcmnopq", function (ack) {
			// 	// 	if (ack.err || !ack.pub) {
			// 	// 		return;
			// 	// 	}
			// test.done();
			// 	// });
		});
	});
});
// THE END!
// Congrats, wasn't that epic?
// Or still confused how a single 200 LOC test file
// Is running correctness verification tests
// across an entire distributed system of devices/browsers?
// Well, jump on https://gitter.im/amark/gun !

// Think adding tests like this to your work place would be bomb awesome?
// We totally sell PANIC training, licenses, and support!
// Please reach out to hi@gunDB.io if you are interested
// in purchasing consulting or services for PANIC.
