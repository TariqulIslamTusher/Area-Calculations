let serial = 0;
// triangle card button event
document.getElementById('triangle-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name1');
    const heigth = getInnerValueById('triangleInput1')
    const base = getInnerValueById('triangleInput2')
    const area = 0.5 * heigth * base
    makeTheTableData(serial, name, area.toFixed(2))
    return alert('Please enter a valid Number')

})

//ractangle-card-btn event
document.getElementById('ractangle-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name2');
    const width = getInnerValueById('ractangleInput1')
    const length = getInnerValueById('ractangleInput2')
    const area = width * length;

    makeTheTableData(serial, name, area.toFixed(2))
})

//parallelogram-card-btn event
document.getElementById('parallelogram-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name3');
    const base = getInnerTextInString('baseOfparallelogram')
    const height = getInnerTextInString('heightOfparallelogram')
    const area = base * height;

    makeTheTableData(serial, name, area.toFixed(2))
})

//rhombus-card-btn event
document.getElementById('rhombus-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name4');
    const d1 = getInnerTextInNumberById('rhombus-d1')
    const d2 = getInnerTextInNumberById('rhombus-d2')
    const area = 0.5 * d1 * d2;

    makeTheTableData(serial, name, area.toFixed(2))
})

//pentagon-card-btn event
document.getElementById('pentagon-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name5');
    const d1 = getInnerTextInNumberById('pentagon-p')
    const d2 = getInnerTextInNumberById('pentagon-b')
    const area = 0.5 * d1 * d2;

    makeTheTableData(serial, name, area.toFixed(2))
})

//ellipse-card-btn event
document.getElementById('ellipse-card-btn').addEventListener('click', function () {
    serial += 1;
    const name = getInnerTextInString('name6');
    const a = getInnerTextInNumberById('ellipse-a')
    const b = getInnerTextInNumberById('ellipse-b')
    const Π = 3.1416;
    const area = Π * a * b;

    makeTheTableData(serial, name, area.toFixed(2))
})