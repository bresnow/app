export default function RightCol() {
    var src = "https://source.unsplash.com/random/900×700/?computer"
    let rcol = gun.get('hash-route').get('joyjsx').get('right_column01')
    rcol.once(data => {
        log(data, "data")
        if (!data) {
            rcol.put({ image_src: src })
        }
    })

    return (
        <div name="right_column01" class="w-full lg:w-3/5 p-12 overflow-hidden">
            <img class="mx-auto w-full md:w-4/5 transform duration-700 ease-in-out hover:scale-6" src={"%-- image_src --%"} />
        </div>
    )
};
