function binary(arr,target){
    left = 0
    right=arr.length-1
    
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            left=mid+1
            
        }else{
            right=mid-1
        }
    }
 return -1
    
}
const arr=[1,2,3,4,5]
const target=40
console.log(binary(arr,target))