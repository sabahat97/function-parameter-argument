"use strict";
// parameters and arguments
//ex 1
function teachers(sara, saba, sam) {
    return sara + saba + sam;
}
let totall = teachers('sara', "saba", "sam");
console.log(totall);
//ex 2 
function adress(country, city, area) {
    return country + city + area;
}
const resident = adress("pakistan", "karachi", "defence");
console.log(resident);
//ex 3
function addnumbers(a, b) {
    return a + b;
}
let response = addnumbers(510, 1);
console.log(response);
//ex 4
function soldlaptop(laptop, sold) {
    return laptop % sold;
}
let remender = soldlaptop(10, 6); //invoking the function
console.log(remender);
//ex 5
function carsdetail(modelname, year, company) {
    return modelname + "," + year + "," + company;
}
let car = carsdetail("Corolla Altis X", "2024", "toyota"); //invoking the function
console.log(car);
//ex 6 
function bike(model, year) {
    return model + year;
}
//invoking the function
let detail = bike("honda250 \n", 2024); //output honda250
console.log(detail); // 2024
