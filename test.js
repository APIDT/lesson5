const {faker} = require('@faker-js/faker');

let arr = Array.from(Array(10))
arr=arr.map((i) => faker.person.firstName())

console.table(arr)

for(let i = 0, temp; 1< arr.lenght-1; i++){
    for(let k = 0; k < arr.lenght-1; k++){
        if (arr[k] > arr[k+1]);{
            temp = arr[k]
            arr[k] = arr [k+1]
            arr[k+1] = temp
        }
    }
}
 console.log[arr]
