import AbstractView from "./views/AbstractView.js";
import Nosotros from "./views/Nosotros.js";
import Main from "./views/Main.js";
import Servicios from "./views/Servicios.js";
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/Main", view: Main},
        { path: "/Nosotros", view: Nosotros},
        { path: "/Servicios", view: Servicios},
    ];

 // Try every route
 const potentialMatches = routes.map(route => {
    return {
        route: route,
        result: location.pathname.match(pathToRegex(route.path))
    };
});

let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

if (!match) {
    match = {
        route: routes[0],
        result: [location.pathname]
    };
}

const view = new match.route.view(getParams(match));

document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

router();
});