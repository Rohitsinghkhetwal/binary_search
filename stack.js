let arr = [];
let currentSize = arr.length;
let max = 7;

function push(item) {
    arr[currentSize] = item;
    currentSize+= 1;
}
push(4);
push(5);
push(98);
push(400);
push(41);

function pop() {
    if(currentSize > 0) {
        currentSize-=1;
        arr.length = currentSize;
    }else{
        console.log("stack is empty");

    }
}

pop();
pop();
pop();
console.log(arr)