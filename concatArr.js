// var items = [1, 2,'a','b','c']
// var newItems = items.concat(3,4,5)

// console.log(newItems)


var people = [
    {
        name : 'iman'
    }
    ,
    {
        name : 'ardiansyah'
    }
]


var people2 = [
    {
        name : 'ayu'
    }
    ,
    {
        name : 'ningtias'
    }
]

var people3 = [
    {
        name : 'sabina'
    },

    {
        name : 'moreau'
    }
]

people
.concat(people2)
.concat(people3)
.forEach(function(person) {
    console.log(person.name)
})
