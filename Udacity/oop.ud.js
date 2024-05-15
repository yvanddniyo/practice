// how to make object is mutable.

const cat = {
    name: 'kity',
    legs : 3,
   howItSounds(){ 
     console.log('moew')
   }
}
cat.legs = 2
// console.log(cat.legs)

const printer = {}
printer.on = true
printer.ownedBy = "Norresken"
printer["madeOf"] = "steel"
printer.color  = function() {
    console.log("color of the printer is the black!")
}
 // you can delete also the property with the objects
 delete printer.color
console.log(printer)

//passing parameters

const originalObject = {
    favoriteColor : "red"
}

function setToBlue (object) {
    object.favoriteColor = "blue"
}
setToBlue(originalObject)

// another example.

let string = "orange"

const checkFruit = (string)  => {
    string = "apple"
}

checkFruit(string)
console.log(string)
// console.log(originalObject)