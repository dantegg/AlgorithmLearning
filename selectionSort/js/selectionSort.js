'use strict'
function selectionSort(arr) {
    let len = arr.length
    var minIndex,temp
    for(let i = 0;i<len-1;i++){
        minIndex=i
        for(var j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        temp = arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }
    return arr
}

let testarray = [3,2,45,63,8,32,33,1,26,57,93,71,28]

console.log('sorted array is ',selectionSort(testarray))