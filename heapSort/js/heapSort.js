/**
 * Created by dantegg on 2016/12/17.
 */

var len

function buildMaxHeap(arr) {
    len = arr.length
    for(var i = Math.floor(len/2);i>=0;i--){
        heapify(arr,i)
    }
}

function heapify(arr,i) {
    var left = 2*i+1,
        right = 2*i+2,
        largest = i
    if(left < len && arr[left]>arr[largest]){
        largest = left
    }

    if(right<len && arr[right]>arr[largest]){
        largest = right
    }

    if(largest!=i){
        swap(arr,i,largest)
        heapify(arr,largest)
    }
}


function swap(arr,i,j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function heapSort(arr) {
    buildMaxHeap(arr)
    for(var i =arr.length -1;i>0;i--){
        swap(arr,0,i)
        len--
        heapify(arr,0)
    }
    return arr
}

let testArray = [3,50,23,4,33,53,123,25,31,11,32,65,77,71,90]

let sortedArray = heapSort(testArray)

console.log('sorted array is',sortedArray)