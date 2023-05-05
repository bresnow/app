import HashRoute from "../../components/joy-jsx/hash-route"
import Footer from "./components/footer"
import Main from "./components/main"
import Nav from "./components/nav"
import RightCol from "./components/rightcol"


JOY.router.page("joyjsx", () => {
    // console.log('PAGER')
})

export default function () {
    const $class = "leading-normal tracking-normal text-indigo-400 min-h-full bg-cover bg-fixed"
    return (
        <HashRoute route={"joyjsx"} className={$class} style="background-image: url('/img/wallet/gradient_dark.jpg');">
            <Nav />
            <Main />
            <RightCol />
            <Footer />
        </HashRoute>
    )
};
