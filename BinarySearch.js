let Arr = [2,5,7,34,54,65,75,87];
let start = 0;
let end = Arr.length - 1;
let Position = undefined;
let FindNum = 75;

while(start <= end) {
    let mid = Math.floor((start + end)/2);
   if(Arr[mid] === FindNum) {
   Position =  mid
    break;
   } else if(Arr[mid] < FindNum) {
    start = mid + 1;
   } else {
    end = mid - 1
   }
}

console.log(Position)
