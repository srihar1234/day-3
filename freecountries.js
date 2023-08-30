
console.log("--------------------------------------------------------------------------");
console.log("2)DISPLAY FLAGS OF ALL COUNTRIES");
let freeCountries = new XMLHttpRequest();
freeCountries.open("GET","https://restcountries.com/v3.1/all");
freeCountries.send();
freeCountries.onload = function (){
    
    const data = JSON.parse(freeCountries.response);
    
    for(let i=0;i<data.length;i++){
        console.log(`
        name : ${data[i].name.common}
        flag png file: ${data[i].flags.png}
        `);
    }

console.log("--------------------------------------------------------------------------");
console.log("3)DISPLAY COUNTRIES NAME,REGION,SUB REGION,POPULATION");
for (let i=0;i<data.length;i++){
    console.log(`
          name: ${data[i].name.common}
          region: ${data[i].region}
          sub region: ${data[i].subregion}
          population: ${data[i].population}
    `);
}
}