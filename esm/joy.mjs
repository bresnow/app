import Gun from "gun";
import "gun/sea.js";
import "gun/lib/path.js";
import "gun/sea.js";
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
import "../src/lib/chain.js"


const gun = window.Gun({peers: ['http://0.0.0.0:3000']}) || Gun({peers: ['http://0.0.0.0:3000']})
const JOY = {}
 function init(callback, opt) {
		var el =  $(document);
		opt = opt || {};
		opt.reload = opt.reload || false;
		opt.match = opt.match || '%-- ';
		opt.end = opt.end || ' --%';
	

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
JOY.init = init
		init.ui = gun;
		init.el = el;
		if (el.data('as')) {
			el.html(el.data('as').fresh);
		} else {
			el.data('as', {
				fresh: el.html()
			})
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
				console.log(at , "ATT")
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
						ui = ui.find("[name='" + key + "']").first();
						model.has[(gui._).id] = ui;
					}
				}
				ui.data('gun', gui);
				if (ui.data('was') === data) { return }
				if (many && ui.is('.sort')) {
					var up = ui.closest("[name='#']");
					var tmp = init.sort(data, up.parent().children().last());
					tmp ? up.insertAfter(tmp) : up.prependTo(up.parent());
				}
				if (init.lock === gui) { return }
				if (!(data && data instanceof Object)) {
					(ui[0] && u === ui[0].value) ? ui.text(data) : ui.val(data);
				}
				ui.data('was', data);
				if (callback) {
					callback(data, key, ui);
				}
			});
		});
	}
	init.wait = function (cb, wait, to) {
		return function (a, b, c) {
			var me = init.typing = this;
			clearTimeout(to);
			to = setTimeout(function () {
				cb.call(me, a, b, c);
				init.typing = me = false;
			}, wait || 200);
		}
	}
	init.sort = function sort(num, li) { return parseFloat(num) >= parseFloat($(li).find('.sort').text() || -Infinity) ? li : sort(num, li.prev()) }
	let editable = [document.querySelectorAll('input'), document.querySelectorAll('textarea'), document.querySelectorAll('[contenteditable]')];
	// editable.forEach(function (elm) {
	// 	elm.forEach(function (tag) {
	// 		let data
	// 		if (tag.hasAttribute('value')){
	// 			data = tag.getAttribute('value')
	// 		}
	// 		tag.addEventListener("")
	// 	})
	// })
	
	$(document).on('keyup', 'input, textarea, [contenteditable]', function (i,elem) {
		var el = $(this);
		var data = (el[0] && u === el[0].value) ? el.text() : el.val();
		var g = el.data('gun');
		if (!g) { return }
		init.lock = g;
		g.put(data);
	});
	//$(document).on('submit', 'form', function(e){ e.preventDefault() });
	var u;
	window.as = init;
	$.as = init;


	let cliq = [document.querySelectorAll('a')];//, document.querySelectorAll('button')
	cliq.forEach(function (ls) {
		ls.forEach(function (tag) {
			tag.addEventListener('click', function (ev) {
				if (tag.href.startsWith('http')) return
				ev.preventDefault()
				router(tag.href)
			})
		});
	});

	export function router(href) {
		if (!href) { return }
		if (href[0] == '#') { href = href.slice(1) }
		var h = href.split('/')[0];
		$('.section__content').hide();
		if (router.on === h) { return }
		location.hash = href;
		$('#' + h).fadeIn();
		(router.page[h] || { on: function () { } }).on();
		router.on = h;
		return router;
	};
	router.page = function (h, cb) {
		h = h.toLowerCase()
		router.page[h] = router.page[h] || { on: cb };
		return router;
	}
	router.render = function (id, model, onto, data) {
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
		$('.section__content').fadeOut();
		window.location.reload(true)
		router(location.hash.slice(1))
	};
	$.as && ($.as.route = router);
	if (window.as) {
		init.route = router;
	} else {
		$.route = router;
};



	JOY.route = init.route;
	JOY.auth = function (k, cb, o) {
		if (!o) {
			o = cb;
			cb = 0;
		}
		if (o === true) {
			SEA.pair().then((key) => {
				JOY.auth(key, cb);
			});
			return;
		}
		JOY.key = k;
		JOY.user.auth(k, cb, o);
	};
	JOY.head = function (title, hide) {
		$(document).ready(function () {
			var $head = $("header");
			document.title = title;
			// $head.textContent = title;
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
	JOY.style = function (css, m) {
		var style = css
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
	JOY.css = JOY.style

	// TODO: Remove  and add to chain
	JOY.download = function (filename, data, type, charset, href) {
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


	// TODO: Remove 


	// TODO: Remove Since
	JOY.since = function (date) {
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

	// Renders jsx to index.html. 
	JOY.jsxRender = jsxRender;



	var opt = (JOY.opt = window.CONFIG || { localStorage: false, radisk: true }),
		peers = ['http://0.0.0.0:3000/gun'], relay = `${location.origin}/gun`
	// console.log(relay)
	$("link[type=peer]").each(function () {
		peers.push($(this).attr("href"));

	});  

	peers.push(relay);

	JOY.user = gun.user();
	;

		$(".section__content").not(":first").fadeOut();
		JOY.route(location.hash.slice(1));
		
	

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


function camelToKebab(string) {
	return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
function jsxRender(jsx, id = "app") {
	document.getElementById(id).innerHTML = (
		jsx
	)
}

export default JOY;