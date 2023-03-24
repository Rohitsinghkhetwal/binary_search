class Circular {
  constructor(size) {
    this.currentSize = 0;
    this.item = new Array(size);
    this.MAX = size;
    this.front = -1;
    this.rear = -1;
  }
  //enqueue method that adds the element in circular queue

  enqueue(Num) {
    if (this.currentSize != this.MAX) {
      if (this.rear == this.MAX - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }

      this.item[this.rear] = Num;
      this.currentSize++;
      if (this.front == -1) {
        this.rear = this.front;
      }
    }
  }

  //display method in queue class
  display() {
    console.log("The Items are : -", this.item)
  }

  //we will use dequeue method as drop one element from queue
  dequeue() {
    if(this.currentSize != 0) {
        this.item[this.front] = null;
        if(this.front == this.MAX - 1) {
            this.front = 0
        } else{
            this.front++
        }
        this.currentSize--;

    }else{
        this.front = 0;
        this.rear = 0;
        console.log("Queue is empty!")
    }
  }
}

const result = new Circular(5);

result.enqueue(22)
result.enqueue(45)
console.log(result);
