const txtElement = ['Siswa UT School', 'Programmer Pemula']
let count = 0;
let textindex = 0;
let currentTxt = '';
let words = '';

(function running(){

    if(count == txtElement.legth){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++textIndex);
    document.querySelector('.running-text.').textContent = words;

    if(words.leght == currentTxt.length){
        count++
        textIndex = 0;
    }
    setTimeout(running, 300);

}
)();
