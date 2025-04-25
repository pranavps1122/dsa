function linear(arr,target,index=0){
    if(index==arr.length){
        return -1
    }

    if(arr[index]==target){
        return index
    }

    return linear(arr,target,index+1)
}
const arr=[1,2,3,4,5];
const target=2
console.log(linear(arr,target))