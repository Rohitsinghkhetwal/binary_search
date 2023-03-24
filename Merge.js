let arr1 = [2,4,6,1,87,12,32];
let arr2 = [43, 6,43,20];
let result = [];
let d1 = 0;
let d2 = 0; 
let d3 = 0;

while(d1 < arr1.length && d2 < arr2.length) {
    if(arr1[d1] < arr2[d2]) {
        result[d3] = arr1[d1];
        d1++;
    
    } else {
        result[d3] = arr2[d2];
        d2++;
        
    }
    d3++;
}
console.log(result)



