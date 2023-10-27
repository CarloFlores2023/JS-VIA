const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Nosotros") },
        { path: "/", view: () => console.log("Viewing Posts") },
        { path: "/", view: () => console.log("Viewing Settings") },
    ];

    //Route every match
    const potentialMatches = route.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    console.log(potentialMatches);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=> {
document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
    });

router();
});