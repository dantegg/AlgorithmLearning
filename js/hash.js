function HashTable () {
    this.table = new Array(137)
    this.simpleHash = simpleHash
    this.betterHash = betterHash
    this.showDistro = showDistro
    this.put = put
    // this.get = get
}

function simpleHash(data) {
    var total = 0
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i)
    }
    // console.log("Hash value:" + data + " -> " + total)
    return total % this.table.length
}

function put(key, data) {
    // var pos = this.simpleHash(data)
    var pos = this.betterHash(key)
    this.table[pos] = data
}

function get(key) {
    return this.table[this.betterHash(key)]
}

function showDistro() {
    var n = 0
    for (var i=0; i < this.table.length; ++i) {
        if (this.table[i] !== undefined) {
            console.log(i + ': '+ this.table[i])
        }
    }
}

function betterHash(string) {
    const H = 37
    var total = 0
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i)
    }
    total = total % this.table.length
    if (total < 0) {
        total += this.table.length -1
    }
    return parseInt(total)
}

module.exports = HashTable