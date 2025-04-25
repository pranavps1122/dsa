function reverseArray(arr,left=0,right=arr.length-1){
    if(left>=right){
        return arr
    }

        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
    

    return reverseArray(arr,left+1,right-1)
}
const arr=[1,2,3,4,5]
console.log(reverseArray(arr))