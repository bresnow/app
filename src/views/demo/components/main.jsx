import Escape from '../../../components/joy-jsx/escape';
export let MAIN = gun.get('hash-route').get('joyjsx').get("main_component_080");
export default function Main() {
    let editClass = "focus:outline-none focus:ring transform transition hover:scale-105 duration-300 ease-in-out"

    return (
        <div name="main_component_080" class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col items-center">

            <div class="flex flex-col w-full xl:w-3/4 justify-center lg:items-start overflow-y">
                <h1 contentEditable spellcheck="false" id="h1_title" class={"my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left " + editClass}>
                    <Escape name="title" />
                </h1>
                <p contentEditable spellcheck="false" id="paragraph_subtitle" class={"leading-normal text-2xl md:text-3xl mb-8 text-center md:text-left" + editClass}>
                    <Escape name="paragraph" />
                </p>

                <ImagePreview />
                <Uploader />

            </div>
        </div>
    )
};

function Uploader() {

    return (
        <form class="border-4 border-blue-200 border-dashed  hover:border-green-300 transform transition hover:scale-105 duration-300 ease-in-out bg-gray-900 opacity-75  w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="flex items-center justify-center mb-4 w-full">
                <label

                    class="flex flex-col w-full h-32 ">
                    Click elements to edit.
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
function ImagePreview() {
    let rcol = MAIN.get('image_container')
    rcol.once(data => {
        log(data, "data")
        if (!data) {
            rcol.put({ image_src: "https://source.unsplash.com/random/900×700/?computer" })
        }
    })

    return (
        <div name="image_container" class="w-full items-center p-12 overflow-hidden">
            <img class="mx-auto w-full md:w-4/5 transform duration-700 ease-in-out hover:scale-6" src={"%-- image_src --%"} alt="%-- name --%" />
        </div>
    )
};
