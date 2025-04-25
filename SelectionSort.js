function Selection (arr){
    let n=arr.length
    for(let i=0;i<n;i++){
        let minIndex=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            let temp=arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex]=temp
        }
    }
    return arr
}
const arr=[1,3,5,2,4,6]
console.log(Selection(arr))