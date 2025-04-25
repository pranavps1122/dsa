function reverse (n,s=`${n}`,end=s.length-1,res=''){
    if(end<0){
        return res
    }

    return reverse(n,s,end-1,res+s[end])
}
let n='pranav'
console.log(reverse(n))