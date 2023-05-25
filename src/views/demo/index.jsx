import HashRoute from "../../components/joy-jsx/hash-route"
import Audio from "./components/audio";
import Heitur from "./components/heitur";
import Main, { MAIN } from "./components/main"
// MUST Use JOY.route.page to add/remove events in the dom. 
// Otherwise Ui manipulation and data models can be run in JOY.route.page or in any component function
JOY.route.page("bresnow", () => {
    let hashRoute = gun.get('hash-route').get("bresnow"), card = hashRoute.get("card"), likes = hashRoute.get("card").get("likes")
    document.getElementById('uploader').addEventListener("change", function (e) {
        handleFiles(e.target.files)
    });
    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // if (!file.type.startsWith("image/")) {
            //     continue;
            // }
            const reader = new FileReader();
            reader.onload = function (e) {
                card.put({ imageSource: e.target.result, title: file.name, creator: "New Creator!", header: "Bresnow is an innovative thinker, artist and founder of Floating Mammoth Collective. A multi-skilled individual. Passionate about excellence in Web Development (JavaScript + Framework focus), Graphic Design, Music Production & Songwriting. Member: Solo act \"Gurde\" & Duet act \"Darkhill\". Join flight moths artistic journeys on Instagram What Beliefs, Interests & Skills" });
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);

            };
            reader.readAsDataURL(file);
        }
    };

    let like_button = $('#likeButton');
    like_button.on("click", function (e) {
        console.log("clicked")
        // likes.once(({ count, liked }) => {
        //     if (!count) {
        //         likes.put({ count: 1 })
        //     } else {
        //         if (liked) {
        //             likes.put({ count: count - 1 })
        //             like_button.removeClass("bg-red")
        //         } else {
        //             likes.put({ count: count + 1 })
        //             like_button.addClass("bg-red")
        //         }
        //     }
        // })
    })
})

export default function () {

    const $class = "w-full lg:w-2/3 lg:mx-auto leading-normal tracking-normal text-indigo-400 h-full bg-black"
    return (
        <HashRoute route={"bresnow"} class={$class}>
            <Card />
            <IframeCard />
        </HashRoute>
    )
};
export function Esc({ name }) {
    return `%-- ${name} --%`
}

export function Card({ route, iframe, src }) {
    let hashRoute = gun.get('hash-route').get(route ?? "bresnow"), card = hashRoute.get("card"), likes = hashRoute.get("card").get("likes")

    card.put({ imageSource: "/img/jack_of_trade.gif", title: "Jack Of All Trades", creator: "Bresnow", header: "Bresnow is an innovative thinker, artist and founder of Floating Mammoth Collective. A multi-skilled individual. Passionate about excellence in Web Development (JavaScript + Framework focus), Graphic Design, Music Production & Songwriting. Member: Solo act \"Gurde\" & Duet act \"Darkhill\". Join flight moths artistic journeys on Instagram What Beliefs, Interests & Skills" });

    hashRoute.get("contentMap").put({ imageSource: !iframe && "/img/jack_of_trade.gif", title: "Jack Of All Trades", creator: "Bresnow", header: "Bresnow is an innovative thinker, artist and founder of Floating Mammoth Collective. A multi-skilled individual. Passionate about excellence in Web Development (JavaScript + Framework focus), Graphic Design, Music Production & Songwriting. Member: Solo act \"Gurde\" & Duet act \"Darkhill\". Join flight moths artistic journeys on Instagram What Beliefs, Interests & Skills" })

    return (
        <div name="card" class="flex p-4 flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 p-2 rounded-xl relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src={<Esc name="imageSource" />} class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                        <Likes />
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-xl font-bold text-navy-700"> {<Esc name="title" />}</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">Created By: {<Esc name="creator" />}</p>
                        </div>
                    </div>

                    <div class="flex pl-4 items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-md font-bold text-brand-500">Adding <span>Content</span></p>
                        </div>
                        <button href="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div>
                        <Uploader/>
                </div>
            </div>
        </div>
    )

};
export function IframeCard() {
    let hashRoute = gun.get('hash-route').get("bresnow"), iframeCard = hashRoute.get("iframeCard")
    iframeCard.put({ url: "https://checkit.16score13.com" })
    return (
        <div name="iframeCard" class="flex flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <iframe class="w-full h-screen" src="%-- url --%" />
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
function Uploader() {

    return (
        <form class="border-4 border-blue-200 border-dashed  hover:border-green-300 transform transition hover:scale-105 duration-300 ease-in-out bg-gray-900 opacity-75  w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="flex items-center justify-center mb-4 w-full">
                <label class="flex flex-col w-full h-32 ">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <p id="uploader_p" class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Upload Image</p>
                        <input id="uploader" type="file" class="opacity-0" />
                    </div>
                </label>
            </div >
        </form >
    )
};
function Likes() {
    return (<button name="likes" class="absolute pl-4 top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
        <div id="likeButton" class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
            <svg stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
        </div>
        <div class="flex">
            <p class="!mb-0 text-md font-bold text-brand-500 p-2">333</p>
        </div>
    </button>)
}