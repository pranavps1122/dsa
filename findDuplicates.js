function duplicates(arr,index=0,res=[]){

    if(index==arr.length){
        return res
    }

   if(!res.includes(arr[index])){
    res.push(arr[index])
   }

   return duplicates(arr,index+1,res)
}
const arr=[1,2,1,2,3,4,4,2,1];
console.log(duplicates(arr))