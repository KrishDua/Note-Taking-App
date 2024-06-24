let inp = document.querySelector("#inp");
let btn = document.querySelector('#btn');
let container = document.querySelector(".container");
function newtaskadd(){
    if(inp.value == ""){
        return;
    }
    let div = document.createElement('div');
    div.classList.add("containerchild");
    div.innerHTML = 
    `<p>${inp.value}</p>
    <div class="btngrp">
    <input type="checkbox" name="" id="chbox">
    <button id="up">↑</button>
    <button id="down">↓</button>
    <button id="cross">✕</button>
    </div>`
    inp.value = "";
    container.append(div);
}
 btn.addEventListener("click",function(){
    newtaskadd();
 });
let body = document.querySelector('body');
body.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        newtaskadd();
    }
})
container.addEventListener("click",function(e){
    let x = e.target.getAttribute("id");
    let ele = e.target.parentElement.parentElement;
    if(x == "up"){
        let nele = ele.previousElementSibling;
        container.insertBefore(ele,nele);
    }else if(x == "down"){
        let nele = ele.nextElementSibling
        console.log(nele);
        container.insertBefore(nele,ele);
    }else if(x == "cross"){
        ele.remove();
    }else if(x == "chbox"){
        let p = e.target.parentElement.previousElementSibling;
        p.classList.toggle("strike");
    }
})
