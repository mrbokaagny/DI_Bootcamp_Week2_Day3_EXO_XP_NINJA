// creation des object

let mypersonObject_1 = {
    FullName : "Boka Agny Ble Romaric-Rocephin",
    Mass : 74,
    Height : 1.85,
    calculatorBMI : function () {
        return (this.Mass/Math.pow(this.Height, 2)); 
    }
}

let mypersonObject_2 = {
    FullName : "Charlène Cissé",
    Mass :70,
    Height : 1.56,
    calculatorBMI : function () {
        return (this.Mass/Math.pow(this.Height, 2));
    }
}

//fonction de comparaison de deux BMI
function BMIcomparator(person_1, person_2){
    if(person_1.BMICalculator() > person_2.BMICalculator())
        console.log(`the person who have the largest BMI is : ${person_1.FullName}`);
    else
        console.log(`the person who have the largest BMI is : ${person_2.FullName}`);
}

BMIcomparator(mypersonObject_1, mypersonObject_2)