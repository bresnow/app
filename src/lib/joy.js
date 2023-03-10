; (function () {
	function as(el, gun, cb, opt) {
		el = $(el);
		if (gun === as.gui && as.el && as.el.is(el)) { return }

		opt = opt || {};
		opt.match = opt.match || '{{ ';
		opt.end = opt.end || ' }}';
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
					if (tmp = tag.attr('node')) { sup.push(tmp) }
					tag.parents("[node]").each(function () {
						sup.push($(this).attr('node'));
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

		as.gui = gun;
		as.el = el;
		if (el.data('as')) {
			el.html(el.data('as').fresh);
		} else {
			el.data('as', {
				fresh: el.html()
			})
		}
		el.find("[node]").each(function () {
			if ($(this).find("[node]").length) { return }
			var name = $(this),
				parents = name.parents("[node]"),
				path = [],
				ref = gun;

			path.push(name.attr('node'));
			parents.each(function () {
				path.push($(this).attr('node'));
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
				model = name.closest("[node='#']");
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
						ui = ui.find("[node='" + key + "']").first();
						model.has[(gui._).id] = ui;
					}
				}
				ui.data('gun', gui);
				if (ui.data('was') === data) { return }
				if (many && ui.is('.sort')) {
					var up = ui.closest("[node='#']");
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
	as.sort = function sort(num, li) { return parseFloat(num) >= parseFloat($(li).find('.sort').text() || -Infinity) ? li : sort(num, li.prev()) }
	$(document).on('keyup', 'input, textarea, [contenteditable]', as.wait(function () {
		var el = $(this);
		var data = (el[0] && u === el[0].value) ? el.text() : el.val();
		var g = el.data('gun');
		if (!g) { return }
		as.lock = g;
		g.put(data);
	}, 99));
	//$(document).on('submit', 'form', function(e){ e.preventDefault() });
	var u;
	window.as = as;
	$.as = as;
}());

; (function () {
	$(document).on('click', 'a, button', function (e) {
		var tmp = $(this).attr('href') || '';
		if (0 === tmp.indexOf('http')) { return }
		e.preventDefault();
		r(tmp);
	});
	function r(href) {
		if (!href) { return }
		if (href[0] == '#') { href = href.slice(1) }
		var h = href.split('/')[0];
		$('.page').hide();
		$('#' + h).show();
		if (r.on === h) { return }
		location.hash = href;
		(r.page[h] || { on: function () { } }).on();
		r.on = h;
		return r;
	};
	r.page = function (h, cb) {
		r.page[h] = r.page[h] || { on: cb };
		return r;
	}
	r.render = function (id, model, onto, data) {
		var $data = $(
			$('#' + id).get(0) ||
			$('.model').find(model).clone(true).attr('id', id).appendTo(onto)
		);
		$.each(data, function (field, val) {
			if ($.isPlainObject(val)) { return }
			$data.find("[node='" + field + "']").val(val).text(val);
		});
		return $data;
	}
	window.onhashchange = function () {
		window.location.reload(true);
		r(location.hash.slice(1)) };
	$.as && ($.as.route = r);
	if (window.as) {
		as.route = r;
	} else {
		$.route = r;
	}
}());

; $(function () {
	$('.page').not(':first').hide();
	$.as.route(location.hash.slice(1));
	$(JOY.start = JOY.start || function () { $.as(document, gun, null, JOY.opt) });

	// if ($('body').attr('peers')) { (console.warn || console.log)('Warning: Please upgrade <body peers=""> to https://github.com/eraeco/joydb#peers !') }

});

; (function () { // need to isolate into separate module!
	var joy = window.JOY = function () { };
	joy.route = as.route;
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
	joy.head = function (title, hide) {
		$(document).ready(function () {
			var $head = $("header");
			// var $account = $("#account");
			document.title = title;
			place.textContent = title;
			if (hide) {
				if (hide.only) {
					// console.log("hide.only", hide.only);
					account.style.display = "none";
					return;
				}
				$head.addClass("none");
				return;
			}
			account.style.display = "flex";
			$("header").removeClass("none");
		});
	};
	joy.style = function(css, m) {
				var style =  css 
				var tmp = m ? "@media " + m + " {\n\t" : "";
				$.each(style, function (c, r) {
					tmp += c + " {\n";
					$.each(r, function (k, v) {
						tmp += "\t" + camelToKebab(k) + ": " + v + ";\n";
					});
					tmp += "}\n";
				});
				var tag = document.createElement("style");
				tag.innerHTML = m ? tmp + "\n}" : tmp;
				document.documentElement.append(tag);
			}
	joy.css = joy.style	
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
	;
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
				'Warning: Please upgrade <body peers="">'
			);
		}
	});
}());

function templateRender({ tag, attributes, children }) {
	let props = attributes ? Object.entries(attributes).reduce((acc, curr) => {
		let [key, value] = curr;
		let result = acc + ` ${key}="${value}"`
		return result
	}, "") : "";
	let front_tag = `<${tag}${props}>`, back_tag = `</${tag}>`;
	let _children = children?.map(child => {
		return templateRender(child)
	})
	var temp = front_tag + _children + back_tag;
	return temp

}

function camelToKebab(string) {
	return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}