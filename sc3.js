

showNotes2();


// if your adds a note, add it to local storage

let addBtn2 = document.getElementById('addBtn2');
addBtn2.addEventListener("click", function (e) {
    let addTxt2 = document.getElementById("addTxt2");
    let addTitle2 = document.getElementById("addTitle2");
    let notes2 = localStorage.getItem('notes2');
    if (notes2 == null) {
        notesObj2 = [];
    }
    else {
        notesObj2 = JSON.parse(notes2);
    }

    let myObj2 = {
        title2: addTitle2.value,
        text2: addTxt2.value
    }
    notesObj2.push(myObj2);
    localStorage.setItem("notes2", JSON.stringify(notesObj2));
    addTxt2.value = "";
    addTitle2.value = "";


    showNotes2();

});
// Funtion to Show elements from local storage read it and show to local storage
function showNotes2() {
    let notes2 = localStorage.getItem('notes2');

    if (notes2 == null) {
        notesObj2 = [];
    }
    else {
        notesObj2 = JSON.parse(notes2);
    }
    let html = "";
    notesObj2.forEach(function (element, index) {
        html += `<div class="container2">
        <div class="draggable2 " draggable="true">
            <h5 style=" margin:0px 12px; word-wrap: break-word;" >${index + 1 + "." + element.title2}</h5>
            <p style="word-wrap: break-word; margin:0px 14px;"  >${element.text2}</p>
            <Button   id="${index}" onclick="deleteNote2(this.id)" class="btn deletebtn"  style="border: 2px solid rgb(95, 91, 91);
            border-radius: 23px;"0>Delete</button>
        </div>
        </div>`;
    });

    // when there are no notes then we need to show something
    let notesElm2 = document.getElementById('notes2');
    if (notesObj2.length != 0) {
        notesElm2.innerHTML = html;
    }
    else {
        notesElm2.innerHTML = `Nothing to Show! Use "Add Task" to add New  Quick Note`
    }
}
// Function to delete note

function deleteNote2(index) {

    let notes2 = localStorage.getItem('notes2');
    if (notes2 == null) {
        notesObj2 = [];
    }
    else {
        notesObj2 = JSON.parse(notes2);
    }

    notesObj2.splice(index, 1);
    localStorage.setItem("notes2", JSON.stringify(notesObj2));

    showNotes2();
}

const draggables2 = document.querySelectorAll('.draggable2')

const containers2 = document.querySelectorAll('.container2')

draggables2.forEach(draggable2 => {
    draggable2.addEventListener('dragstart', () => {
        draggable2.classList.add('dragging2')
        
    })
    draggable2.addEventListener('dragend', () => {
        draggable2.classList.remove('dragging2')
        
    })
    containers2.forEach(container2 => {
        container2.addEventListener('dragover', (e) => {
            e.preventDefault()
            const c = document.querySelector('.dragging2');
            container2.appendChild(c)
            
        })
    })

});
