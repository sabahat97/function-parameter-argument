"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ex 1:- eggs cook in method of parameter function and default parameter
function egg(salt, eggs, oil) {
    return salt + eggs + oil;
}
let cook = egg("salt as per your taste", "\ntake 2 eggs\n", //output salt as per your taste  
"2 table spoon oil" //2 table spoon oil
); //2 table spoon oil
console.log(cook);
//defeault parameter
function eggs(salt = "salt as per your taste\n", eggs = "add 3 eggs\n", oil = "2 table spoon") {
    return salt + eggs + oil;
}
;
let response = eggs("salt as per your taste\n", "add 3 eggs\n", "oil 4 tablespoon"); //output salt as per your taste
//add 3 eggs
console.log(response); //oil 4 tablespoon
//ex 2 := make a teachers name in method parameter and deafault parameter
function teachers(name1, name2, name3) {
    return name1 + name2 + name3;
}
let teacherNames = teachers("Ali ", " Sara ", " Zara ");
console.log(teacherNames); //output Ali  Sara  Zara
//default parameter
function teacherss(name1 = "Ali", name2 = " Sara", name3 = " Zara") {
    return name1 + name2 + name3;
}
let teacher = teacherss("Farah ", " Zara", " Sara"); //output Ali Sara Zara Farah
console.log(teacher);
