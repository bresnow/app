import HashRoute from "../../components/joy-jsx/hash-route"
import Footer from "./components/footer"
import Main, { MAIN } from "./components/main"
import Nav from "./components/nav"
import { Button } from "../../components/elements/button"
// MUST Use JOY.route.page to add/remove events in the dom. 
// Otherwise Ui manipulation and data models can be run in JOY.route.page or in any component function
JOY.route.page("bresnow", () => {
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
        <HashRoute route={"bresnow"} className={$class} style="background-image: url('/img/wallet/gradient_dark.jpg');">
            <Main/>
            <Card />
        </HashRoute>
    )
};
export function Card({route}) {
    let hashRoute = gun.get('hash-route').get("bresnow")
    hashRoute.get("card").put({ imageSource: "/img/jack_of_trade.gif",title: "Jack Of All Trades", creator: "Bresnow"})

    return (
        <div name="card" class="flex flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src={"%-- imageSource --%"} class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div  class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> {"%-- title --%"}</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">Created By: {"%-- creator --%"}</p>
                        </div>
                        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt="" />
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt="" />
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button href="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )

};