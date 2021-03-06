function Set() {
    this.dataStore = []
    this.add = add
    this.remove = remove
    this.union = union
    this.contains = contains
    this.intersect = intersect
    this.subset = subset
    this.size = size
    this.difference = difference
    this.show = show
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data)
        return true
    } else {
        return false
    }
}

function size() {
    return this.dataStore.length
}

function remove(data) {
    var pos = this.dataStore.indexOf(data)
    if (pos > -1) {
        this.dataStore.splice(pos, 1)
        return true
    } else {
        return false
    }
}

function show() {
    return this.dataStore
}

function contains(data) {
   const _contain =  this.dataStore.indexOf(data) > -1
   console.log(_contain)
   return _contain
}

function union(set) {
    var tempSet = new Set()
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i])
    }
    for(var i = 0; i < set.dataStore.length; ++i) {
        if(!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i])
        }
    }
    return tempSet
}

function intersect(set) {
    var _tempSet = new Set()
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            _tempSet.add(this.dataStore[i])
        }
    }
    return _tempSet
}

function subset(set) {
    if (this.size()>set.size()) {
        return false
    } else {
        for (var i in this.dataStore) {
            if (!set.contains(this.dataStore[i])) {
                return false
            }
        }
    }
    return true
}

function difference(set) {
    var _tempSet = new Set()
    for(var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            _tempSet.add(this.dataStore[i])
        }
    }
    return _tempSet
}
module.exports = Set