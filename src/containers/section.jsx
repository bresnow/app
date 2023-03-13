const Account = () => {
    var sectionTitle = document.querySelector('.section__title')
    gun.get("main_section").get("section_header").put({
        title: "Floating Mammoth",
        subtitle: "Design. Develop, Deploy.", username: "Bresnow"
    })
    gun.get("main_section").get("section_header").once(({ title }) => {
        sectionTitle.innerHTML = title
    })
    return (
        <header name="section_header" class="section__header bg-blue" style="background-image: url(%-- backgroundImage --%);">
            <h1 class="section__title"
            >%-- title --%</h1>
            <p class="section__subtitle" >%-- subtitle --%</p>
            <div class="section__controls">

                <div class="user z-99">
                    <img src="https://source.unsplash.com/200x200/?nature" class="user__img" alt="" />
                    {/* <span class="user__name bg-red"  >%-- username --%</span> */}
                </div>
            </div>
        </header>
    )
}

JOY.style({
    '.section__header': {
        position: 'absolute',
        top: '20px',
        left: '0',
        right: '0',
        height: '500px',
        padding: '2rem',
        borderRadius: '0.5rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
    },
    '.section__header::after': {
        content: '""',
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
        fontWeight: '200',
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
// gun.get("main_section").get("section_header").then(d => log("Async", d)).catch(console.log)

function changeHandler() {
    let text = $(".section__title").text();
    log($(".section__title"))
    gun.get("main_section").get("section_header").once(log)
    gun.get("main_section").get("section_header").put({ title: text })
}
// "main_section.section_header = {title,subtitle,username}"
export function Section({ children }) {
    return (
        <section name="main_section" class="main">
            <article class="section" data-section>
                <Account />
                {children}
            </article >
        </section >

    )
}