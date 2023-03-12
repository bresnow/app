const Account = () => {

    return (
        <header name="section_header" class="section__header" style="background-image: url(%-- backgroundImage --%);">
            <h1 class="section__title" 
                onInput={changeHandler()} contenteditable>%-- title --%</h1>
            <p class="section__subtitle" contenteditable>%-- subtitle --%</p>
            <div class="section__controls">

                <div class="user">
                    <img src="https://source.unsplash.com/200x200/?nature" class="user__img" alt="" />
                    <span class="user__name bg-red" contenteditable >%-- username --%</span>
                </div>
            </div>
        </header>
    )
}
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