import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { Schema } from "prosemirror-model";
import { addListNodes } from "prosemirror-schema-list";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { buildInputRules } from "./inputrules";
import { buildKeymap } from "./keymap";
import { mathPlugin, mathSerializer } from "@benrbray/prosemirror-math";
import { history } from "prosemirror-history";
import { schema } from "./schema";

const historyPlugin = history();
var todoItemSpec = {
	attrs: {
		done: { default: false },
	},
	content: "paragraph block*",
	toDOM(node) {
		const { done } = node.attrs;

		return [
			"li",
			{
				"data-type": "todo_item",
				"data-done": done.toString(),
			},
			[
				"span",
				{
					class: "todo-checkbox todo-checkbox-unchecked",
					contenteditable: "false",
				},
			],
			[
				"span",
				{
					class: "todo-checkbox todo-checkbox-checked",
					contenteditable: "false",
				},
			],
			["div", { class: "todo-content" }, 0],
		];
	},
	parseDOM: [
		{
			tag: '[data-type="todo_item"]',
			getAttrs(dom) {
				return {
					done: dom.getAttribute("data-done") === "true",
				};
			},
		},
	],
};
var todoListSpec = {
	group: "block",
	content: "todo_item+ | list_item+",
	toDOM() {
		return [
			"ul",
			{
				"data-type": "todo_list",
			},
			0,
		];
	},
	parseDOM: [
		{
			priority: 51,
			tag: '[data-type="todo_list"]',
		},
	],
};
var pSchema = new Schema({
	nodes: addListNodes(schema.spec.nodes, "paragraph* block+", "block").append(
		{
			todo_item: todoItemSpec,
			todo_list: todoListSpec,
		}
	),
	marks: schema.spec.marks,
});

// console.log(baseSchema);
var opts = {
	schema: pSchema,
	keys: null,
};

var state = EditorState.create({
	schema: opts.schema,
	plugins: [
		// selectionMenu({
		// 	content: [
		// 		{
		// 			command: toggleMark(opts.schema.marks.strong),
		// 			dom: icon("B", "strong"),
		// 		},
		// 		{
		// 			command: toggleMark(opts.schema.marks.em),
		// 			dom: icon("i", "em"),
		// 		},
		// 		{
		// 			command: setBlockType(opts.schema.nodes.paragraph),
		// 			dom: icon("p", "paragraph"),
		// 		},
		// 		heading(1),
		// 		heading(2),
		// 		heading(3),
		// 		{
		// 			command: wrapIn(opts.schema.nodes.blockquote),
		// 			dom: icon(">", "blockquote"),
		// 		},
		// 	],
		// }),
		historyPlugin,
		// suggestionPlugin,
		buildInputRules(opts.schema),
		keymap(buildKeymap(opts.schema, opts.keys)),
		keymap(baseKeymap),
		mathPlugin,
	],
});

function toggleTodoItemAction(state, pos, todoItemNode) {
	return state.tr.setNodeMarkup(pos, null, {
		done: !todoItemNode.attrs.done,
	});
}
// setInterval(getTime, 6 * 1000);
if (!JOY?.paper?.view) {
	var view = new EditorView($("#content").get(0), {
		state,
		handleClickOn(view, pos, node, nodePos, event) {
			if (event.target.classList.contains("todo-checkbox")) {
				view.dispatch(toggleTodoItemAction(view.state, nodePos, node));
				return true;
			}
		},

		ignoreMutation() {
			return true;
		},
		editable() {
			return !window.LOCK;
		},
		clipboardTextSerializer: (slice) => {
			return mathSerializer.serializeSlice(slice);
		},
		content() {
			return;
		},
		async dispatchTransaction(transaction) {
			var doc = transaction.doc.toJSON();
			var state = view.state;
			doc = JSON.stringify(doc);
			// var w = Date.now();
			// u.put({ document: doc, when: w });
			// $("#when").text("Last saved: " + JOY.since(w) + " ago");
			let newState = state.apply(transaction);
			view.updateState(newState);
		},
	});
}
JOY.paper = {};
JOY.paper.view = view;
JOY.paper.state = state;
