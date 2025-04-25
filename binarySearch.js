var search = function(nums, target,left=0,right=nums.length-1) {
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)

    if(nums[mid]===target){
        return mid
    }
    if(nums[mid]>target){
        return search(nums,target,left,mid+1)
    }
    return search(nums,target,mid-1,right)
};

const arr=[1,2,3,4,5,6]
const target=4
console.log(search(arr,target))