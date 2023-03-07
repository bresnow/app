import { Plugin } from "prosemirror-state";

export const linkPlugin = (opt) => {
	return new Plugin({
		props: {
			handleDOMEvents: {
				mouseover: (_view, event) => {
					if (
						event.target instanceof HTMLAnchorElement &&
						!event.target.className.includes("ProseMirror-widget")
					) {
						event.target.addClass("act");
					}
					return false;
				},
				click: (_view, event) => {
					if (event.target instanceof HTMLAnchorElement) {
						const href =
							event.target.href ||
							(event.target.parentNode instanceof
							HTMLAnchorElement
								? event.target.parentNode.href
								: "");

						const isHashtag = href.startsWith("#");
						if (isHashtag && _view.options.onClickHashtag) {
							event.stopPropagation();
							event.preventDefault();
							opt.options.onClickHashtag(href, event);
							return true;
						}

						if (opt.options.onClickLink) {
							event.stopPropagation();
							event.preventDefault();
							opt.options.onClickLink(href, event);
							return true;
						}
					}

					return false;
				},
			},
		},
	});
};
