/**
 * Created by dantegg on 2016/11/16.
 */


function bubbleSort(arr) {
    let len = arr.length
    for(let i = 0;i<len;i++){
        for(let j = 0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

let testArray = [3,50,23,4,33,53,123,25,31,11,32,65,77,71,90]

let sortedArray = bubbleSort(testArray)

console.log('sorted array is',sortedArray)