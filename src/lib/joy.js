(function () {
	// document.querySelectorAll("a, button").forEach(function (element) {
	// 	let tmp = element.getAttribute("href") || ""
	// 	if (0 === tmp.indexOf("http")) {
	// 		return;
	// 	}
	// 	e.preventDefault();
	// 	r(tmp);
	// })
	$(document).on("click", "a, button", function (e) {
		var tmp = $(this).attr("href") || "";
		if (0 === tmp.indexOf("http")) {
			return;
		}
		e.preventDefault();
		r(tmp);
	});
	function r(href) {
		if (!href) {
			return;
		}
		if (href[0] == "#") {
			href = href.slice(1);
		}
		var h = href.split("/")[0];
		$(".page").hide();

		// $(document).ready(function () {
		let data = window.performance.getEntriesByType("navigation")[0].type;
		if (data === "reload") $("#" + h).show();
		// });

		location.hash = href;

		(r.page[h] || { on: function () { } }).on();
		r.on = h;
		return r;
	}
	r.page = function (h, cb) {
		r.page[h] = r.page[h] || { on: cb };
		return r;
	};
	r.render = function (id, model, onto, data) {
		var $data = $(
			$("#" + id).get(0) ||
			$(".model")
				.find(model)
				.clone(true)
				.attr("id", id)
				.appendTo(onto)
		);
		$.each(data, function (field, val) {
			var $n = $data.find("[name='" + field + "']");
			if ($.isPlainObject(val)) {
				$.each(val, function (k, v) {
					$n.attr(k, v);
				});
				return;
			}
			$n.val(val).text(val);
		});

		return $data;
	};
	window.onhashchange = function () {
		window.location.reload(true);
		r(location.hash.slice(1));
	};
	$.route = r;
})();

(function () {
	// need to isolate into separate module!
	var joy = (window.JOY = function () { });
	joy.route = $.route;
	joy.auth = function (k, cb, o) {
		if (!o) {
			o = cb;
			cb = 0;
		}
		if (o === true) {
			SEA.pair().then((key) => {
				joy.auth(key, cb);
			});
			return;
		}
		joy.key = k;
		joy.user.auth(k, cb, o);
	};
	joy.avatar = function (seed, type) {
		return `https://avatars.dicebear.com/api/${type || "identicon"
			}/${seed}.svg`;
	};
	joy.head = function (title, hide) {
		$(document).ready(function () {
			var $head = $("header");
			var $account = $("#account");
			document.title = title;
			place.textContent = title;
			if (hide) {
				if (hide.only) {
					// console.log("hide.only", hide.only);
					$account.style.display = "none";
					return;
				}
				$head.addClass("none");
				return;
			}
			$account.style.display = "flex";
			$("header").removeClass("none");
		});
	};
	joy.tell = function (what, n) {
		var e = $("#tell").find("p");
		e.addClass("notify").html(what);
		clearTimeout(joy.tell.to);
		joy.tell.to = setTimeout(function () {
			e.removeClass("notify");
		}, n || 2500);
	};
	joy.css = function (css, m) {
		var tmp = m ? "@media " + m + " {\n\t" : "";

		$.each(css, function (c, r) {
			tmp += c + " {\n";
			$.each(r, function (k, v) {
				tmp += "\t" + k + ": " + v + ";\n";
			});
			tmp += "}\n";
		});
		var tag = document.createElement("style");
		tag.innerHTML = m ? tmp + "\n}" : tmp;
		document.documentElement.append(tag);
	};
	joy.style = joy.css;
	joy.download = function (filename, data, type, charset, href) {
		let hiddenElement;
		if (charset === null) {
			charset = "utf-8";
		}
		hiddenElement = document.createElement("a");
		hiddenElement.href =
			href || `data:${type};charset=${charset},${encodeURI(data)}`;
		hiddenElement.target = "_blank";
		hiddenElement.download = filename;
		hiddenElement.click();
	};
	joy.capitalize = function (s) {
		if (s === undefined) {
			return "";
		}
		return s.charAt(0).toUpperCase() + s.slice(1);
	};
	joy.since = function (date) {
		if (typeof date !== "object") {
			date = new Date(date);
		}

		var seconds = Math.floor((new Date() - date) / 1000);
		var intervalType;
		var interval = Math.floor(seconds / 31536000);
		if (interval >= 1) {
			intervalType = "year";
		} else {
			interval = Math.floor(seconds / 2592000);
			if (interval >= 1) {
				intervalType = "month";
			} else {
				interval = Math.floor(seconds / 86400);
				if (interval >= 1) {
					intervalType = "day";
				} else {
					interval = Math.floor(seconds / 3600);
					if (interval >= 1) {
						intervalType = "hour";
					} else {
						interval = Math.floor(seconds / 60);
						if (interval >= 1) {
							intervalType = "minute";
						} else {
							interval = seconds;
							intervalType = "second";
						}
					}
				}
			}
		}

		if (interval > 1 || interval === 0) {
			intervalType += "s";
		}

		return interval + " " + intervalType;
	};
	var opt = (joy.opt = window.CONFIG || { axe: false }),
		peers;
	$("link[type=peer]").each(function () {
		(peers || (peers = [])).push($(this).attr("href"));
	});
	!window.gun &&
		(opt.peers =
			opt.peers ||
			peers ||
			(function () {
				return [
					"https://gun-us.herokuapp.com/gun",
				];
			})());
	window.gun = window.gun || Gun(opt);
	joy.user = gun.user();
})();
// $(function () {
// 	$(".page").not(":first").hide();
// 	JOY.route(location.hash.slice(1));
// 	$(
// 		(JOY.start =
// 			JOY.start ||
// 			function () {
// 				$.as(document, gun, null, JOY.opt);
// 			})
// 	);

// 	if ($("body").attr("peers")) {
// 		(console.warn || console.log)(
// 			'Warning: Please upgrade <body peers="">'
// 		);
// 	}
// });
