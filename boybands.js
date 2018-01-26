let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const bandElement = document.getElementById("boy-bands");

const veggieElement = document.getElementById("vegetables");

for (let loopTracker = 0; loopTracker < 5 ; loopTracker += 1){
    
    const currentBand = bands[loopTracker] ;
    console.log(currentBand);
    bandElement.innerHTML += currentBand + "<p>";

    const currentVeggie = vegetables[loopTracker];
    console.log(currentVeggie);
    veggieElement.innerHTML += currentVeggie + "<p>";
}



