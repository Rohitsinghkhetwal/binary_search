let Queue = [];
let currentSize = Queue.length;
let MAX = 5;

function enqueue(item) {
    if(currentSize >= MAX) {
        console.log("queue is full");
    } else{
        Queue[currentSize] = item;
        currentSize++; 
    }

}

function dequeue() {
    if(currentSize > 0) {
        for(let i = 0; i < currentSize; i++ ) {
            Queue[i] = Queue[i + 1];
        }
        currentSize--;
        Queue.length = currentSize

    }else{
        console.log("Queue is already empty!")
    }

    
}

enqueue(10);
enqueue(20);
enqueue(30);
dequeue()
dequeue()
dequeue()
dequeue()

console.log(Queue)