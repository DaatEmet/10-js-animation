const box = document.getElementById('box');
const container = document.getElementById('container');
let pos = 1;
const param = container.offsetHeight - box.offsetHeight + 1;
let flag = true;
const t = setInterval(move,10);

function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if (pos >= param){
       flag = false;
    }
    if(pos === 1){
        flag = true
    }
    flag ? pos++ : pos--;

}