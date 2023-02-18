let serial = 0;
//==========================
// triangle card button event
//===========================
document.getElementById('triangle-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name1');
    const heigth = getInnerValueById('triangleInput1')
    const base = getInnerValueById('triangleInput2')
    const area = 0.5 + heigth + base
    validationCheck(name, heigth, base, area)

})


// =============================
// //ractangle-card-btn event
// ============================
document.getElementById('ractangle-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name2');
    const width = getInnerValueById('ractangleInput1')
    const length = getInnerValueById('ractangleInput2')
    const area = width * length;

    validationCheck(name, width, length, area)
})

// ============================
//parallelogram-card-btn event
// ============================
document.getElementById('parallelogram-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name3');
    const base = getInnerTextInString('baseOfparallelogram')
    const height = getInnerTextInString('heightOfparallelogram')
    const area = base * height;
    validationCheck(name, base, height, area)
})
document.getElementById('perallelogram-edit').addEventListener('click', function () {
    makingDisplayBlock('taking-para-input')
})

document.getElementById('checked-btn1').addEventListener('click', function () {
    const b = getInnerValueById('para-input1')
    const h = getInnerValueById('para-input2')
    if (isNaN(b) || b<= 0 || isNaN(h) || h <= 0) {
        return alert('Cannt take the empty element')
    } else {
        document.getElementById('baseOfparallelogram').innerText = b
        document.getElementById('heightOfparallelogram').innerText = h
        makingDisplayNone('taking-para-input')
    }
})

// ============================
//rhombus-card-btn event
// ============================
document.getElementById('rhombus-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name4');
    const d1 = getInnerValueById('rhombus-d1')
    const d2 = getInnerValueById('rhombus-d2')
    const area = 0.5 * d1 * d2;
    validationCheck(name, d1, d2, area)
})

//pentagon-card-btn event
document.getElementById('pentagon-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name5');
    const p = getInnerTextInNumberById('pentagon-p')
    const b = getInnerTextInNumberById('pentagon-b')
    const area = 0.5 * p * b;
    validationCheck(name, p, b, area)
})
document.getElementById('pentagon-edit').addEventListener('click', function () {
    makingDisplayBlock('taking-penta-input')
})

document.getElementById('checked-btn2').addEventListener('click', function () {
    const b = getInnerValueById('penta-input1')
    const h = getInnerValueById('penta-input2')
    if (isNaN(b) || b<= 0 || isNaN(h) || h <= 0) {
        return alert('Cannt take the empty element')
    } else {
        document.getElementById('pentagon-p').innerText = b
        document.getElementById('pentagon-b').innerText = h
        makingDisplayNone('taking-penta-input')
    }
})

//============================
//ellipse-card-btn event
//==================================
document.getElementById('ellipse-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name6');
    const a = getInnerTextInNumberById('ellipse-a')
    const b = getInnerTextInNumberById('ellipse-b')
    const Π = 3.1416;
    const area = Π * a * b;
    validationCheck(name, a, b, area)
})
document.getElementById('ellipse-edit').addEventListener('click', function () {
    makingDisplayBlock('taking-ellipse-input')
})

document.getElementById('checked-btn3').addEventListener('click', function () {
    
    const store1 = getInnerValueById('ellipse-input1')
    const store2 = getInnerValueById('ellipse-input2')
    if (isNaN(store1) || store1<= 0 || isNaN(store2) || store2 <= 0) {
        return alert('Please insert a valid number')
    } else {
        document.getElementById('ellipse-a').innerText = store1
        document.getElementById('ellipse-b').innerText = store2
        makingDisplayNone('taking-ellipse-input')
    }
})