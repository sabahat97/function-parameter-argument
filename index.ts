// parameters and arguments

//ex 1

function teachers (sara: string , saba: string , sam: string): string{
    return  sara + saba + sam 
 }
 let totall: string = teachers('sara', "saba" ,"sam")
 console.log (totall);
 
 //ex 2 
 
 function adress( country:string, city:string, area: string): string{
     return country + city + area
 }
 const resident : string = adress("pakistan", "karachi",  "defence" );
 console.log(resident);
 
  //ex 3
  function addnumbers(a:number, b : number ):number {
     return a + b ;
    
    }
    let response = addnumbers(510,1)       
     console.log (response);
    
    //ex 4
    function soldlaptop(laptop :number, sold :number){
        return laptop % sold
    }
    let remender =soldlaptop (10, 6)        //invoking the function
    console.log (remender);
    
    //ex 5
    function carsdetail (modelname : string, year : string, company : string){
        return modelname +","+  year +","+ company
    }
    let car = carsdetail("Corolla Altis X" , "2024", "toyota");      //invoking the function
 
    console.log (car);
 
    //ex 6 
 
    function bike (model:string, year:number){
     return model + year
    }
    //invoking the function
    let detail = bike("honda250 \n", 2024);  //output honda250
    console.log(detail)                      // 2024