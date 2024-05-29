const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector('.btn');

let notes = document.querySelector('.input-box');

function show(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

show();

const updateStorage = () => {
    localStorage.setItem("notes", []);
}


createBtn.addEventListener('click',()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src="images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
})

notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})