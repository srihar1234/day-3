let obj1 ={
    name:"person1",
    age : 5
};
let obj2={
    age : 5,
    name:"person1",
};
let keys1 = Object.keys(obj1).sort();
let keys2 = Object.keys(obj2).sort();
let v1 = Object.values(obj1).sort();
let v2 = Object.values(obj2).sort();
let value = false;
 if(keys1.length == keys2.length){
            if(JSON.stringify(keys1) === JSON.stringify(keys2) && JSON.stringify(v1) === JSON.stringify(v2)){
                value=true;
            }else{
                value=false;
            }    
    console.log(value);
}else{ 
    console.log(value);
    }
