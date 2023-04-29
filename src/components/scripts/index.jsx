export default function ScriptTags({tag = []}) {
    return tag?.map(({ src, ...rest }) => <script {...rest} src={src}></script>)
};
