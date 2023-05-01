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
import './lib/joy-jsx';

var log = window.log = console.log.bind(console)
var user = JOY.user;
JOY.opt.peers = ['http://0.0.0.0:3000/gun']

JOY.render(<div><App/><Bresnow/></div>)


function StyleSheets(){
    return null
}







gun.get('power').put({recon: "MONEY & POWER"})
