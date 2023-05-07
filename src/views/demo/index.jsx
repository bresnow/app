import HashRoute from "../../components/joy-jsx/hash-route"
import Footer from "./components/footer"
import Main, { MAIN } from "./components/main"
import Nav from "./components/nav"


JOY.route.page("joyjsx", () => {
    document.getElementById('uploader').addEventListener("change", function (e) {
        log(e.target.files, "FILES")
        handleFiles(e.target.files)
    })

    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (!file.type.startsWith("image/")) {
                continue;
            }

            let image_node = MAIN.get("image_container")
            const reader = new FileReader();
            reader.onload = function (e) {
                console.log(e.target.result);
                image_node.put({ ...file, image_src: e.target.result })
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);

            };
            reader.readAsDataURL(file);
        }
    }
})

export default function () {
    const $class = "w-full leading-normal tracking-normal text-indigo-400 h-full bg-cover bg-fixed"
    return (
        <HashRoute route={"joyjsx"} className={$class} style="background-image: url('/img/wallet/gradient_dark.jpg');">
            <Nav />
            <Main />
            {/* <RightCol /> */}
            <Footer />
        </HashRoute>
    )
};
