import {
	inputRules,
	wrappingInputRule,
	textblockTypeInputRule,
	smartQuotes,
	emDash,
	ellipsis,
	InputRule,
} from "prosemirror-inputrules";
import {
	makeBlockMathInputRule,
	makeInlineMathInputRule,
	REGEX_INLINE_MATH_DOLLARS,
	REGEX_BLOCK_MATH_DOLLARS,
} from "@benrbray/prosemirror-math";
import { markInputRule } from "./markInputRule";
/// Given a blockquote node type, returns an input rule that turns `"> "`
/// at the start of a textblock into a blockquote.
export function blockQuoteRule(nodeType) {
	return wrappingInputRule(/^\s*>\s$/, nodeType);
}
const IMAGE_INPUT_REGEX =
	/!\[(?<alt>.*?)]\((?<filename>.*?)(?=\“|\))\“?(?<layoutclass>[^\”]+)?\”?\)/;
const getLayoutAndTitle = (tokenTitle) => {
	if (!tokenTitle) return {};
	return {
		title: tokenTitle,
	};
};
/// Given a list node type, returns an input rule that turns a number
/// followed by a dot at the start of a textblock into an ordered list.
export function orderedListRule(nodeType) {
	return wrappingInputRule(
		/^(\d+)\.\s$/,
		nodeType,
		(match) => ({ order: +match[1] }),
		(match, node) => node.childCount + node.attrs.order == +match[1]
	);
}

/// Given a list node type, returns an input rule that turns a bullet
/// (dash, plush, or asterisk) at the start of a textblock into a
/// bullet list.
export function bulletListRule(nodeType) {
	return wrappingInputRule(/^\s*([-+*])\s$/, nodeType);
}
export function todoListRule(nodeType) {
	return wrappingInputRule(/^-?\s*(\[ \])\s$/i, nodeType);
}

/// Given a code block node type, returns an input rule that turns a
/// textblock starting with three backticks into a code block.
export function codeBlockRule(nodeType) {
	return textblockTypeInputRule(/^```$/, nodeType);
}

/// Given a node type and a maximum level, creates an input rule that
/// turns up to that number of `#` characters followed by a space at
/// the start of a textblock into a heading whose level corresponds to
/// the number of `#` signs.
export function headingRule(nodeType, maxLevel) {
	return textblockTypeInputRule(
		new RegExp("^(#{1," + maxLevel + "})\\s$"),
		nodeType,
		(match) => ({ level: match[1].length })
	);
}

export function linkRule(nodeType) {
	return new InputRule(/\[([^[]+)]\((\S+)\)$/, (state, match, start, end) => {
		const [okay, alt, href] = match;
		const { tr } = state;

		if (okay) {
			console.log(href);
			tr.replaceWith(start, end, nodeType.schema.text(alt)).addMark(
				start,
				start + alt.length,
				nodeType.create({ href })
			);
		}

		return tr;
	});
}
export function imageRule(nodeType) {
	return new InputRule(IMAGE_INPUT_REGEX, (state, match, start, end) => {
		const [okay, alt, src, matchedTitle] = match;
		const { tr } = state;
		if (okay) {
			tr.replaceWith(
				start - 1,
				end,
				nodeType.create({
					src,
					alt,
					...getLayoutAndTitle(matchedTitle),
				})
			);
		}

		return tr;
	});
}

/// A set of input rules for creating the basic block quotes, lists,
/// code blocks, and heading.
export function buildInputRules(schema) {
	let rules = smartQuotes.concat(ellipsis, emDash),
		type;
	if ((type = schema.nodes.blockquote)) rules.push(blockQuoteRule(type));
	if ((type = schema.nodes.ordered_list)) rules.push(orderedListRule(type));
	if ((type = schema.nodes.bullet_list)) rules.push(bulletListRule(type));
	if ((type = schema.nodes.code_block)) rules.push(codeBlockRule(type));
	if ((type = schema.nodes.todo_list)) rules.push(todoListRule(type));
	if ((type = schema.nodes.heading)) rules.push(headingRule(type, 6));
	if ((type = schema.marks.strong))
		rules.push(markInputRule(/(?:\*\*|__)([^\*_]+)(?:\*\*|__)$/, type));
	if ((type = schema.marks.em))
		rules.push(
			markInputRule(/(?:^|[^\*_])(?:\*|_)([^\*_]+)(?:\*|_)$/, type)
		);
	if ((type = schema.marks.underline))
		rules.push(markInputRule(/(?:__)([^_]+)(?:__)$/, type));
	if ((type = schema.marks.strikethrough))
		rules.push(markInputRule(/~([^~]+)~$/, type));
	if ((type = schema.marks.link)) rules.push(linkRule(type));
	if ((type = schema.marks.highlight))
		rules.push(markInputRule(/(?:==)([^=]+)(?:==)$/, type));
	if ((type = schema.nodes.image)) rules.push(imageRule(type));
	if ((type = schema.nodes.math_inline))
		rules.push(makeInlineMathInputRule(REGEX_INLINE_MATH_DOLLARS, type));
	if ((type = schema.nodes.math_display))
		rules.push(makeBlockMathInputRule(REGEX_BLOCK_MATH_DOLLARS, type));
	return inputRules({ rules });
}
