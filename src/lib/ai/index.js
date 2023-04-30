const token = "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";

/**
 * Function to generate a random number
 * @param {Number} max max number
 * @returns
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const promptsToGenerate = [
    "high resolution photography interior design, dreamy sunken living room conversation pit, wooden floor, small windows opening onto the garden, bauhaus furniture and decoration, high ceiling, beige blue salmon pastel palette, interior design magazine, cozy atmosphere",
    "a battle in the ruined streets at night between 3 d pixar disney zombies and 3 d heroic survivor in the style of pixar walkind dead, being lit by fireflames, medium shot, studio ghibli, pixar and disney animation, sharp, rendered in unreal engine 5, anime key art by greg rutkowski, bloom, dramatic lighting",
    'photography of an Italian car in Tuscany, poolsuite style', "photo headshot by mucha, sharp focus, elegant, render, octane, detailed, award winning photography, masterpiece, rim lit", "a vibrant professional studio portrait photography of a young, pale, goth, attractive, friendly, casual, delightful, intricate, gorgeous, female, piercing green eyes, wears a gold ankh necklace, femme fatale, nouveau, curated collection, annie leibovitz, nikon, award winning, breathtaking, groundbreaking, superb, outstanding, lensculture portrait awards, photoshopped, dramatic lighting, 8 k, hi res –testp –ar 3:4 –upbeta", "a beautiful Cotton Mill Girl, symmetrical, centered, dramatic angle, ornate, details, smooth, sharp focus, illustration, realistic, cinematic, artstation, award winning, rgb , unreal engine, octane render, cinematic light, macro, depth of field, blur, red light and clouds from the back, highly detailed epic cinematic concept art CG render made in Maya, Blender and Photoshop, octane render, excellent composition, dynamic dramatic cinematic lighting, aesthetic, very inspirational, arthouse by Henri Cartier Bresson", "temple in ruines, forest, stairs, columns, cinematic, detailed, atmospheric, epic, concept art, Matte painting, background, mist, photo-realistic, concept art, volumetric light, cinematic epic + rule of thirds octane render, 8k, corona render, movie concept art, octane render, cinematic, trending on artstation, movie concept art, cinematic composition , ultra-detailed, realistic , hyper-realistic , volumetric lighting, 8k –ar 2:3 –test –uplight", "infinite hyperbolic intricate maze, futuristic eco warehouse made out of dead vines, glass mezzanine level, lots of windows, wood pallets, designed by Aesop, forest house surrounded by massive willow trees and vines, white exterior facade, in full frame, , exterior view, twisted house, 3d printed canopy, clay, earth architecture, cavelike interiors, convoluted spaces, hyper realistic, photorealism, octane render, unreal engine, 4k, –stylize 5000 –ar 1:2", "dark and terrifying horror house living room interior overview design, demon with red eyes is standing in the corner Moebius, Greg Rutkowski, Zabrocki, Karlkka, Jayison Devadas, Phuoc Quan, trending on Artstation, 8K, ultra wide angle, pincushion lens effect.",
];

/**
 * Function to get an image from huggingface
 * @param {string} prompt text for image generation
 * @param {string} url api url
 * @returns {string} img url
 */
export async function getImage(
    prompt,
    url = "https://api-inference.huggingface.co/models/prompthero/openjourney"
) {
    const random = Math.random();

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({ inputs: prompt, options: random }),
    });

    const result = await response.blob();
    return result;
}

export const renderFirstImage = async () => {
    // APPEND LOADING
    const loadingElement = document.getElementById("loading");
    loadingElement.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;

    const main = document.getElementsByTagName("main")[0];
    main.style.display = "none";

    const randomNum = getRandomInt(promptsToGenerate.length);

    const primeiraImagem = document.getElementById("firstRender");

    const response = getImage(promptsToGenerate[randomNum]);

    const urlImage = URL.createObjectURL(response);

    primeiraImagem.src = urlImage;

    main.style.display = "block";
    loadingElement.innerHTML = "";
};

export const generateImage = async () => {
    const section = document.getElementById("cards");
    const loading = document.createElement("div");
    loading.innerHTML = `<div class='lds-ring'><div></div><div></div><div></div><div></div></div>`;

    section.append(loading);

    const card = document.createElement("div");
    card.classList.add("card");

    //

    const promptInput = document.getElementById("prompt"); // OK

    const promptH3 = document.createElement("h3");
    promptH3.innerHTML = promptInput.value;

    const imagePrompt = document.createElement("img");

    const response = await getImage(promptInput.value);
    const urlImage = URL.createObjectURL(response);

    imagePrompt.src = urlImage;

    const buttonDownload = document.createElement("button");
    buttonDownload.innerHTML = "DOWNLOAD";
    buttonDownload.setAttribute("id", "buttonDownload");

    buttonDownload.addEventListener("click", () =>
        downloadImage(urlImage, promptInput.value)
    );

    loading.style.display = "none";

    card.append(promptH3, imagePrompt, buttonDownload);

    section.append(card);
};

function downloadImage(imageSrc, prompt) {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = prompt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}