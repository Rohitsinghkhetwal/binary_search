// inserting the element middle of the array
// let arr = [2,32,1,98,3,0,5,6];
// let newElem = 444;
// let postion = 4;

// for(let i = arr.length - 1; i >= 0; i--) {
//     if(i >= postion) {
//         arr[i + 1] = arr[i];
//         if(i === postion) {
//             arr[i] = newElem
//         }
//     }
// }
// console.log(arr);

//deleting the items from an arrays

// let elem = [2,6,1,8,23,87,21,65];
// let position = 5;
// for(let i = position; i < elem.length -1 ; i++) {
    
//     elem[i] = elem[i + 1];
    
// }
// elem.length = elem.length - 1
// console.log(elem);

// searching of elements of a array
let arr = [ 43, 454, 65, 76, 87, 54, 23];
let elem = 76;

for(let i = 0; i <= arr.length - 1; i++) {
    if(arr[i] === elem) {
        console.log(`Element found ${arr[i]} in the index of ${i}`);
    }
}