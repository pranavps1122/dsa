function sumArray(arr,index=0,res=0){
    if(index==arr.length){
        return res
    }

    return sumArray(arr,index+1,res+arr[index])
}
const arr=[1,2,3,4,5]
console.log(sumArray(arr))