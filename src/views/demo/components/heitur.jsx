export default function({ route, url }) {
    let hashRoute = gun.get('hash-route').get(route ??"bresnow"), iframeCard = hashRoute.get("heiturDemo")
    iframeCard.put({ url: url ??"https://www.davidheitur.com" });
    card.once(({ imageSource }) => {
        log(imageSource)
        if (!imageSource ?? imageSource.length < 4) {
             hashRoute.get("iframeCard").put({ imageSource: "/img/jack_of_trade.gif", title: "Photography By David Heitur", creator: "David Heitur", header: "" });
        }
    })
    return (
        <div name="heiturDemo" class="flex flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                    <div class="mb-2">
                        <p class="text-lg font-bold text-navy-700"> Abstract Colors </p>
                        <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p>
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
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <button name="likes" class="absolute pl-4 top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
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
                        </button>
                        <iframe class="w-full h-screen" src="%-- url --%" />
             
                    </div>
             
        
                </div>
            </div>
        </div>
    )

};
function T({ route }) {
    let hashRoute = gun.get('hash-route').get(route ?? "bresnow"), card = hashRoute.get("card"), likes = hashRoute.get("card").get("likes")
    card.once(({ imageSource }) => {
        log(imageSource)
        if (!imageSource ?? imageSource.length < 4) {
            card.put({ imageSource: "/img/jack_of_trade.gif", title: "Jack Of All Trades", creator: "Bresnow", header: "Bresnow is an innovative thinker, artist and founder of Floating Mammoth Collective. A multi-skilled individual. Passionate about excellence in Web Development (JavaScript + Framework focus), Graphic Design, Music Production & Songwriting. Member: Solo act \"Gurde\" & Duet act \"Darkhill\". Join flight moths artistic journeys on Instagram What Beliefs, Interests & Skills" });
        }
    })


    return (
        <div name="card" class="flex p-4 flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 p-2 rounded-xl relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">

                        <img src={<Template name="imageSource" />} class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                        <button name="likes" class="absolute pl-4 top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
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
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-xl font-bold text-navy-700"> {<Template name="title" />}</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">Created By: {<Template name="creator" />}</p>
                        </div>
                    </div>

                    <div class="flex pl-4 items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-md font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button href="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )

};