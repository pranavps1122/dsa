function nextFib(n){
    if(n<2){
        return n
    }

    return nextFib(n-1)+nextFib(n-2)
}
console.log(nextFib(6))