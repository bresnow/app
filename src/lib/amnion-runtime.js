const h = (
    element,
    attributes,
    ...args
) => {
    const children = args ? args.map((args) => args) : [];
    return { element, attributes, children };
};

export default {h}