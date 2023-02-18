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
document.getElementById('checked-btn1').addEventListener('click', function () {
    hideEditingDisplay('para-input1', 'para-input2', 'baseOfparallelogram', 'heightOfparallelogram', 'taking-para-input')
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
document.getElementById('checked-btn2').addEventListener('click', function () {
    hideEditingDisplay('penta-input1', 'penta-input2', 'pentagon-p', 'pentagon-b', 'taking-penta-input')
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
document.getElementById('checked-btn3').addEventListener('click', function () {
    hideEditingDisplay('ellipse-input1', 'ellipse-input2', 'ellipse-a', 'ellipse-b', 'taking-ellipse-input')
})