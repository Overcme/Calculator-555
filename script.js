console.log("Hello");

function calcLunch(items) {
    let lunchCost = 0;
    for (let item of items) {
        let dish = item.split(":");
        lunchCost = lunchCost + parseInt(dish[1]);
    }
    return [lunchCost, lunchCost/items.length];
}

function changeCalc() {
    let currentValue = document.querySelector("#calc").value;
    console.log(`Changed background theme: ${currentValue.value}`);
    document.body.style.background = currentValue;

    let fDiv = document.querySelector("#f-div");
    let rDiv = document.querySelector("#r-div");
    let dDiv = document.querySelector("#d-div");

    if (currentValue === "f") {
        fDiv.style.display = 'block';
        rDiv.style.display = 'none';
        dDiv.style.display = 'none';
    }
    else if (currentValue === "r") {
        fDiv.style.display = 'none';
        rDiv.style.display = 'block';
        dDiv.style.display = 'none';
    }
    else if (currentValue === "d") {
        fDiv.style.display = 'none';
        rDiv.style.display = 'none';
        dDiv.style.display = 'block';
    }
    return currentValue.value;
}

function changeBg() {
    let currentValue = document.querySelector("#bgs").value;
    console.log(`Changed background theme: ${currentValue.value}`);
    document.body.style.background = currentValue;
    return currentValue.value;
}
// function showResults() {}

function onButtonClick1() {
    let results = document.querySelector("#resultsFre");
    let textRa  = document.querySelector("#ra").value;
    let textRb  = document.querySelector("#rb").value;
    let textC   = document.querySelector("#c1").value;
    
    let selectRa = document.querySelector("#sra").value;
    let selectRb = document.querySelector("#srb").value;
    let selectC = document.querySelector("#src1").value;

    let Ra = parseInt(textRa) * 10 ** parseInt(selectRa);
    let Rb = parseInt(textRb) * 10 ** parseInt(selectRb);
    let C  = parseInt(textC) * 10 ** parseInt(selectC);

    let f = 1.44 / ((Ra + 2*Rb) * C);
    f = f.toFixed(2);

    console.log("Ra=", Ra, "Rb=", Rb, "C=", C);
    console.log(`NE555 Output signal frequency: ${f} Hz`)

    results.textContent = `frequency = ${f} Hz`;
}

function onButtonClick2() {
    let results = document.querySelector("#resultsRe");
    let textF  = document.querySelector("#f").value;
    let textC   = document.querySelector("#c2").value;
    
    let selectF = document.querySelector("#srf").value;
    let selectC = document.querySelector("#src2").value;

    let f = parseInt(textF) * 10 ** parseInt(selectF);
    let C  = parseInt(textC) * 10 ** parseInt(selectC);

    let Ra = (1.44 * (2 * 0.51 - 1)) / (f * C);
    Ra = Ra.toFixed(1);
    let Rb = (1.44 * (1 - 0.51)) / (f * C);
    Rb = Rb.toFixed(1);

    console.log("f=", f, "C=", C);
    console.log(`Ra: ${Ra} Ohm, Rb: ${Rb} Ohm`)

    results.textContent = `Ra = ${Ra} Ohm, Rb = ${Rb} Ohm`;
}

function onButtonClick3() {
    let results = document.querySelector("#resultsD");
    let textRa  = document.querySelector("#R1").value;
    let textRb   = document.querySelector("#R2").value;
    
    let selectRa = document.querySelector("#sr1").value;
    let selectRb = document.querySelector("#sr2").value;

    let Ra = parseInt(textRa) * 10 ** parseInt(selectRa);
    let Rb  = parseInt(textRb) * 10 ** parseInt(selectRb);

    let D = ((Ra + Rb) / (Ra + 2 * Rb)) * 100;
    D = D.toFixed(0);

    console.log("Ra=", Ra, "Rb=", Rb);
    console.log(`D: ${D} %`)

    results.textContent = `D = ${D} %`;
}
// function whatThreeD(root, cooked) {
//     console.log("hello!");
//     console.log(root*cooked);
// }

// whatThreeD(2, 6);
//<link rel="stylesheet" href="style.css">
// let x = 10;
// let y = 2;
//let textInput = document.querySelector("#merphy1");
//alert(`Why have you just pressed me!? Get away "${text.value}"!`)

/*
    if (cleanTextInput == "") {
        alert("Please, enter your lunch items!");
    }
    else {
        let lunchItems = cleanTextInput.split(",");
        console.log(lunchItems);
        let lunchCosts = calcLunch(lunchItems);
        console.log(`Total cost: ${lunchCosts[0]} RUB`);
        console.log(`Avg dish cost: ${lunchCosts[1]} RUB`);

        results.textContent = `Total cost: ${lunchCosts[0]} RUB; \n Average dish cost: ${lunchCosts[1]} RUB`;
    }
}


*/
