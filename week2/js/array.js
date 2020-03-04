//Declare the array
listOfFruit = ['Apple', 'Pear', 'Orange'];

console.log(listOfFruit[0]);
console.log(listOfFruit[1]);
console.log(listOfFruit[2]);

//Modify the contents of the existing array
listOfFruit[2]='Banana';
console.log(listOfFruit[2]);

//BOOM! BAD - WE DON'T HAVE A POSITION FOR THIS YET
//listOfFruit[3]='Strawberry';
//console.log(listOfFruit[3]);

countFruit = listOfFruit.length;
for(i=0; i<countFruit; i++) {
    console.log(`Fruit at position ${i} is ${listOfFruit[i]}`)
}

listOfDwarf = ['Dopey', 'Bashful', 'Sleepy'];
countDwarf = listOfDwarf.length;

for ( i=0; i<countDwarf; i++) {
    console.log(`Dwarf at position ${i} is ${listOfDwarf[i]}`)
}

listOfDwarf.push('Doc');
listOfDwarf.push('Happy');

console.log(listOfDwarf.join('-'));