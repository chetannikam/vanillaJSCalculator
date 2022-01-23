let screen = document.getElementById('screen')
let screenVal = ''
let calculate = ''
let buttons = document.getElementsByTagName('button')
Array.from(buttons).forEach(button => {
  button.addEventListener('click', e => {
    screenVal = e.target.innerHTML

    if (screenVal === 'C') {
      screen.value = ''
      calculate = ''
    } else if (screenVal === 'X') {
      screen.value += screenVal
      calculate += '*'
    } else if (screenVal === '=') {
      console.log(calculate)
      screen.value = eval(calculate)
      calculate = screen.value
    } else {
      screen.value += screenVal
      calculate += screenVal
    }
  })
})
