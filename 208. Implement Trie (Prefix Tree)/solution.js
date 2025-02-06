

var Trie = function() {
    this.root = {}
    this.endSymbol = "*"
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node = this.root;
    for(var char of word){
        if(!node[char]) node[char] = {}
        node = node[char]
    }
    node[this.endSymbol] = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var node = this.root;
    for(var char of word){
        if(!node[char]) return false;
        node = node[char]
    }
    return node[this.endSymbol] == true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     var node = this.root;
    for(var char of prefix){
        if(!node[char]) return false;
        node = node[char]
    }
    return true
};
