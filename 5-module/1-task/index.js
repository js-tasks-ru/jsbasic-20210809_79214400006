function hideSelf() {

  let button = document.querySelector('.hide-self-button')
  let hidden = () => { button.setAttribute('hidden', '') }
  button.addEventListener('click', hidden)
  
}
