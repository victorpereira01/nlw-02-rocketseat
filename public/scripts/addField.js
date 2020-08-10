document.querySelector("#add-time")
    .addEventListener('click', cloneField);

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item:last-of-type').cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');
    
    if (isBlank(fields)) {
        alert("Preencha os campos em branco.");
    } else {
        fields.forEach((fields) => {
            fields.value = "";
        })
        document.querySelector('#schedule-items').appendChild(newFieldContainer);
    }
}

function isBlank(fields) {
    for (var i = 0; i < fields.length; i++) {
        console.log(fields[i]);
        if (fields[i].value == "") {
            return true;
        }
    }
    return false;
}