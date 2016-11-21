/**
 * Created by dantegg on 2016/11/21.
 */
function insertSort(arr){
    var len = arr.length
    var preIndex,current
    for(var i=1;i<len;i++){
        preIndex = i -1
        current=arr[i]
        while (preIndex>=0&&arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex]
            preIndex--
        }
        arr[preIndex+1]=current
    }
    return arr
}


let testArray = [3,5,53,33,4,47,19,50,26,38,25]

console.log('insert sorted array is',insertSort(testArray))