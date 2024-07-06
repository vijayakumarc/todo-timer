let speech = new SpeechSynthesisUtterance();

let voices= [];

let voiceSelect = document.querySelector('#voice-option')

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[2];
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)))
}

voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value]
})

let listenBtn = document.getElementById('listen-btn');

listenBtn.addEventListener('click',()=>{
    let listItems = document.querySelectorAll('#list-container li .task-list-text');
    if (listItems.length > 0) {
        listItems.forEach(item => {
            let utterance = new SpeechSynthesisUtterance(item.textContent);
            utterance.voice = voices[voiceSelect.value]; 
            window.speechSynthesis.speak(utterance);
        });
    } else {
        console.error("List items not found.");
    }
})