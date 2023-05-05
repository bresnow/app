import Escape from '../../../components/joy-jsx/escape';
export default function Main() {
    let MAIN = gun.get('hash-route-joyjsx').get("main_component_02");

    MAIN.once(data => {
        if (!data) {
            MAIN.put({ title: "JOY", span: "JSX", paragraph: "SELF AWARE SINGULARITY" })
        }
        let h1 = $('#h1_title');
        log(data, "CUSTOM CRADLE")
        h1.text(data.title);
        $('#span_title').text(data.span);
        [h1, $('#span_title')].forEach(el => {
            el.on("keyup", function () {
                let title = h1.text();
                if (title.length > 11)
                    MAIN.put({ title })
              
            })
        })
    })
    return (
        <div name="main_component_02" class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div  class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y">
                <h1 contentEditable id="h1_title" class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    <span id="span_title" class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                        <Escape name="span"/>
                    </span>
                        <Escape name="title"/>
                </h1>
                <p contentEditable  class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                    <Escape name="paragraph" />
                </p>

                <form name="form" class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label contentEditable class="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
                            <Escape name="form_label_text" />
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            id="file_upload"
                            style={"background-image: url('/img/wallet/gradient_dark.jpg')"}
                            type="file"
                        />
                    </div>

                    <div class="flex items-center justify-between pt-4">
                        <button
                            class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            type="button"
                        >
                            Button
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};
