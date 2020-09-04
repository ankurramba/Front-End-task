

showNotes1();


// if your adds a note, add it to local storage

let addBtn1 = document.getElementById('addBtn1');
addBtn1.addEventListener("click", function (e) {
    let addTxt1 = document.getElementById("addTxt1");
    let addTitle1 = document.getElementById("addTitle1");
    let notes1 = localStorage.getItem('notes1');
    if (notes1 == null) {
        notesObj1 = [];
    }
    else {
        notesObj1 = JSON.parse(notes1);
    }

    let myObj1 = {
        title1: addTitle1.value,
        text1: addTxt1.value
    }
    notesObj1.push(myObj1);
    localStorage.setItem("notes1", JSON.stringify(notesObj1));
    addTxt1.value = "";
    addTitle1.value = "";


    showNotes1();

});
// Funtion to Show elements from local storage read it and show to local storage
function showNotes1() {
    let notes1 = localStorage.getItem('notes1');

    if (notes1 == null) {
        notesObj1 = [];
    }
    else {
        notesObj1 = JSON.parse(notes1);
    }
    let html = "";
    notesObj1.forEach(function (element, index) {
        html += `<div class="container1">
        <div class="draggable1 " draggable="true">
            <h5 style=" margin:0px 12px; word-wrap: break-word;" >${index + 1 + "." + element.title1}</h5>
            <p style="word-wrap: break-word; margin:0px 14px;"  >${element.text1}</p>
            <Button   id="${index}" onclick="deleteNote1(this.id)" class="btn deletebtn"  style="border: 2px solid rgb(95, 91, 91);
            border-radius: 23px;"0>Delete</button>
        </div>
        </div>`;
    });

    // when there are no notes then we need to show something
    let notesElm1 = document.getElementById('notes1');
    if (notesObj1.length != 0) {
        notesElm1.innerHTML = html;
    }
    else {
        notesElm1.innerHTML = `Nothing to Show! Use "Add Task" to add New  Quick Note`
    }
}
// Function to delete note

function deleteNote1(index) {

    let notes1 = localStorage.getItem('notes1');
    if (notes1 == null) {
        notesObj1 = [];
    }
    else {
        notesObj1 = JSON.parse(notes1);
    }

    notesObj1.splice(index, 1);
    localStorage.setItem("notes1", JSON.stringify(notesObj1));

    showNotes1();
}


const draggables1 = document.querySelectorAll('.draggable1')

const containers1 = document.querySelectorAll('.container1')

draggables1.forEach(draggable1 => {
    draggable1.addEventListener('dragstart', () => {
        draggable1.classList.add('dragging1')
        
    })
    draggable1.addEventListener('dragend', () => {
        draggable1.classList.remove('dragging1')
        
    })
    containers1.forEach(container1 => {
        container1.addEventListener('dragover', (e) => {
            e.preventDefault()
            const c = document.querySelector('.dragging1');
            container1.appendChild(c)
            
        })
    })

})