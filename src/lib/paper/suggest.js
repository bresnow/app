import { suggest } from "prosemirror-suggest";
const maxResults = 10;
let selectedIndex = 0;
let friendList = [];
let showSuggestions = false;
const query = async (pub, v, i) => {
	$("#searches").empty();
	if (pub.slice(1) === JOY.key.pub) return;
	friendList = new Set();
	gun.get(pub)
		.get("friends")
		.map()
		.on((f) => {
			if (i) return;
			query(f, v, true);
		});
	var q = v.substring(1);
	var friend = await gun.get(pub).get("profile");
	if (friend?.name.includes(q)) {
		console.log(friend.name);
		return friend.name;
	}
};

const debounce = function (fn, d) {
	let timer;
	return function () {
		let context = this,
			args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, d);
	};
};

const suggestFriends = {
	// By default decorations are used to highlight the currently matched
	// suggestion in the dom.
	// In this example we don't need decorations (in fact they cause problems when the
	// friend string replaces the query text in the dom).
	noDecorations: true,
	char: "@", // The character to match against
	name: "friend-suggestion", // a unique name
	appendText: "", // Text to append to the created match

	// Keybindings are similar to prosemirror keymaps with a few extra niceties.
	// The key identifier can also include modifiers (e.g.) `Cmd-Space: () => false`
	// Return true to prevent any further keyboard handlers from running.
	keyBindings: {
		// ArrowUp: () => {
		// 	selectedIndex = rotateSelectionBackwards(
		// 		selectedIndex,
		// 		friendList.length
		// 	);
		// },
		// ArrowDown: () => {
		// 	selectedIndex = rotateSelectionForwards(
		// 		selectedIndex,
		// 		friendList.length
		// 	);
		// },
		Enter: ({ command }) => {
			if (showSuggestions) {
				command(friendList[selectedIndex]);
			}
		},
		Esc: () => {
			showSuggestions = false;
		},
	},

	onChange: (params) => {
		const q = params.query.full;
		console.log("Query: ", q);
		JOY.user
			.get("friends")
			.map()
			.once(async (d) => {
				var friend = await gun.get(d).get("profile");
				if (friend?.name.toLowerCase().includes(q.toLowerCase())) {
					console.log(friend?.name);

					friendList.append(friend.name);
				}
			});
		console.log(friendList);
		// friendList = sortEmojiMatches({ query, maxResults });
		selectedIndex = 0;
		showSuggestions = true;
	},

	onExit: () => {
		showSuggestions = false;
		friendList = [];
		selectedIndex = 0;
	},

	// Create a  function that is passed into the change, exit and keybinding handlers.
	// This is useful when these handlers are called in a different part of the app.
	createCommand: ({ match, view }) => {
		return (friend, skinVariation) => {
			if (!friend) {
				throw new Error(
					"An friend is required when calling the friend suggesters command"
				);
			}

			const tr = view.state.tr;
			const { from, end: to } = match.range;
			tr.insertText(friend, from, to);
			view.dispatch(tr);
		};
	},
};
export const suggestionPlugin = suggest(suggestFriends);
