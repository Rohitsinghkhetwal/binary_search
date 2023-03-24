let Arr = [];
let currentSize = Arr.length;

function push(newVal) {
    Arr[currentSize] = newVal;
    currentSize+=1;
}


function pop() {
    lastRemovedItem = Arr[currentSize -1 ]
    currentSize-=1;
    Arr.length = currentSize;
    return lastRemovedItem;
}

function RevArr(item) {
    //traversing each element
    for(let i = 0; i < item.length ; i++) {
        push(item[i])
    }
    for(let j = 0; j < item.length ; j++) {
        console.log(pop())
    }

}

 
 let str = "Rajesh";
 str = str.split("");
 RevArr(str);
console.log("stack",Arr)
