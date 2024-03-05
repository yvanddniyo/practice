export function sayHi () {
    console.log('Hello there!')
}

interface Person {
    name: string,
    age: number
}

function sayYo(person: Person){
    console.log(`Hi ${person.name}`)
}

sayYo({
    name: 'john',
    age: 40
})

// applying the type alias

type Person4 = {
    name: string;
    age: number;
  };
  
  function sayYes(person: Person4) {
    console.log(`Hi ${person.name}`);
  }
  
  sayYes({
    name: 'John',
    age: 48,
  }); // Hi John

  //  an object type could be defined anonymously

  function sayNo (person: {name: string; age: number}) { 
    console.log(`Hi ${person.name}`);
  }

  sayNo({
    name: 'yvan', age: 29
  })

  // INTERFACE CAN BE EXTENDABLE 
   
  interface Animal {
    name: string
  }

  interface Bear extends Animal {
    honey: boolean
  }

  const bear: Bear = {
    name: 'Winner',
    honey: true
  }