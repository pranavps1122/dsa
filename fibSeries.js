function fibSeries(n){

   if(n<2){
    return n
   }

    return fibSeries(n-1)+fibSeries(n-2)
}

function print(k){
    for(let i=0;i<k;i++){
        console.log(fibSeries(i))
    }
}
print(6)