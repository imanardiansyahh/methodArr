var items = [1, 2,'a','b','c']
var newItems = items.concat(3,4,5)

console.log(newItems)


var people = [
    {
        name : 'iman'
    }
    ,
    {
        name : 'ardiansyah'
    }
]

people.forEach(function(person) {
    console.log(person.name)
})
