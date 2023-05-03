let details1 = {
    name:"Hema",
    email:"123@gmail.com",
    age:"25",
    gender: "female"
    }
  
let details2 =  {
    name:"Hema",
    email:"123@gmail.com",
    gender: "female",
    age:"25"
    }

let flag = true;
for(let e in details1){
    
    if(details1[e]!==details2[e])
    {
        flag=false;
        break;
    }
}

flag?console.log("Equal"):console.log("Not Equal")
