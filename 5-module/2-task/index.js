function toggleText() {
  let button = document.querySelector('.toggle-text-button')
  let text = document.querySelector('#text')

  let hidden = () => { text.toggleAttribute('hidden') }
  button.addEventListener('click', hidden)

}
