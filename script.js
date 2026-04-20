const translateBtn=document.getElementById('translateBtn');
const inputText=document.getElementById('inputText');
const outputText=document.getElementById('outputText');
const sourceLang=document.getElementById('sourceLang');
const targetLang=document.getElementById('targetLang');
translateBtn.addEventListener('click', ()=>{
    const text=inputText.value.trim();
    if(!text) return alert("Please enter text to translate");
    fetch(' https://libretranslate.de',
        {
            method:'POST',
            body:JSON.stringify({
                q:text,
                source:sourceLang.value,
                target:targetLang.value,
                format:"text"
            }),
            headers:{'content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            outputText.value=data.translatedText;
        })
        .catch(err=>{
            console.error(err);
            alert("Translation failed. Try again");
        });
});