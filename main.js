// ロード中、表示する文字一つ一つに<span>をつける
const text = document.querySelector('.loading');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = '';

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// 160ミリ秒ごとspanにcoloringクラスを加える
let char = 0;
let timer = setInterval(setFade, 160);

function setFade(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('coloring');
    char++;
    // 最後の文字に到達したら二つの関数を呼び出す
    if(char === splitText.length){
        finish();
        fadeOut();
    }
}

function finish(){
    clearInterval(timer);
    timer = null;
}

// ロード画面を作るdivにfadeoutクラスを加える
function fadeOut(){
    const init = document.querySelector('.init');
    init.classList.add('fadeout');
    // 2秒後にdisplay: none;を加える
    setTimeout(function(){
        init.style.display = 'none';
    }, 2000);
}
