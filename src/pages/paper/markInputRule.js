import { InputRule } from "prosemirror-inputrules";
import { schema } from "prosemirror-schema-basic";

export const markInputRule = (regexp, markType, getAttrs) => {
	const newRegexp = new RegExp(
		regexp.source.replace(/\$$/, "") + "(.)" + "$"
	);

	return new InputRule(newRegexp, (state, match, start, end) => {
		const attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
		const textStart = start + match[0].indexOf(match[1]);
		const textEnd = textStart + match[1].length;
		const tr = state.tr;

		start = match[0].match(/^\s/) ? start + 1 : start;

		if (textEnd < end) tr.delete(textEnd, end);
		if (textStart > start) tr.delete(start, textStart);

		end = start + match[1].length;

		return tr
			.addMark(start, end, markType.create(attrs))
			.insert(end, schema.text(match[2]));
	});
};
