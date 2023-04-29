export function Links({lnk = []}) {
    return lnk?.map(({ ...rest }) => <link {...rest}></link>)
};

export function Meta({ arr = [{title: 'Joy.JSX', content: 'Frontend App Framework'}]}) {
    return arr?.map(({title, content}) => <meta name={title} content={content}></meta>)
}