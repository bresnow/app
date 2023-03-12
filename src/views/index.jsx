import Home from "./home.jsx";
import Search from "./search.jsx";
import Settings from "./settings.jsx";
import Activity from "./activity.jsx";
import Profile from "./profile.jsx";
import Friends from "./friends.jsx";
// import { create, auth } from "./auth.js";
import Paper from "./paper.jsx";
import { Section } from "../containers/section.jsx";
export const Views = () =>
    <Section>
        <Home />
        <Activity />
        <Settings />
        <Profile />
        <Search />
        <Friends />
        <Paper />
    </Section>
    ;
