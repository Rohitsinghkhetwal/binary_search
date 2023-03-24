// function Recur(x) {
//     //head recursion
//     if(x > 0) {
//         Recur(x - 1)
//     } 
//     //tail recursion
//     console.log(x);
// }

// const num = 5;
// Recur(num);

let arr = [23,54,65,2,65,77,86,87,12,4];
let temp;

function revArr(data, start, end) {
    console.log(arr)
    
    if(start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        revArr(data, start + 1, end - 1)
        

    }
   

}

revArr(arr, 0, arr.length - 1);