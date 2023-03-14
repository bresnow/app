import Home from "./home.jsx";
import Search from "./search.jsx";
import Settings from "./settings.jsx";
import Activity from "./activity.jsx";
import Profile from "./profile.jsx";
import Friends from "./friends.jsx";
import Paper from "./paper.jsx";
import { Section } from "../containers/section.jsx";
import Player from "./player.jsx";
import { NewUser } from './auth';
import SignIn from "./create/index.jsx";

 const Views = () =>
    <Section>
        <SignIn/>
        <NewUser/>
        <Home />
        <Activity />
        <Settings />
        <Profile />
        <Search />
        <Friends />
        <Paper />
    <Player/>
    </Section>
    ;
export default Views;