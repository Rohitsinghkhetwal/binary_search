let data = [43,54,65,3,54,65,34,12];

function yuo(data,indx) {
    //here base case will if index of arr will end function call will end
    if(indx == data.length) {
        return;

    }
    //here tail recursion will apply here
    //data will be the array and the index + 1 will increse the count of arr
    yuo(data,indx + 1);
    console.log(data[indx]);
}
let res = yuo(data, 0);
console.log(res)