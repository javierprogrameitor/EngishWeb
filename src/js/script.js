const FormElements = document.querySelectorAll("form input");
const TbodyElement = document.querySelector("tbody");

let addButton = FormElements[3];

addButton.addEventListener("click", addEntry);

function addEntry(event) {
    //Prevent the normal behavior of the form
    event.preventDefault();

    let word = FormElements[0].value;
    let translation = FormElements[1].value;
    let phrase = FormElements[2].value;

    if (word === "" || translation === "" || phrase === "") {
        alert("Fill the empty data form");
        return;
    }


    let newEntry = `
        <tr>
            <td data-label="Word">${word}</td>
            <td data-label="Translation">${translation}</td>
            <td data-label="Phrase">${phrase}</td>
            <td data-label="Delete"><button class="delete-btn">X</button></td>
            <td data-label="Edit"><button class="edit-btn">E</button></td>
        </tr>
    `;

    TbodyElement.innerHTML += newEntry;

   for (let index = 0; index < FormElements.length -1; index++) {
    FormElements[index].value = "";
    
   }
}

function deleteEntry(element, event) {
    //TODO
    console.log(element);
    console.log(event);

    let confirmation = confirm("Are you sure delete");

    if (confirmation) {
        //  Option 1
        //  const row = element.parentNode.parentNode;
        //  row.remove();

        //Option 2
        //const row = element.closest('tr');
        //row.remove();

        //Option 3
        //const row = element.closest('tr');
        //row.parentNode.removeChild(row);

        const row = element.closest('tr');
        row.classList.add('fade-out');
        setTimeout(() => row.remove(), 700);



    }


}

document.querySelector('table').addEventListener('click', function (event) {

    console.log(event);
    let element = event.target;

    if(element.tagName === 'BUTTON') {
        if(element.classList.contains('delete-btn'));
        deleteEntry(event.target, event);
    }
    if (element.classList.contains('edit-btn')) {
        const row = element.closest('tr');
        editRow(row);
    }


});

function editRow() {

    console.log("Row edited");
    console.log(row);
}