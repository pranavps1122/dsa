class Node {
    constructor(){
        this.children ={}
        this.endWord = false
    }
}
class Trie {
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch] = new Node
            }
            node = node.children[ch]
        }
        node.endWord = true
    }
    getSuggestion(prefix){
        let node = this.root
        for(let ch of prefix){
            if(!node.children[ch]){
                return []
            }
            node=node.children[ch]
        }
        const result =[]
        const dfs = (curr,path)=>{
            if(curr.endWord){
                result.push(path)
            }
            for(let ch in curr.children){
                dfs(curr.children[ch],path+ch)
            }
        }
        dfs(node,prefix)
        return result
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apex");
trie.insert("bat");
trie.insert("banana");
console.log(trie.getSuggestion('app'))