export default function Audio({ src, ...props }) {
    const { image_src,  color } = props,
        style = {
            ".audio-player": {
                "--player-button-width": "3em",
                "--sound-button-width": "2em",
                "--space": ".5em",
                width: "100%",
                height: "100%",
                paddingLeft: "calc(var(--sound-button-width) + var(--space))",
                paddingRight: "var(--sound-button-width)",
                paddingBottom: "10px"
            },
            ".icon-container": {
                width: "100%",
                height: "100%",
                backgroundColor: color ?? "#000",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                borderRadius: "2em",
                alignItems: "center"
            },
            ".audio-icon": { width: "90%", height: "90%" },
            ".controls": {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginTop: "10px"
            },
            ".player-button": {
                backgroundColor: "transparent",
                border: "0",
                width: "var(--player-button-width)",
                height: "var(--player-button-width)",
                cursor: "pointer",
                padding: "0"
            },
            ".timeline": {
                WebkitAppearance: "none",
                width:
                    "calc(100% - (var(--player-button-width) + var(--sound-button-width) + var(--space)))",
                height: ".5em",
                backgroundColor: "#e5e5e5",
                borderRadius: "5px",
                backgroundSize: "0% 100%",
                backgroundImage: "linear-gradient(#DE5E97, #DE5E97)",
                backgroundRepeat: "no-repeat",
                marginRight: "var(--space)"
            },
            ".timeline::-webkit-slider-thumb": {
                WebkitAppearance: "none",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                cursor: "pointer",
                opacity: 0,
                transition: "all .1s",
                backgroundColor: "#a94672"
            },
            ".timeline::-moz-range-thumb": {
                WebkitAppearance: "none",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                cursor: "pointer",
                opacity: 0,
                transition: "all .1s",
                backgroundColor: "#a94672"
            },
            ".timeline::-ms-thumb": {
                WebkitAppearance: "none",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                cursor: "pointer",
                opacity: 0,
                transition: "all .1s",
                backgroundColor: "#a94672"
            },
            ".timeline::-webkit-slider-thumb:hover": { backgroundColor: "#943f65" },
            ".timeline:hover::-webkit-slider-thumb": { opacity: 1 },
            ".timeline::-moz-range-thumb:hover": { backgroundColor: "#943f65" },
            ".timeline:hover::-moz-range-thumb": { opacity: 1 },
            ".timeline::-ms-thumb:hover": { backgroundColor: "#943f65" },
            ".timeline:hover::-ms-thumb": { opacity: 1 },
            ".timeline::-webkit-slider-runnable-track": {
                WebkitAppearance: "none",
                boxShadow: "none",
                border: "none",
                background: "transparent"
            },
            ".timeline::-moz-range-track": {
                WebkitAppearance: "none",
                boxShadow: "none",
                border: "none",
                background: "transparent"
            },
            ".timeline::-ms-track": {
                WebkitAppearance: "none",
                boxShadow: "none",
                border: "none",
                background: "transparent"
            },
            ".sound-button": {
                backgroundColor: "transparent",
                border: "0",
                width: "var(--sound-button-width)",
                height: "var(--sound-button-width)",
                cursor: "pointer",
                padding: "0"
            }
        }
    JOY.css(style)
    // JOY.script(function(){
    //     const playerButton = document.querySelector('.player-button'),
    //         audio = document.querySelector('audio'),
    //         timeline = document.querySelector('.timeline'),
    //         soundButton = document.querySelector('.sound-button'),
    //         playIcon =
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    //                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    //             </svg>
    //         ,
    //         pauseIcon =
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    //                 <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
    //             </svg>
    //         ,
    //         soundIcon =
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    //                 <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
    //             </svg>,
    //         muteIcon =
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    //                 <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    //             </svg>;

    //     function toggleAudio() {
    //         if (audio.paused) {
    //             audio.play();
    //             playerButton.innerHTML = pauseIcon;
    //         } else {
    //             audio.pause();
    //             playerButton.innerHTML = playIcon;
    //         }
    //     }

    //     playerButton.addEventListener('click', toggleAudio);

    //     function changeTimelinePosition() {
    //         const percentagePosition = (100 * audio.currentTime) / audio.duration;
    //         timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    //         timeline.value = percentagePosition;
    //     }

    //     audio.ontimeupdate = changeTimelinePosition;

    //     function audioEnded() {
    //         playerButton.innerHTML = playIcon;
    //     }

    //     audio.onended = audioEnded;

    //     function changeSeek() {
    //         const time = (timeline.value * audio.duration) / 100;
    //         audio.currentTime = time;
    //     }

    //     timeline.addEventListener('change', changeSeek);

    //     function toggleSound() {
    //         audio.muted = !audio.muted;
    //         soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
    //     }

    //     soundButton.addEventListener('click', toggleSound);
    // })
    gun.get('hash-routes_v0.0.1_JOY-JSX').once(log)
    return (
        <div class="audio-player">
            <audio src={src??"/brain-damage-148577.mp3"}></audio>
            <div class="controls">
                <button class="player-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                </button>
                <input type="range" class="timeline" max="100" value="0" />
                <button class="sound-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
                        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
};
