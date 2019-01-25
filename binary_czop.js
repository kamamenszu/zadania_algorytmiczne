var myArray = [];

function createArrayWithIntegers(arr, number) {
    for (var i = 0; i <= number; i++) {
        arr.push(i);
    };
    return arr
};

var myNewArr = createArrayWithIntegers(myArray, 100);

function binaryChop(arr, expectedNumber, start, end) {
    var mid = Math.floor((start + end)/2);       
    
    while(mid>=0 && start <= end){
        
        if(arr[mid] === expectedNumber){
            return arr[mid] + " at index "+ mid;
        }
            else if(arr[mid] < expectedNumber){
                console.log("Inside <");
            return binaryChop(arr, expectedNumber, mid + 1, end);
        }
            else if(arr[mid] > expectedNumber){
                console.log("Inside >");
            return binaryChop(arr, expectedNumber, start, mid - 1);
        }
    }
        return -1;
}

binaryChop(myNewArr, 72, 0, myNewArr.length -1);