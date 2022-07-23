(function () {
	var noop = function () {},
		u;
	var m = (window.meta = { edit: [] });
	var k = (m.key = {});
	k.meta = { 17: 17, 91: 17, 93: 17, 224: 17 };

	k.down = function (eve) {
		if (eve.repeat) {
			return;
		}
		var key = ((k.eve = m.eve = eve).which =
			eve.which || eve.fake || eve.keyCode);
		if (!eve.fake && key === k.last) {
			return;
		}
		k.last = key;
		if (
			!eve.fake &&
			$(eve.target).closest("input, textarea, [contenteditable=true]")
				.length
		) {
			if (k.meta[key]) {
				k.down.meta = key = -1;
			}
			if (!k.down.meta) {
				return;
			}
		}
		(k.combo || (k.combo = [])).push(key);
		m.check("on", key, k.at || (k.at = m.edit));
		m.check("up");
		if (k.meta[key]) {
			m.list(k.at.back || m.edit);
			if (k.at && !k.at.back) {
				m.flip();
			}
		}
	};
	k.up = function (eve) {
		var tmp;
		var key = ((k.eve = m.eve = eve).which =
			eve.which || eve.fake || eve.keyCode);
		if (
			!eve.fake &&
			$(eve.target).closest("input, textarea, [contenteditable=true]")
				.length
		) {
			if (k.meta[key]) {
				k.down.meta = null;
				key = -1;
			} else if (!k.down.meta) {
				return;
			}
		}
		k.last = null;
		if ($(":focus").closest("#meta").length) {
			return;
		}
		m.check("up", key);
		if (-1 === key || 27 === eve.which) {
			k.wipe();
		}
	};
	m.flip = function (tmp) {
		var board = $("#meta .meta-menu");
		tmp === false || (!tmp && board.is(":visible"))
			? board.addClass("meta-none")
			: board.removeClass("meta-none");
	};
	m.flip.is = function () {
		return $("#meta .meta-menu").is(":visible");
	};
	m.flip.wait = 500;
	m.check = function (how, key, at) {
		at = k.at || m.edit;
		var edit = at[key];
		if (!edit) {
			return;
		}
		var tmp = k.eve || noop;
		if (tmp.preventDefault) {
			tmp.preventDefault();
		}
		if (edit[how]) {
			if (tmp.fake && !edit.fake) {
				console.log("fake");
				m.tap.edit = edit;
				// edit[how](m.eve);
			} else {
				edit[how](m.eve);
				if (k.at !== m.edit && "up" === how) {
					if (k.down.meta) {
						m.list((k.at = m.edit));
					} else {
						k.wipe();
					}
				}
			}
		}
		if ("up" != how) {
			return;
		}
		if (at != edit) {
			edit.back = at;
		}
		m.list(edit, true);
	};
	m.list = function (at, opt) {
		if (!at) {
			return m.flip(false);
		}
		var l = [];
		$.each(at, function (i, k) {
			"back" != i && k.combo && k.name && l.push(k);
		});
		if (!l.length) {
			return;
		}
		k.at = at;
		l = l.sort(function (a, b) {
			a = a.combo.slice(-1)[0] || 0;
			if (a.length) {
				a = a.toUpperCase().charCodeAt(0);
			}
			b = b.combo.slice(-1)[0] || 0;
			if (b.length) {
				b = b.toUpperCase().charCodeAt(0);
			}
			return a < b ? -1 : 1;
		});
		var $ul = $("#meta .meta-menu ul");
		$ul.children("li").addClass("meta-none").hide();
		setTimeout(function () {
			$ul.children(".meta-none").remove();
		}, 250); // necessary fix for weird bug glitch
		$.each(l, function (i, k) {
			var $li = $("<li>").html(k.name);
			$li.get(0).style.setProperty("--meta-key", l.length - i);
			$ul.append($li);
		});
		if (opt) {
			m.flip(true);
		}

		let back = $("<li>")
			.html(
				`
				<div style='display:flex; flex-direction: row; align-items: center; justify-content: flex-end; gap: 0.75em;'>
					<p class='key-none'><kbd>&larr;</kbd></p>
					<i class="fa-solid fa-solid fa-chevron-left"></i>
				</div>
			`
			)
			.one("click", function () {
				m.list((k.at = at.back));
			});
		back.get(0).style.setProperty("--meta-key", 0);
		$ul.append(back);
	};
	m.ask = function (help, cb) {
		var $ul = $("#meta .meta-menu ul").empty();
		var $put = $("<input class='min'>")
			.attr("id", "meta-ask")
			.attr("placeholder", help);
		var $form = $("<form>")
			.append($put)
			.on("submit", function (eve) {
				eve.preventDefault();
				cb($put.val());
				$li.remove();
				k.wipe();
			});
		var $li = $("<li>").append($form);
		$ul.append($li);
		m.flip(true);
		$put.focus();
	};
	k.wipe = function (opt) {
		k.down.meta = false;
		k.combo = [];
		if (!opt) {
			m.flip(false);
		}
		m.list((k.at = m.edit));
	};
	m.tap = function () {
		var on = $(".meta-on")
			.or(
				$(
					$(document.querySelectorAll(":hover")).get().reverse()
				).first()
			)
			.or($(document.elementFromPoint(meta.tap.x, meta.tap.y)));
		return on;
	};

	// $(window).on("blur", k.wipe).on("focus", k.wipe);
	$(document)
		.on("mousedown mousemove mouseup touchstart touchend", function (eve) {
			m.tap.eve = eve;
			m.tap.x = eve.pageX || 0;
			m.tap.y = eve.pageY || 0;
			m.tap.on = $(eve.target);
		})
		.on("mousedown touchend", function (eve) {
			var tmp = m.tap.edit;
			if (!tmp || !tmp.on) {
				return;
			}
			tmp.on(eve);
			m.tap.edit = null;
		});
	$(document).on("click", "#meta .meta-menu li", function (eve) {
		var at = $(eve.target).text();
		if (m.stun) {
			return (m.stun = false);
		}
		if (
			!(eve.fake = eve.which =
				(($(this).text().match(/[A-Z]/) || {})[0] || "")
					.toUpperCase()
					.charCodeAt(0))
		) {
			return;
		}
		// $(".meta-start").text(at).data({ as: at });
		// console.log(at.name);

		// eve.tap = true;
		k.down(eve);
		k.up(eve);
	});
	$(document).on("keydown", k.down).on("keyup", k.up);
	meta.edit = function (edit) {
		var tmp = (edit.combow = []);
		$.each(edit.combo || (edit.combo = []), function (i, k) {
			if (!k || !k.length) {
				if ("number" == typeof k) {
					tmp.push(k);
				}
				return;
			}
			tmp.push(k.toUpperCase().charCodeAt(0));
		});
		var at = meta.edit,
			l = edit.combo.length;
		$.each(tmp, function (i, k) {
			at = at[k] = ++i >= l ? edit : at[k] || {};
		});
		edit.combow = edit.combow.join(",");
		m.list(meta.edit);
	};
	$.fn.or = function (s) {
		return this.length ? this : $(s || "body");
	};
	var m = meta,
		k = m.key;
	//$(window).on('focus', k.wipe.bind(null, false)); // .on('blur', k.wipe.bind(null, false))
	$(document).on("mousedown mousemove mouseup", function (eve) {
		m.tap.eve = eve;
		m.tap.x = eve.pageX || 0;
		m.tap.y = eve.pageY || 0;
		m.tap.on = $(eve.target);
	});
	var [start, end] =
		"ontouchstart" in window
			? ["touchstart", "touchend"]
			: ["mousedown", "mouseup"];
	$(document).on(start, "#meta .meta-menu li", function (eve) {
		var combo = $(this).data().combo;
		eve.fake = eve.which =
			combo && combo.slice(-1)[0].toUpperCase().charCodeAt(0);
		eve.tap = true;
		k.down(eve);
		k.up(eve);
		// $(document).one(end, () => k.up(eve));
		return;
	});
	$(document).on("keydown", k.down).on("keyup", k.up);
	$("#meta").on(start, function (ev) {
		if (ev.target.tagName == "LI" || ev.target.tagName == "UL") return;
		meta.flip();
	});
})();
