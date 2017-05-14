var Dictionary = require('./dictionary')

var pbook = new Dictionary()

pbook.add("Mike", "123")
pbook.add("David", "345")
pbook.add("Cynthia", "456")
console.log("David's extension:"+pbook.find("David"))
pbook.remove("David")
console.log("Number of entries:" + pbook.count())
pbook.showAll()
pbook.clear()
console.log("Number of entries:"+pbook.count())