class Stack {
    item = [];
    currentSize;
    maxSize;

    constructor(size) {
      this.maxSize = size;
      this.currentSize = this.item.length;
    }

    push(Num) {
        if(this.currentSize >= this.maxSize) {
            console.log("Stack is full");
        } else{
            this.item[this.currentSize] = Num;
            this.currentSize++;
        }
    }

    pop(){
        if(this.currentSize == 0) {
            console.log("Stack is Empty!");
        } else{
            this.currentSize--;
            this.item.length = this.currentSize;
        }
    }


    display() {
        console.log("The items are :", this.item)
    }

}

const result = new Stack(5);
result.push(2);
result.push(2);
result.push(2);
result.pop()
result.pop()



result.display()


