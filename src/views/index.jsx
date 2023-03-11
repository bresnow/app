import home from "./home.js";
import Search from "./search.js";
import Settings from "./settings.js";
import activity from "./activity.js";
import profile from "./profile.jsx";
import friends from "./friends.js";
// import { create, auth } from "./auth.js";
import paper from "./paper.jsx";
export const views = `
    ${activity}
    ${home}
    ${Settings}
    ${profile}
    ${Search}
    ${friends}
    ${paper}
`;
