import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import {
	schema,
	defaultMarkdownParser,
	defaultMarkdownSerializer,
} from "prosemirror-markdown";
// import { exampleSetup } from "prosemirror-example-setup";

class Markdown {
	constructor(target, content) {
		this.view = new EditorView(target, {
			state: EditorState.create({
				doc: defaultMarkdownParser.parse(content),
			}),
		});
	}

	get content() {
		return defaultMarkdownSerializer.serialize(this.view.state.doc);
	}
	focus() {
		this.view.focus();
	}
	destroy() {
		this.view.destroy();
	}
}

export default Markdown;
