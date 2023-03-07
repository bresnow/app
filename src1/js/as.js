(function () {
	function as(el, gun, cb, opt) {
		el = $(el);
		if (gun === as.gui && as.el && as.el.is(el)) {
			return;
		}

		opt = opt || {};
		opt.match = opt.match || "{{ ";
		opt.end = opt.end || " }}";
		(function () {
			// experimental
			function nest(t, s, e, r, i, tmp, u) {
				if (r && !r.length) {
					return t || "";
				}
				if (!t) {
					return [];
				}
				e = e || s;
				i = t.indexOf(s, i || 0);
				if (0 > i) {
					return [];
				}
				tmp = t.indexOf(e, i + 1);
				if (!r) {
					return [t.slice(i + s.length, tmp)].concat(
						nest(t, s, e, r, tmp, tmp, u)
					);
				}
				return (
					t.slice(0, i) +
					r[0] +
					nest(t.slice(tmp + e.length), s, e, r.slice(1), 0, tmp, u)
				);
			}

			/* experimental */
			function template(tag, attr) {
				var html = (tag = $(tag))[0].outerHTML,
					sub,
					tmp;
				if (html && 0 > html.indexOf(opt.match)) {
					return;
				}
				if (!attr) {
					$.each(tag[0].attributes, function (i, v) {
						if (!v) {
							return;
						}
						if (!nest(v.value, opt.match, opt.end).length) {
							return;
						}
						template(tag, v.name);
					});
					if ((sub = tag.children()).length) {
						return sub.each(function () {
							template(this);
						});
					}
				}
				var data = [],
					plate = attr ? tag.attr(attr) : tag.html();
				tmp = nest(plate, opt.match, opt.end);
				if (!tmp.length) {
					return;
				}
				$.each(tmp, function (pos, match) {
					var expr = match.split(" ");
					var path = expr[0].split(".");
					if ((expr = expr.slice(1).join(" "))) {
						expr = new Function("_", "b", "return (_)" + expr);
					}
					var val = (expr && expr("")) || "";
					data.push(val);
					if (!attr) {
						tag.text(val);
					}

					var ref = gun,
						sup = [],
						tmp;
					if ((tmp = tag.attr("name"))) {
						sup.push(tmp);
					}
					tag.parents("[name]").each(function () {
						sup.push($(this).attr("name"));
					});
					$.each(
						(path = sup.reverse().concat(path)),
						function (i, v) {
							ref = ref.get(v);
						}
					);
					ref.on(function (v) {
						v = data[pos] = expr ? expr(v) : v;
						var tmp = nest(plate, opt.match, opt.end, data);
						if (attr) {
							tag.attr(attr, tmp);
						} else {
							tag.text(tmp);
						}
					});
				});
			}
			template(el);
		})();

		as.gui = gun;
		as.el = el;
		if (el.data("as")) {
			el.html(el.data("as").fresh);
		} else {
			el.data("as", {
				fresh: el.html(),
			});
		}
		el.find("[name]").each(function () {
			if ($(this).find("[name]").length) {
				return;
			}
			var name = $(this),
				parents = name.parents("[name]"),
				path = [],
				ref = gun;

			path.push(name.attr("name"));
			parents.each(function () {
				path.push($(this).attr("name"));
			});
			path = path.reverse();

			path.forEach(function (key) {
				if ("#" === key) {
					ref = ref.map();
				} else {
					ref = ref.get(key);
				}
			});

			var many = path.slice().reverse().indexOf("#"),
				model;
			many = 0 < ++many ? many : false;
			if (many) {
				model = name.closest("[name='#']");
				model =
					model.data("model") ||
					model
						.data("model", {
							$: model.clone(),
							on: model.parent(),
							has: {},
						})
						.hide()
						.data("model");
			}

			ref.get(function (at) {
				var data = at.put,
					key = at.get,
					gui = at.gun || at.$,
					ui = name,
					back;
				if (model) {
					ui = model.has[gui._.id];
					if (!ui) {
						back = gui.back(many - 1);
						ui = model.has[back._.id];
						if (!ui) {
							if (!back._.get) {
								return;
							}
							ui = model.has[back._.id] = model.$.clone(
								true
							).prependTo(model.on);
						}
						ui = ui.find("[name='" + key + "']").first();
						model.has[gui._.id] = ui;
					}
				}
				ui.data("gun", gui);
				if (ui.data("was") === data) {
					return;
				}
				if (many && ui.is(".sort")) {
					var up = ui.closest("[name='#']");
					var tmp = as.sort(data, up.parent().children().last());
					tmp ? up.insertAfter(tmp) : up.prependTo(up.parent());
				}
				if (as.lock === gui) {
					return;
				}
				if (!(data && data instanceof Object)) {
					ui[0] && u === ui[0].value ? ui.text(data) : ui.val(data);
				}
				ui.data("was", data);
				if (cb) {
					cb(data, key, ui);
				}
			});
		});
	}
	as.wait = function (cb, wait, to) {
		return function (a, b, c) {
			var me = (as.typing = this);
			clearTimeout(to);
			to = setTimeout(function () {
				cb.call(me, a, b, c);
				as.typing = me = false;
			}, wait || 200);
		};
	};
	as.sort = function sort(num, li) {
		return parseFloat(num) >=
			parseFloat($(li).find(".sort").text() || -Infinity)
			? li
			: sort(num, li.prev());
	};
	$(document).on(
		"keyup",
		"input, textarea, [contenteditable]",
		as.wait(function () {
			var el = $(this);
			var data = el[0] && u === el[0].value ? el.text() : el.val();
			var g = el.data("gun");
			if (!g) {
				return;
			}
			as.lock = g;
			g.put(data);
		}, 99)
	);
	//$(document).on('submit', 'form', function(e){ e.preventDefault() });
	var u;
	window.as = as;
	$.as = as;
})();

$(function () {
	$(".page").not(":first").hide();
	JOY.route(location.hash.slice(1));
	$(
		(JOY.start =
			JOY.start ||
			function () {
				$.as(document, gun, null, JOY.opt);
			})
	);

	if ($("body").attr("peers")) {
		(console.warn || console.log)(
			'Warning: Please upgrade <body peers=""> to https://github.com/eraeco/joydb#peers !'
		);
	}
});
