import "gun/gun.js";
import "gun/sea.js";
import "gun/lib/path.js";
import "gun/lib/webrtc.js";
import "gun/lib/radix.js";
import "gun/lib/radisk.js";
import "gun/lib/store.js";
import "gun/lib/rindexed.js";
import "gun/lib/then.js";
import "gun/lib/later.js";
import "gun/lib/load.js";
import "gun/lib/open.js";
import "gun/lib/not.js";
import "gun/lib/axe.js";
// import "gun/lib/meta.js";
import "../chain";
; (function () {
	function as(cb, opt) {

		var el = $(document);
		if (!el.length) { return }

		opt = opt || {};
		opt.reload = opt.reload || false;
		opt.match = opt.match || '%-- ';
		opt.end = opt.end || ' --%';
		; (function () { // experimental
			function nest(t, s, e, r, i, tmp, u) {
				if (r && !r.length) { return t || '' }
				if (!t) { return [] }
				e = e || s;
				i = t.indexOf(s, i || 0);
				if (0 > i) { return [] }
				tmp = t.indexOf(e, i + 1);
				if (!r) { return [t.slice(i + s.length, tmp)].concat(nest(t, s, e, r, tmp, tmp, u)) }
				return t.slice(0, i) + r[0] + nest(t.slice(tmp + e.length), s, e, r.slice(1), 0, tmp, u);
			}

			/* experimental */
			function template(tag, attr) {
				var html = (tag = $(tag))[0].outerHTML, sub, tmp;
				if (html && (0 > html.indexOf(opt.match))) { return }
				if (!attr) {
					$.each(tag[0].attributes, function (i, v) {
						if (!v) { return }
						if (!nest(v.value, opt.match, opt.end).length) { return }
						template(tag, v.name)
					});
					if ((sub = tag.children()).length) {
						return sub.each(function () { template(this) });
					}
				}
				var data = [], plate = attr ? tag.attr(attr) : tag.html();
				tmp = nest(plate, opt.match, opt.end);
				if (!tmp.length) { return }
				$.each(tmp, function (pos, match) {
					var expr = match.split(' ');
					var path = (expr[0]).split('.');
					if (expr = expr.slice(1).join(' ')) {
						expr = new Function("_", "b", "return (_)" + expr);
					}
					var val = (expr && expr('')) || '';
					data.push(val);
					if (!attr) { tag.text(val) }

					var ref = gun, sup = [], tmp;
					if (tmp = tag.attr('name')) { sup.push(tmp) }
					tag.parents("[name]").each(function () {
						sup.push($(this).attr('name'));
					});
					$.each(path = sup.reverse().concat(path), function (i, v) {
						ref = ref.get(v);
					});
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

		}());

		as.ui = gun;
		as.el = el || $(el);
		if (el.data('as')) {
			el.html(el.data('as'));
		} else {
			el.data('as', el.html())
		}
		el.find("[name]").each(function () {
			if ($(this).find("[name]").length) { return }
			var name = $(this),
				parents = name.parents("[name]"),
				path = [],
				ref = gun;

			path.push(name.attr('name'));
			parents.each(function () {
				path.push($(this).attr('name'));
			});
			path = path.reverse();

			path.forEach(function (key) {
				if ('#' === key) {
					ref = ref.map()
				} else {
					ref = ref.get(key);
				}
			});

			var many = path.slice().reverse().indexOf('#'), model;
			many = (0 < ++many) ? many : false;
			if (many) {
				model = name.closest("[name='#']");
				model = model.data('model') || model.data('model', { $: model.clone(), on: model.parent(), has: {} }).hide().data('model');
			}

			ref.get(function (at) {
				var data = at.put, key = at.get, gui = at.gun || at.$, ui = name, back;
				if (model) {
					ui = model.has[(gui._).id];
					if (!ui) {
						back = gui.back(many - 1);
						ui = model.has[(back._).id];
						if (!ui) {
							if (!(back._).get) { return }
							ui = (model.has[(back._).id] = model.$.clone(true).prependTo(model.on));
						}
						ui = ui.find("[name=" + key + "]").first();
						model.has[(gui._).id] = ui;
					}
				}
				ui.data('gun', gui);
				if (ui.data('was') === data) { return }
				if (many && ui.is('.sort')) {
					var up = ui.closest("[name='#']");
					var tmp = as.sort(data, up.parent().children().last());
					tmp ? up.insertAfter(tmp) : up.prependTo(up.parent());
				}
				if (as.lock === gui) { return }
				if (!(data && data instanceof Object)) {
					(ui[0] && u === ui[0].value) ? ui.text(data) : ui.val(data);
				}
				ui.data('was', data);
				if (cb) {
					cb(data, key, ui);
				}
			});
		});
	}
	as.wait = function (cb, wait, to) {
		return function (a, b, c) {
			var me = as.typing = this;
			clearTimeout(to);
			to = setTimeout(function () {
				cb.call(me, a, b, c);
				as.typing = me = false;
			}, wait || 200);
		}
	}
	// TODO:  Delete
	as.escape = function (str) {
		return opt.match + str + opt.end;
	}
	as.sort = function sort(num, li) { return parseFloat(num) >= parseFloat($(li).find('.sort').text() || -Infinity) ? li : sort(num, li.prev()) }
	//CHECKIT
	$(document).on('keyup', 'input, textarea, [contenteditable="true"]', function (i, elem) {
		var el = $(this);
		var data = (el[0] && u === el[0].value) ? el.text() : el.val();
		var g = el.data('gun');
		if (!g) { return }
		as.lock = g;
		g.put(data);
	});
	// forms do as i say
	$(document).on('submit', 'form', function (e) { e.preventDefault() });
	var u;
	window.as = as;
	$.as = as;
}());

; (function () {
	/**
	 * Links from a and button tags disabled unless external href
	 * 
	 * TODO: Page routing with hash routing
	 */
	let cliq = [document.querySelectorAll('a'), document.querySelectorAll('button')];//, document.querySelectorAll('button')
	cliq.forEach(function (ls) {
		ls.forEach(function (tag) {
			tag.addEventListener('click', function (ev) {
				if (tag.href.startsWith('http')) return
				ev.preventDefault()
				router(tag.href)
			})
		});
	});

	function router(href) {
		if (!href) { return }
		if (href[0] == '#') { href = href.slice(1) }
		var h = href.split('/')[0];
		$('.section__').hide();
		if (router.on === h) { return }
		location.hash = href;
		$('#' + h).fadeIn();
		(router.page[h] || { on: function () { } }).on();
		router.on = h;
		return router;
	};
	router.page = function (h, cb) {
		ready(function () {
			// TODO: Do i need it to be case sensitive?
			h = h.toLowerCase()
			router.page[h] = router.page[h] || { on: cb };
		})
		return router;
	}
	router.model = function (id, model, onto, data) {
		var $data = $(
			$('#' + id).get(0) ||
			$('.model').find(model).clone(true).attr('id', id).appendTo(onto)
		);
		$.each(data, function (field, val) {
			if ($.isPlainObject(val)) { return }
			$data.find("[name='" + field + "']").val(val).text(val);
		});
		return $data;
	}
	window.onhashchange = function () {
		$('.section__').fadeOut().remove();
		window.location.reload(true)
		router(location.hash.slice(1))
	};
	$.as && ($.as.route = router);
	if (window.as) {
		as.route = router;
	} else {
		$.route = router;
	}
}());
$(function () {
	$(JOY.start = JOY.start || function () { $.as((a, b, c) => { console.log(a, b, c, "ABC") }) });
});

; (function () {

	var joy = window.JOY = () => { };
	/**
	 * Hash router that changes views/partials
	 */
	joy.route = as.route || $.route;
	/**
	 * adds the template's excape characters
	 */
	joy.escape = as.escape || $.escape;
	/**
	 * Auth
	 */
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

	joy.style = function (css) {
		var style = css
		var tmp = "";
		$.each(style, function (c, r) {
			tmp += c + " {\n";
			$.each(r, function (k, v) {
				tmp += "\t" + camelToKebab(k) + ": " + v + ";\n";
			});
			tmp += "}\n";
		});
		var tag = document.createElement("style");
		tag.innerHTML = tmp;
		document.documentElement.append(tag);
	}
	joy.css = joy.style
	joy.router = joy.route

	// TODO: Remove  and add to chain
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


	// Renders jsx to index.html. 
	joy.render = jsxRender;

	var opt = (joy.opt = window.CONFIG || { localStorage: false }),
		peers;
	$("link[type=peer]").each(function () {
		(peers || (peers = [])).push($(this).attr("href"));
	});
	!window.gun &&
		(opt.peers =
			opt.peers ||
			peers);
	window.gun = window.gun || Gun(opt);
	joy.user = gun.user();
	joy.get = gun.get;
	window.joy = joy;

	window.log = console.log.bind(console)
}());
$(function () {
	$(".section__").not(":first").fadeOut();
	JOY.route(location.hash.slice(1));
	$(
		JOY.start =
		JOY.start ||
		function () {
			$.as();
		}
	);
});
;

function camelToKebab(string) {
	return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
function jsxRender(jsx, id = null) {
	id ? document.getElementById(id).innerHTML = (
		jsx
	) : document.body.innerHTML = (jsx)
}
function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
