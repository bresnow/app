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
export const hashCheck = (fallback) => {
    let node = 'hash-routes_v0.0.1_JOY-JSX';
    fallback = fallback.replace('#', "")
    let hash = location.hash.slice(1);
    gun.get(node).once(routes => {
        delete routes._
        if (!routes[hash]) {
            console.log("Redirecting to available route " + fallback)
            JOY.route(fallback)
        };
        if (routes[hash] === "false"){
            hash = fallback;
            JOY.route(hash);
        }
    })
}