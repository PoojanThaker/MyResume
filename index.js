function load_email(){
let server = 'gmail.com' ;
let email = 'poojanthaker' + '@' + server;
let email_a = document.getElementById('email');
email_a.innerHTML = email;
email_a.href = 'mailto:'+email;
}

load_email();

let id = setInterval(frame, 50);
var header = document.getElementById('navbar');
var holder = document.getElementById('holder');

function frame() {
    if(header.style.opacity<0.9)
    header.style.opacity=parseFloat(header.style.opacity)+0.1;
    if(parseInt(holder.style.top.substring(0, holder.style.top.length - 1))<10)
    holder.style.top=(parseInt(holder.style.top.substring(0, holder.style.top.length - 1))+1).toString()+'px';
    if(parseInt(header.style.top.substring(0, header.style.top.length - 1))<0)
    header.style.top=(parseInt(header.style.top.substring(0, header.style.top.length - 1))+3).toString()+'px';
}

