function nReverse(n,i=10){
    if(i<1){
        return 
    }
    console.log(i)

    return nReverse(n,i-1)
}
nReverse(10)