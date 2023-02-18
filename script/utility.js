
// -----------------------------------------
// get input value by id
function getInnerValueById(inputId){
    const inputValue = document.getElementById(inputId).value
    return parseFloat(inputValue);
}

//---------------------------------------------
// get innerText of an element in string
function getInnerTextInString(elementId){
    const innerTextString = document.getElementById(elementId).innerText;
    return innerTextString;
}

// -----------------------------------------
// get innerText of an element in number by id
function getInnerTextInNumberById(elementId){
    const innerTextOfElement = document.getElementById(elementId).innerText;
    return parseFloat(innerTextOfElement);
}

// -----------------------------------------
// create element and append as child
function makeTheTableData(serial, name, area){
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td id='cm'>${area + 'cm'}<sup>2</sup></td>
      <td><button class='btn btn-accent lowercase'>convert to m<sup>2</sup></button></td>
    `
    tbody.appendChild(tr)
}

//----------------------------------------
// validation check

function validationCheck(nameInput, input1, input2, areaInput){
    if (isNaN(input1) || input1 <= 0 || isNaN(input2) || input2 <= 0) {
        return alert('Please enter a valid Number')
    } else{
        makeTheTableData(serial, nameInput, areaInput.toFixed(2))
    }
}

//------------------------------------
// making display block
function makingDisplayBlock(inputId){
    document.getElementById(inputId).style.display = 'block'
}

//------------------------------------
// making display none
function makingDisplayNone(inputId){
    document.getElementById(inputId).style.display = 'none'
}

//---------------------------------------------
// make input display with check button
