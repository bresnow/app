import home from "./home.js";
import search from "./search.js";
import settings from "./settings.js";
import activity from "./activity.js";
import profile from "./profile.js";
import friends from "./friends.js";
// import { create, auth } from "./auth.js";
import paper from "./paper.js";
export const page = `
    ${activity}
    ${home}
    ${settings}
    ${profile}
    ${search}
    ${friends}
    ${paper}
`;
