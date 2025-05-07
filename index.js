// Iteration 1: Names and Input
let hacker1 = "Maedeh";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rishi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length === hacker2Length){
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!.`);
}
else if(hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}


// Iteration 3: Loops
let result = ``;

for (let i = 0; i < hacker1.length; i++){
    result += (hacker1[i].toUpperCase() + " ");  
}
console.log(result)



let reverseHacker2 =``;

for (let j = hacker2.length -1; j >= 0 ; j--){
   reverseHacker2 += (hacker2[j])
}
console.log(reverseHacker2)


// ?????
if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
} 
else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

for (let x = 0; x < hacker1.length; x++){
        if(hacker1[x] < hacker2[x]){
            console.log("The driver's name goes first.");
            break;
        } 
        else if(hacker1[x] > hacker2[x]){
            console.log("Yo, the navigator goes first, definitely.");
            break;
        }
       
    
}
