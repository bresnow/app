import "./lib/joy-jsx";
import './lib/ai';
import { imgGenStyles } from "./utils/constants";
export default function ImageGen() {
    return (
        <div >
            <div id="loading"></div>
            <main id="imageGen" class="section__">
                <section id="hero">
                    <div class="info">
                        <h1>Image Generator</h1>
                    </div>
                    <img id="firstRender" />
                </section>
                <section id="imageGenerate">
                    <input id="prompt" placeholder="Add Prompt" />
                    <button id="genbutton" >Generate</button>
                </section>
                <section id="cards"></section>
            </main></div>
    )
};
JOY.css(imgGenStyles);
JOY.route.page('imageGen', async () => {
})

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}