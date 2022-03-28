let _1 = document.getElementById("_1")
_1.onclick = function (){
    let value = 1;
    document.getElementById('input').value += value;
}
let _2 = document.getElementById("_2")
_2.onclick = function (){
    let value = 2;
    document.getElementById('input').value += value;
}
let _3 = document.getElementById("_3")
_3.onclick = function (){
    let value = 3;
    document.getElementById('input').value += value;
}
let _4 = document.getElementById("_4")
_4.onclick = function (){
    let value = 4;
    document.getElementById('input').value += value;
}
let _5 = document.getElementById("_5")
_5.onclick = function (){
    let value = 5;
    document.getElementById('input').value += value;
}
let _6 = document.getElementById("_6")
_6.onclick = function (){
    let value = 6;
    document.getElementById('input').value += value;
}
let _7 = document.getElementById("_7")
_7.onclick = function (){
    let value = 7;
    document.getElementById('input').value += value;
}
let _8 = document.getElementById("_8")
_8.onclick = function (){
    let value = 8;
    document.getElementById('input').value += value;
}
let _9 = document.getElementById("_9")
_9.onclick = function (){
    let value = 9;
    document.getElementById('input').value += value;
}
let _0 = document.getElementById("_0")
_0.onclick = function (){
    let value = 0;
    document.getElementById('input').value += value;
}
let _ngoacPhai = document.getElementById("_)")
_ngoacPhai.onclick = function (){
    let value = ')';
    document.getElementById('input').value += value;
}
let _cong = document.getElementById("_+")
_cong.onclick = function (){
    let value = '+';
    document.getElementById('input').value += value;
}
let _tru = document.getElementById("_-")
_tru.onclick = function (){
    let value = '-';
    document.getElementById('input').value += value;
}
let _nhan = document.getElementById("_x")
_nhan.onclick = function (){
    let value = '*';
    document.getElementById('input').value += value;
}
let _chia = document.getElementById("_/")
_chia.onclick = function (){
    let value = '/';
    document.getElementById('input').value += value;
}

let _ngoacTrai = document.getElementById('_(')
_ngoacTrai.onclick = function (){
    let value = '(';
    document.getElementById('input').value += value;
}
let _cham = document.getElementById("_.")
_cham.onclick = function (){
    let value = '.';
    document.getElementById('input').value += value;
}
let _bang = document.getElementById('_=')
_bang.onclick = function (){
    let ket_qua = document.getElementById('input').value;
    result = eval(ket_qua);
    document.getElementById('input').value = result;

}
let _AC = document.getElementById('_AC')
_AC.onclick = function (){
    document.getElementById('input').value = '';
}