// find multiplication of three and replace with 0

function find(arr,index=0){
    if(index===arr.length){
        return arr
    }

    if(arr[index]%3==0){
        arr[index]=0
    }

    return find(arr,index+1)
}
const arr=[1,2,3,4,5,6,7,8,9]

console.log(find(arr))