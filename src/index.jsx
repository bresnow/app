import Pager from './views/pager';

if (location.hash.slice(1).length < 2) {
    JOY.route('demo');
}
JOY.render(
    <div>
        <Pager/>
    </div>)


function LoadHead(tag, obj) {
    Object.entries(obj).forEach(key => {
        let meta = document.createElement(tag);
        let head = document.getElementsByTagName('head')[0];
        meta.setAttribute('name', key[0]);
        meta.setAttribute('content', key[1]);
        head.appendChild(meta);
    })
}
