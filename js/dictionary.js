function Dictionary() {
    this.datastore = new Array()
    this.add = add
    this.find = find
    this.remove = remove
    this.showAll = showAll
    this.count = count
    this.clear = clear
    this.sort = sort
}

function add(key, value){
    this.datastore[key] = value
}

function find(key) {
    return this.datastore[key]
}

function remove(key) {
    delete this.datastore[key]
}

function showAll() {
    // var datakeys = Array.prototype.slice.call(Object.keys(this.datastore))
    // for(var key in datakeys) {
    //     console.log(datakeys[key]+' -> '+this.datastore[datakeys[key]])
    // }
    for (var key in Object.keys(this.datastore).sort()) {
        print (key + '->' + this.datastore[key])
    }
}

function count() {
    var n = 0
    for(var key in Object.keys(this.datastore)) {
        ++n
    }
    return n
}

function clear() {
    Object.keys(this.datastore).forEach(function(key) {
        delete this.datastore[key]
    }, this)
}

module.exports = Dictionary