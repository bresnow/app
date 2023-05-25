import HashRoute from "../../components/joy-jsx/hash-route"
import Audio from "./components/audio";
import Heitur from "./components/heitur";
import Main, { MAIN } from "./components/main"
// MUST Use JOY.route.page to add/remove events in the dom. 
// Otherwise Ui manipulation and data models can be run in JOY.route.page or in any component function
function handleFiles(files) {
    let hashRoute = gun.get('hash-route').get("bresnow"), card = hashRoute.get("card"), likes = hashRoute.get("card").get("likes")
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
const DEFAULT_AVATAR = "/bdsLogoMark.png";

export const Avatar = ({
    src,
    alt,
    size = "md",
    className,
    ...rest
}) => {
    src ||= DEFAULT_AVATAR;
    const AvatarStyles = {
        base: "rounded-fmd",
        size: {
            xs: "w-1/2 h-1/2",
            sm: "w-9.5 h-9.5",
            md: "w-12 h-12",
            lg: "w-14.5 h-14.5",
            xl: "w-33 h-33",
        },
    };
    const classes = [
        AvatarStyles.base,
        AvatarStyles.size[size],
        className
        //
     ].join(" ");
    return (
        <img
            src={src}
            alt={alt && `@${alt} avatar`}
            className={classes}
            {...rest}
        />
    );
};



JOY.route.page("bresnow", () => {
    document.getElementById('uploader').addEventListener("change", function (e) {
        handleFiles(e.target.files)
    });

    let like_button = $('#likeButton');
    like_button.on("click", function (e) {
        console.log("clicked");
    })
})

export default function () {
    const $class = "w-full lg:w-2/3 lg:mx-auto leading-normal tracking-normal text-indigo-400 h-full bg-slate"
    return (
        <HashRoute route={"bresnow"} class={$class}>
            {/* <Header src={"/img/bresnowLogo.png"}/> */}
                <SubscribeSection/>
            <ContentCard />
            <IframeCard />
        </HashRoute>
    )
};
export function Esc({ name }) {
    return `%-- ${name} --%`
}

export function ContentCard({ route, iframe, src }) {
    let hashRoute = gun.get('hash-route').get(route ?? "bresnow"), card = hashRoute.get("card"), likes = hashRoute.get("card").get("likes")

    card.put({ imageSource: "/img/jack_of_trade.gif", title: "Jack Of All Trades", creator: "Bresnow", header: "Bresnow is an innovative thinker, artist and founder of Floating Mammoth Collective. A multi-skilled individual. Passionate about excellence in Web Development (JavaScript + Framework focus), Graphic Design, Music Production & Songwriting. Member: Solo act \"Gurde\" & Duet act \"Darkhill\". Join flight moths artistic journeys on Instagram What Beliefs, Interests & Skills" });

    hashRoute.get("contentMap").put({ imageSource: !iframe && "/img/jack_of_trade.gif", title: "Jack Of All Trades", creator: "Bresnow", header: "Bresnow is an innovative thinker, artist and founder of Floating Mammoth Collective. A multi-skilled individual. Passionate about excellence in Web Development (JavaScript + Framework focus), Graphic Design, Music Production & Songwriting. Member: Solo act \"Gurde\" & Duet act \"Darkhill\". Join flight moths artistic journeys on Instagram What Beliefs, Interests & Skills" })

    return (
        <div name="card" class="flex p-4 flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 p-2 rounded-xl relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img 
                        src={<Esc name="imageSource" />} 
                        class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" 
                        alt="" />
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
            <div class="container font-sans bg-green-100 rounded p-4 md:p-24 text-center">
            <h2 class="font-bold break-normal text-2xl md:text-4xl">Collaborative File Sharing</h2>
            <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">If you are a client of Bresnow's or collaborator in The Floating Mammoth Collective sign in below to upload and share.</h3>
            </div>
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <iframe class="w-full h-screen" src="%-- url --%" />
                    </div>

                </div>
            </div>
        </div>
    )

};
function Header({ src, children }) {
    return (
        <div class="w-full m-0 bg-contain bg-top bg-no-repeat" style={`background-image:url('${src ?? "/Logo/FMLOGO.svg"}'); height: 60vh; max-height:460px;`}>
            {children}
        </div>
    )
}
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
};
function TwoThirdColumn() {
    return (
        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/collection/325867/800x600" class="h-full w-full rounded-t pb-6" />
                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                    <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                    <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                    <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
            </div>
        </div>

    )
};
function HalfColumn({ children }) {
    return (
        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            {children}
        </div>

    )

};
function AuthorSection(params) {
    return (
        <div class="flex w-full items-center font-sans p-8 md:p-24">
            <Avatar/>
            <div class="flex-1">
                <p class="text-base font-bold text-base md:text-xl leading-none">Bresnow</p>
                <p class="text-gray-600 text-xs md:text-base">Interface Designer</p>
            </div>
            <div class="justify-end">
                <button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
            </div>
        </div>
    )
};
function FooterSection() {
    return (
        <footer class="bg-gray-900">
            <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">

                <div class="w-full mx-auto flex flex-wrap items-center">
                    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                        <a class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
                             <span class="text-base text-gray-200">FLTNGMMTH</span>
                        </a>
                    </div>
                    <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
                            <li>
                                <a class="inline-block py-2 px-3 text-white no-underline" href="#">Active</a>
                            </li>
                            <li>
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
                            </li>
                            <li>
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
                            </li>
                            <li>
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>
        </footer>
    )
};
// Welcome to JoyJSX - the revolutionary Javascript UI Framework for building Reactive Progressive Web Apps!
function SubscribeSection() {
    return (
        <div class="container font-sans bg-green-100 rounded p-4 md:p-24 text-center">
            <AuthorSection/>
            <h2 class="font-bold break-normal text-2xl md:text-4xl">Subscribe to Floating Mammoth</h2>
            <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
            <div class="w-full text-center pt-4">
                <form action="#">
                    <div class="max-w-xl mx-auto p-1 pr-0 gap-2 flex flex-wrap items-center">
                        <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
                        <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
                        <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
                        <input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
                        <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
function LeadCard() {
    return (
        <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <div class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full rounded-t">
                    <img src="https://source.unsplash.com/collection/494263/800x600" class="h-full w-full shadow" />
                </div>

                <Audio src="/DarkHillDont.ogg" />
                <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">

                </div>

            </div>
        </div>
    )
}
function Nav(params) {
    return (
        <nav class="mt-0 w-full">
            <div class="container mx-auto flex items-center">

                <div class="flex w-1/2 pl-4 text-sm">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li class="mr-2">
                            <a class="inline-block py-2 px-2 text-white no-underline hover:underline" href="post.html">POST</a>
                        </li>
                        <li class="mr-2">
                            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>
                        </li>
                        <li class="mr-2">
                            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>
                        </li>
                        <li class="mr-2">
                            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="post_vue.html">POST_VUE</a>
                        </li>
                    </ul>
                </div>


                <div class="flex w-1/2 justify-end content-center">
                    <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
                        <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                    </a>
                    <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                        <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                    </a>
                </div>
            </div>
        </nav>
    )
}