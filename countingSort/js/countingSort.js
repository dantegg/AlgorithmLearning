/**
 * Created by dantegg on 2016/12/18.
 */
function countingSort(arr,maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0,
        arrLen = arr.length,
        bucketLen = maxValue +1

    for(var i =0;i<arrLen;i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]] = 0
        }
        bucket[arr[i]]++
    }


    for(var j=0;j<bucketLen;j++){
        while (bucket[j]>0){
            arr[sortedIndex++] = j
            bucket[j]--
        }
    }

    return arr
}


let testArray = [2,3,7,2,5,6,7,1,2,6,8,9,10,3,4,6,1,8,4,8,2]

let sortedArray = countingSort(testArray,10)

console.log('sorted array is',sortedArray)