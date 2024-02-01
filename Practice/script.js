const inputSide = document.getElementById('text')
const searchBtn = document.getElementById('search')
const outputText = document.getElementById('output')

let getRes = ''

const haha = () =>{
    outputText.innerHTML = getRes
}

const getValue = ( ) => {
    const realIn = inputSide.value
    const  returnedText = realIn.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const patterns = returnedText .split('').reverse().join('')
    const getString = realIn.toString()
    console.log(getString);
    if (getString.length === 0) {
         alert('please Enter the real value')
         return false;
    }
    else if (returnedText === patterns) {
     outputText.innerHTML = `
      <p>This word is a pendurulum</p>
      <p>Thanks for working with us.</p>
     `
    }else {
        outputText.innerHTML = `
      <p class="outWrong">This word is not a pendurulum</p>
     ` 
    }
}
haha()

searchBtn.addEventListener('click', getValue)