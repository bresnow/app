export default function Player() {
    log($(".__container"))
    return (
        <div id="player" class="page">
            <style>
 {             `  .__container {
                    display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
}

                #header {
                    margin: 2rem;
                color: var(--text-color);
                font-weight: bolder;
}

                #input__container {
                    display: flex;
                width: 100%;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 1rem;
}

                #todo-input {
                    border - radius: var(--border-radius);
                height: 2rem;
                width: 30%;
                padding-left: 0.5rem;
}

                #addIcon {
                    color: white;
}
                #addBtn {
                    border: none;
                background: none;
}

                #addBtn:active {
                    scale: 0.9;
}

                .deleteBtn {
                    border: none;
                background: none;
}

                .deleteBtn:active {
                    scale: 0.9;
}

                #todo__container {
                    display: flex;
                width: 100%;
                margin: 4rem;
                gap: 1rem;
                justify-content: center;
                flex-direction: column;
                align-items: center;
}

                .todo-item {
                    display: flex;
                align-items: center;
                padding-right: 1rem;
                justify-content: space-between;
                border-radius: var(--border-radius);
                height: 3rem;
                width: 50%;
                padding-left: 0.5rem;
                background-color: white;
}

                h2 {
                    font-weight: lighter;
                font-family: monospace;
}`}
            </style>
            <div class="__container">
                <h2 id="header">TO DO</h2>
                <div id="input__container">
                    <input id="todo-input" placeholder="add todos..." />
                    <button id="addBtn" onclick={()=> {
                        const { todoInput, todoContainer } = elemints();

                        if (todoInput.value) {
                            let btn = document.createElement("button");
                            let id = new Date().getTime();
                            let li = document.createElement("li");
                            let todoText = document.createElement("h2");

                            li.classList.add("todo-item");
                            li.setAttribute("id", id);
                            todoText.innerHTML = todoInput.value;
                            btn.classList.add("deleteBtn");
                            btn.innerHTML = `<ion-icon size="large" name="trash-outline"></ion-icon>`;

                            btn.addEventListener("click", () => {
                                deleteTodo(id);
                            });
                            li.appendChild(todoText);
                            li.appendChild(btn);
                            todoContainer.appendChild(li);
                        }

                        todoInput.value = "";
                    }}>
                        <ion-icon id="addIcon" size="large" name="add-circle"></ion-icon>
                    </button>
                </div>

                <ul id="todo__container"></ul>
            </div>
            <audio id="player" controls></audio>
            <input
                type="text"
                id="username"
                placeholder="enter your username or theirs"
            />
            <button id="recordAudio">Record Audio</button>
            <button id="startAudioStream," onclick={() => {
                const context = new AudioContext();
                let username = document.getElementById("username").value;
                gun
                    .get(username)
                    .get("recording")
                    .on((data) => {
                        player.src = `data:audio/ogg;codec=opus;base64,${data}`;
                        player.play();
                    });
            }}>
                Listen to Recording
            </button>
        </div>

    )
};

// var Gun = require('gun'); // in NodeJS
// var Gun = require('gun/gun'); // in React
// let gun = Gun();

const player = document.getElementById("player");
const recordAudio = document.getElementById("recordAudio");
const audioContext = new AudioContext();

let base64ToArrayBuffer = function (base64) {
    var binaryString = atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var I = 0; I < length; I++) {
        bytes[I] = binaryString.charCodeAt(I);
    }
    return bytes.buffer;
};

const listenToAudioStream = () => {
    const context = new AudioContext();
    let username = document.getElementById("username").value;

    gun
        .get(username)
        .get("recording")
        .on((data, key) => {
            player.src = `data:audio/ogg;codec=opus;base64,${data}`;
            player.play();
        });
};
function elemints() {
    const addBtn = document.getElementById("addBtn");
    const todoContainer = document.getElementById("todo__container");
    const todoInput = document.getElementById("todo-input");

    return {
        addBtn,
        todoContainer,
        todoInput,
    };
}

// function addTodo

function deleteTodo(id) {
    const { todoContainer } = elemints();

    todoContainer.removeChild(document.getElementById(id));
}
JOY.route.page("player", function() {
    
    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
            let recording = false;
            let mediaRecorder = new MediaRecorder(stream);

            recordAudio.addEventListener("click", (event) => {
                if (!recording) {
                    recording = true;
                    mediaRecorder.start();
                    recordAudio.innerText = "Stop";
                } else {
                    recording = false;
                    mediaRecorder.stop();
                    recordAudio.innerText = "Record Audio";
                }
            });

            let chunks = [];

            mediaRecorder.ondataavailable = function (e) {
                chunks.push(e.data);
            };

            mediaRecorder.onstop = function (e) {
                let username = document.getElementById("username").value;

                console.log(username);

                console.log("recorder stopped");

                const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                chunks = [];

                var reader = new window.FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = async function () {
                    var base64data = reader.result;

                    gun.get(username).get("recording").put(base64data.split(',')[1]);
                };
            };
        }); 
})
