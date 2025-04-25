function Number (n,s=`${n}`,index=0,res=0){
    if(index==s.length){
        return res
    }

    return Number(n,s,index+1,res+s[index]*1)
}
console.log(Number(1234567))