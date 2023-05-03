import Script from "./components/scripts";
import { scripts } from './lib/utils/constants';
import './lib/joy-as';

const Index = () =>
    <div class="all">
        <Header />
        <div id="search" class="search-form">
            <form action="dashboard.html">
                <div class="icon-search"></div>
                <input type="text" placeholder="search" value="" />
            </form>
        </div>
        <Dash />
        <Footer />
        <Script tag={scripts} />
    </div>;
function Header() {
    return (
        <div class="header">
            <div class="header-inner">
                <div class="header-logo"><a href="#">FLTNGMMTH</a></div>
                <div class="header-icons">
                    <div class="burger hidden-lg hidden-md"><a href="#"><span></span><span></span><span></span></a></div>
                </div>
                <div class="header-help"><a href="#help">Help</a></div>
                <div class="header-login"><a href="#registration">New Account</a><a href="#login">Login</a></div>
            </div>
        </div>
    )
}
function Dash({ children }) {
    return (
        <div class="page page-dashboard">
            <div class="page-nav">
                <div class="page-nav-inner">
                    <div class="header-logged"><a href="#invitation">Invite</a><a href="#members">10 Members</a><a href="dashboard-#forme">Jack M.<span class="avatar"><img src="images/image.png" alt="" /><img src="images/image.png" alt="" /></span></a></div>
                    <ul class="page-nav__list">
                        <li class="active"><a href="#dashboard">Home</a></li>
                        <li><a href="#imageGen">Image Generator</a></li>
                        {/* <li><a href="#dashboard">In Progress</a></li> */}
                        {/* <li><a href="#dashboard">Review</a></li>
                        <li><a href="#dashboard">Done</a></li>
                        <li><a href="#dashboard">Ideas</a></li> */}
                    </ul>
                    <div class="btn-group"><a href="#dashboard" class="btn btn-default active">to others</a><a href="dashboard-#forme" class="btn btn-default">for me</a>
                    </div><a href="#task-create" class="btn btn-accent hidden-xs">add task</a><a href="#task-create" class="btn btn-accent visible-xs">&plus;</a>
                    <div class="page-nav-footer"><a href="#contact">Contact</a><a href="#help">Help</a></div>
                </div>
            </div>
            <div class="page-header">
                <div class="container-fluid">
                    <h1>Different</h1>
                </div>
            </div>
            <div class="page-content">
                <div class="dashboard-table"></div>
                <div class="dashboard-row">
                    <div class="dashboard-sub-row">
                        <div class="dashboard-col dc-text">Extremity sweetness difficult behaviour he months do things engage season</div>
                        <div class="dashboard-col dc-category"><a href="#">Life</a></div>
                        <div class="dashboard-col dc-date">September 5</div>
                        <div class="dashboard-col dc-member">Casey R.
                            <div title="done task" class="dashboard-avatar"><img src="images/image.png" alt="" /></div>
                        </div>
                    </div>
                    <div class="dashboard-sub-row">
                        <div class="details">
                            <div class="lead">Clearly immigration, trade and terrorism were key issues that swayed electoral opinion in a very significant way, just as they did in the UK, and probably will in the European referendums and elections to come.</div><a href="task-#full" class="btn btn-accent">show more</a><span>5 comments</span><a href="task-#full">edit task</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Footer() {
    return (
        < div class="footer" >
            <div class="footer-inner">
                <div class="col-left"><a href="#contact">Contact</a></div>
                <div class="col-center">
                    <div class="social-network"><a href="#" target="_blank"><i class="icon-linkedin"></i></a><a href="#" target="_blank"><i class="icon-facebook"></i></a><a href="#" target="_blank"><i class="icon-twitter"></i></a></div>
                </div>
                <div class="col-right"><a href="mailto:bresnow@fltngmmth.com">bresnow@fltngmmth.com</a></div>
            </div>
        </ div>
    )
}
JOY.route.page("home", function () {
})
export default function () {
    return (<div id="home" class="section__" ><Index /></div>)
};
