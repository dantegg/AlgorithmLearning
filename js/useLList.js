let LList = require('./linkedList')

var cities = new LList()
cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")
cities.insert("Alma", "Russellville")
cities.display()