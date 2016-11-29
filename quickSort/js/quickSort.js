/**
 * Created by dantegg on 2016/11/29.
 */


function quickSort(arr,left,right) {
    var len = arr.length
    var partitionIndex
    var left = typeof left != 'number'?0:left
    var right = typeof right != 'number'?len-1:right

    if(left<right){
        partitionIndex = partition(arr,left,right)
        quickSort(arr,left,partitionIndex-1)
        quickSort(arr,partitionIndex+1,right)
    }

    return arr
}


function partition(arr,left,right) {
    var pivot = left
    var index = pivot +1
    for(var i=index;i<=right;i++){
        if(arr[i]<arr[pivot]){
            swap(arr,i,index)
            index++
        }
    }

    swap(arr,pivot,index-1)
    return index-1
}


function swap(arr,i,j) {
    var temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

var testArray= [23,54,63,78,51,83,26,53,37,53,39,18,2,5,44]

console.log('sorted array is',quickSort(testArray))