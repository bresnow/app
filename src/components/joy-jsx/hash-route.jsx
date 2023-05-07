export default function HashRoute({ className, route, children, ...attr }) {
    gun.get('hash-routes_v0.0.1_JOY-JSX').put({ [route]: "true" })
    return (
        <div name="hash-route">
            <div name={`${route}`} id={route} class={`joy_view__ ${className}`} {...attr} >
                {children}
            </div>
        </div>
    )
};
export const routeCheck = (fallback) => {
    let node = 'hash-routes_v0.0.1_JOY-JSX';
    fallback = fallback.replace('#', "")
    gun.get(node).on(routes => {
        let hash = location.hash.replace('#', "");
        if (routes[hash] !== "true") {
            let [_fb,] = Object.entries(routes).find(val => {
                if (val[1] === "true") return val[0]
            });
            routes[fallback] !== "true" ? fallback = _fb : fallback = fallback;
            console.log("Redirecting to available route " + fallback)
            JOY.route(fallback)

        }
    })
}