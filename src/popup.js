var input = document.getElementById('input')
var output = document.getElementById('output')
console.log(output)

var encodeBtn = document.getElementById('encode-btn')
var decodeBtn = document.getElementById('decode-btn')

encodeBtn.addEventListener('click', () => {
  var type = document.querySelector('input[name="encodeType"]:checked').value || 2

  if (!input.value) {
    return
  }

  output.value = type == 2 ? encodeURIComponent(input.value) : encodeURI(input.value)
})

decodeBtn.addEventListener('click', () => {
  var type = document.querySelector('input[name="encodeType"]:checked').value || 2

  if (!output.value) {
    return
  }

  input.value = type == 2 ? decodeURIComponent(output.value) : decodeURI(output.value)
})