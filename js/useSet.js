var Set = require('./setFunc')
var names = new Set()

names.add('David')
names.add('Jennifer')
names.add('Cynthia')
names.add('Mike')
names.add('Raymond')
if (names.add('Mike')) {
    console.log('Mike added')
} else {
    console.log('Can\'t add Mike, must already be in set')
}

console.log(names.show())

var removed = 'Raymond'
if (names.remove(removed)) {
    console.log(removed + 'removed')
} else {
    console.log(removed+ 'not removed')
}

names.add('Clayton')
console.log(names.show())
removed = 'Alisa'
if (names.remove(removed)) {
    console.log(removed + 'removed')
} else {
    console.log(removed + 'not removed')
}