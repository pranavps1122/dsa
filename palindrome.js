function palindrome(n,left=0,right=n.length-1){
    if(left>right){
        return true
    }
    if(n[left]!==n[right]){
        return false
    }

    return palindrome(n,left+1,right-1)
}
let str='racecar'
console.log(palindrome(str))