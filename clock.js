const root = document.getElementById('root');
setInterval(printTime, 1000);

function printTime() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const h1 = document.createElement('h1');
    h = checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    const time = document.createTextNode(`${h} : ${m} : ${s}`);
    h1.append(time);
    if (root.firstElementChild) {
        root.replaceChild(h1,root.firstElementChild);
    } else {
        root.append(h1);
    }
}

function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}