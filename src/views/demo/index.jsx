import HashRoute from "../../components/joy-jsx/hash-route"
import Footer from "./components/footer"
import Main, { MAIN } from "./components/main"
import Nav from "./components/nav"
import { Button } from "../../components/elements/button"
// MUST Use JOY.route.page to add/remove events in the dom. 
// Otherwise Ui manipulation and data models can be run in JOY.route.page or in any component function
JOY.route.page("joyjsx", () => {
    document.getElementById('uploader').addEventListener("change", function (e) {
        // log(e.target.files, "FILES")
        handleFiles(e.target.files)
    });
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
                image_node.put({ name: file.name, type: file.type, size: file.size, image_src: e.target.result })
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);

            };
            reader.readAsDataURL(file);
        }
    }
    let h1 = $('#h1_title'), p = $("#paragraph_subtitle");
    $('[name="button000"]').on("click", () => {
        h1.html(<span>Reactive and <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"> Persistent</span> Web Applications
        </span>);
        p.html("The revolutionary Javascript Framework for building Progressive Web Apps");
    });
    MAIN.once(data => {
        if (!data) {
            $('[name="button000"]').trigger("click")
        }
    })
    h1.on("blur", function (e) {
        // log(e.target.innerText)
        MAIN.put({ title: e.target.innerText })
    });
    
   p.on("blur", function (e) {
        // log(e.target.innerText)
        MAIN.put({ paragraph: e.target.innerText })
    });
})

export default function () {
    const $class = "w-full leading-normal tracking-normal text-indigo-400 h-full bg-cover bg-fixed"
    return (
        <HashRoute route={"joyjsx"} className={$class} style="background-image: url('/img/wallet/gradient_dark.jpg');">
            <Nav />
            <Main />
            <div class="flex-row w-1/2 mx-auto">

                <Button label="Reset" rounded color={"red"} />
                <Button label="Auth" rounded color={"indigo"} />
            </div>
            <Footer />
        </HashRoute>
    )
};
// Welcome to JoyJSX - the revolutionary Javascript UI Framework for building Reactive Progressive Web Apps!

// With JoyJSX, building modern web applications has never been easier. Our framework leverages a peer to peer distributed graph database system to handle application state across users, providing seamless real-time updates to your application's data.

// One of the standout features of JoyJSX is its built-in Content Management System (CMS), which allows you to easily manage your application's content without having to build one from scratch. And with authentication and authorization handled internally by JoyJSX, you can rest assured that your application is secure.

// Styling in JoyJSX is achieved using TailwindCSS, providing you with a wide range of pre-built styles that you can customize to your liking. Routing is also managed automatically by JoyJSX, depending upon URL hash changes, so you don't have to worry about setting up your application's navigation.

// While similar to React, JoyJSX projects compile JSX down to HTML strings, allowing frontend rendering to occur client-side. This means that your application's performance is optimized, and your users will experience fast load times and snappy interactions.

// At JoyJSX, we believe that building web applications should be enjoyable and straightforward. That's why we've designed our framework to be easy to use, even for those with limited programming experience. With JoyJSX, you can focus on building amazing applications that meet your users' needs without worrying about the technical details.

// So why wait? Try JoyJSX today and experience the joy of building modern web applications with ease.