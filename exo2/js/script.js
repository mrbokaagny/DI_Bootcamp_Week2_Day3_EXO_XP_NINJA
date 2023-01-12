// declaration du tableau de note

let gradesList = [10, 21, 12, 5, 51, 14, 58, 8];


function findAvg(gradesList) {
    let average = 0;
    let sumResult = 0;
    for(let item of gradesList) {
        sumResult+=item;
    }
    average = sumResult/gradesList.length; 

    console.log(`The average is : ${average}`);
    checking(average); 
}

function checking(average) {
    if(average > 65) {
        console.log("Successfully you can pass!");
        return;
    }
    console.log("wooh, sorry you faild, you must repeat the course");
}

findAvg(gradesList);