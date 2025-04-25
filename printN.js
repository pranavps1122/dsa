function printN(n,i=1){
    if(n<i){
        return 
    }
    console.log(i)

    return printN(n,i+1)
}
printN(10)