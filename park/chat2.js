const chat = document.getElementById("chat");
const statusText = document.getElementById("status");

function scrollDown() {
    chat.scrollTop = chat.scrollHeight;
}

function addMessage(text, html=false) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.innerHTML = html ? text : text;
    chat.appendChild(msg);
    scrollDown();
}

function typingThen(message, delay, html=false){
    setTimeout(()=>{
        statusText.innerText = "typing...";
        setTimeout(()=>{
            statusText.innerText = "online";
            addMessage(message, html);
        },1200);
    },delay);
}

/* CONTINUATION */
typingThen("MUMAII LELO",1000);


typingThen(`
    <audio controls>
        <source src="song.mp3" type="audio/mpeg">
    </audio>
`,1800,true);


typingThen(
    `<a href="magic/">baas akk last chizz … open this 💛</a>`,
    3000,
    true
);
