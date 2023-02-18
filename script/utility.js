
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
      <td id='area'>${area + 'cm'}<sup>2</sup></td>
      <td id='id'><button class='btn-sm btn-accent lowercase text-sm'>convert m<sup>2</sup></button></td>
    `
    var button = tr.querySelector("#id").children[0]
    var tdArea = tr.querySelector("#area")

    button.addEventListener('click', function(){
        tdArea.innerText = area/100 + " mtr";
    })
    
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
// hide editable input display with check button
function hideEditingDisplay(inputId1, inputId2, placeId1, placeId2, displayId){
    let input1 = getInnerValueById(inputId1)
    let input2 = getInnerValueById(inputId2)
    if (isNaN(input1) || input1<= 0 || isNaN(input2) || input2 <= 0) {
        return alert('Please insert a valid number')
    } else {
        document.getElementById(placeId1).innerText = input1
        document.getElementById(placeId2).innerText = input2
        makingDisplayNone(displayId)
    }
}


//---------------------------------------
// Make random color on background 
function randomBgColor(limitNumber){
    const r = Math.floor(Math.random() * limitNumber);
    const g = Math.floor(Math.random() * limitNumber);
    const b = Math.floor(Math.random() * limitNumber);
    return `rgb(${r},${g},${b})`
  }