export default function HashRoute({ className, route, children, ...attr }) {

    return (
        <div data-as name={`hash-route-${route}`} id={route} class={`joy_view__ ${className}`} {...attr} >
            {children}
        </div>
    )
};
