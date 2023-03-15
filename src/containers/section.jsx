const Account = () => {

    return (
        <header name="account__header" class="section__header" >
            <h1 name="account__h1_title" class="section__title"
            >%-- textContent --%</h1>
            <p class="section__subtitle"  >%-- subtitle --%</p>
            <div class="section__controls">
                <a id="my" class='unit right gap'>
                    <img id="my" name="avatar" width="32em" class="sap" src="https://source.unsplash.com/random/32x32" />
                </a>
                {/* <Icon/> */}
            </div>

        </header>
    )
}
var gunui = {
    main: gun.get("main_section"),
    header: gun.get("main_section").get('header')
}
gunui.header.put({title: "HOME", subtitle: "This is the home page"});
const converted = {
    ":root": {
        "--h": "33",
        "--s": "90%",
        "--l": "90%",
        // fontFamily: "'Noto Sans', sans-serif"
    },
    ".glass": {
        fontSize: "clamp(1.2rem, 5vw + 1rem, 2.5rem)",
        // width: "10em",
        height: "100vh",
        borderRadius: "0.5em",
        backgroundImage: "linear-gradient(#fff,#000)",
        boxShadow:
            "0 -0.125em 0.25em #0002,\n\t\t0 0.25em 0.25em hsl(var(--h) var(--s) var(--l) / 0.5),\n\t\t0 0 0 0.1em hsl(var(--h) var(--s) var(--l) / 0.5),\n\t\t0 0.175em 0.3em hsl(var(--h) var(--s) var(--l) / 0.5) inset,\n\t\t0 -0.025em 0.175em hsl(var(--h) var(--s) var(--l) / 0.4) inset,\n\t\t0 -0.25em 1em 0.3em hsl(var(--h) var(--s) var(--l) / 0.3) inset,\n\t\t0 0.6em 0 hsl(var(--h) var(--s) var(--l) / 0.3) inset,\n\t\t0 2em 1em #0004",
        backdropFilter: "blur(0.15em)",
        // position: "relative",
        // display: "flex",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gridAutoRows: "minmax(150px, auto)",
        gridGap: "2rem 0.5rem",
        // placeContent: "center",
        color: "hsl(var(--h) var(--s) var(--l) / .7)",
        // textShadow: "0.03em 0.03em #fff5,\n    -0.03em -0.03em #0005",
        cursor: "pointer",
        transition: "0.4s ease",
        paddingTop: "0.2em",
    },
    ".glass:before": {
        content: "''",
        position: "absolute",
        top: "100%",
        width: "80%",
        left: "10%",
        height: "1.5em",
        backgroundImage:
            "radial-gradient(\n      100% 100% at center,\n      hsla(var(--h),var(--s),80%,0.25),\n      hsla(var(--h),var(--s),80%,0) 50%)"
    },
    ".glass:after": {
        content: " ",
        inset: "0",
        top: "0.5em",
        position: "absolute",
        backgroundImage:
            "linear-gradient(\n      105deg,\n      transparent 20%,\n      hsl(var(--h) var(--s) var(--l) / .2) 20%,\n      hsl(var(--h) var(--s) var(--l) / .2) 30%,\n      transparent 30%,\n      transparent 32%,\n      hsl(var(--h) var(--s) var(--l) / .2) 5%,\n      hsl(var(--h) var(--s) var(--l) / .2) 40%,\n      transparent 0%\n    )",
        backgroundSize: "400% 100%",
        backgroundPosition: "100% 0%",
        transition: ".5s ease"
    },
    ".glass:hover:after": { backgroundPosition: "-50% 0%" },
    ".glass:hover": {
        translate: ".01em .25em",
        boxShadow:
            "0 -0.125em 0.25em #0002,\n\t\t0 0.25em 0.25em hsl(var(--h) var(--s) var(--l) / 0.5),\n\t\t0 0 0 0.1em hsl(var(--h) var(--s) var(--l) / 0.5),\n\t\t0 0.175em 0.3em hsl(var(--h) var(--s) var(--l) / 0.8) inset,\n\t\t0 -0.025em 0.175em hsl(var(--h) var(--s) var(--l) / 0.4) inset,\n\t\t0 -0.25em 1em 0.3em hsl(var(--h) var(--s) var(--l) / 0.3) inset,\n\t\t0 0.6em 0 hsl(var(--h) var(--s) var(--l) / 0.3) inset,\n\t\t0 1em 0.5em #0004",
        backdropFilter: "blur(30%) contrast(150%)"
    },
    ".glass:hover:before": { height: "1em" }
}

JOY.style({
    ":root": {
        "--h": "33",
        "--s": "90%",
        "--l": "90%",
        // fontFamily: "'Noto Sans', sans-serif"
    },
    '.section__header': {
        position: 'absolute',
        top: '1em',
        left: '0',
        right: '0',
        height: '500px',
        padding: '2rem',
        // borderRadius: '0.5rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
    },
    '.section__header::after': {
        content: ' ',
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
    },
    '.section__title': {
        fontSize: '2.5rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        lineHeight: '1',
    },

    '.section__subtitle': {
        fontSize: '1rem',
    },
    '.section__controls': {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        padding: '0 2rem',
        top: '0',
        left: '0',
        right: '0',
        transform: 'translateY(-50%)',
    }
})
JOY.style(converted)

// "main_section.section_header = {title,subtitle,username}"
export function Section({ children, ...opts }) {
    return (
        <section name="main_section" {...opts} class={"main"}>
                <Account />
            <article name="section_header" class="section glass bg-cover" style="background-image: url(%-- backgroundImage --%);" data-section>
                {children}
            </article >
        </section >

    )
}