import './lib/joy-jsx';
import '../css/main.css'
import '../css/responsive.css'
import '../css/style.css'
import './lib/vendors/bootstrap/css/bootstrap.min.css'
import "./lib/vendors/nice-select/css/nice-select.css"
import "./lib/vendors/spilitting/splitting.css"
import "./lib/vendors/slick/slick-theme.css"
import "./lib/vendors/slick/slick.css"
import "./lib/vendors/spilitting/splitting.css"
import "./lib/vendors/elegant-icon/style.css"
import "./lib/vendors/animation/animate.css"
import App from "./app"
import Bresnow from './tags/bresnow';

var user = JOY.user;
// window.CONFIG.peers = ['http://0.0.0.0:3000/gun']

JOY.render(<div><App /><Bresnow /></div>)


function LoadMeta(obj) {
    Object.entries(obj).forEach(key => {
        let meta = document.createElement('meta');
        let head = document.getElementsByTagName('head')[0];
        meta.setAttribute('name', key[0]);
        meta.setAttribute('content', key[1]);
        head.appendChild(meta);
    })
}
