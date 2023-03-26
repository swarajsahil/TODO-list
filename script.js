
    // btn.addEventListener('click', function actioner(){
    //     let paragraph=document.createElement('p');
    //     paragraph.innerText=insert.value;
    //     content.appendChild(paragraph);
    //     insert.value="";
    //     paragraph.addEventListener('click',()=>{
    //         paragraph.style.textDecoration="line-through";
    //     })
    //     edit.addEventListener('dblclick',()=>{
    //             content.removeChild(paragraph);
    //     })
    // })


const insert=document.querySelector('input');
const btn=document.getElementById('btn');
const content=document.querySelector('.note');
let screen=document.querySelector(".container");
let darkBtn=document.getElementById("circle");

btn.addEventListener('click',function add(){
    let paragraph=document.createElement('p');
    paragraph.innerHTML=insert.value;
    content.appendChild(paragraph);
    insert.value="";
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',()=>{
        content.removeChild(paragraph);
    })
})
darkBtn.addEventListener("click",()=>{
  darkBtn.classList.toggle("right");
  screen.classList.toggle("dark-mode");
})