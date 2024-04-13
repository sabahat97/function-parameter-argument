//ex 1:- eggs cook in method of parameter function and default parameter
function egg(salt: string, eggs: string, oil: string): string {
  return salt + eggs + oil;
}
let cook: string = egg(
  "salt as per your taste",
  "\ntake 2 eggs\n",       //output salt as per your taste  
 "2 table spoon oil"      //2 table spoon oil
);                        //2 table spoon oil
console.log(cook); 

//defeault parameter
function eggs(salt : string = "salt as per your taste\n", eggs : string = "add 3 eggs\n", oil : string ="2 table spoon"):string {
return salt + eggs + oil
};
let response : string = eggs ("salt as per your taste\n", "add 3 eggs\n",  "oil 4 tablespoon");   
                                   //output salt as per your taste
                                   //add 3 eggs
 console.log (response);          //oil 4 tablespoon


//ex 2 := make a teachers name in method parameter and deafault parameter
function teachers (name1 : string, name2 : string, name3 : string): string
{
    return name1 + name2 + name3 
}
let teacherNames : string = teachers("Ali ", " Sara ", " Zara ");
console.log(teacherNames);   //output Ali  Sara  Zara

//default parameter
function teacherss(name1 : string = "Ali", name2: string = " Sara", name3:string =" Zara",):string{
    return name1 + name2 + name3
}
 let teacher : string = teacherss("Farah ", "Zara", " Sara", );     //output Farah Zara Sara 
 console.log(teacher);