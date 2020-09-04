

showNotes();


// if your adds a note, add it to local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";


    showNotes();

});
// Funtion to Show elements from local storage read it and show to local storage
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
            `<div class="container">
        <div class="draggable " draggable="true">
            <h5 style=" margin:0px 12px; word-wrap: break-word;" >${index + 1 + "." + element.title}</h5>
            <p style="word-wrap: break-word; margin:0px 14px;"  >${element.text}</p>
            <Button   id="${index}" onclick="deleteNote(this.id)" class="btn deletebtn"  style="border: 2px solid rgb(95, 91, 91);
            border-radius: 23px;"0>Delete</button>
        </div>
        </div>`
    });

    // when there are no notes then we need to show something
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to Show! Use "Add Task" to add New  Quick Note`
    }
}
// Function to delete note

function deleteNote(index) {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}

//code for dragging 

const draggables = document.querySelectorAll('.draggable')

const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
        
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
        
    })
    containers.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault()
            const a = document.querySelector('.dragging');
            container.appendChild(a)
           
        })
    })

});



