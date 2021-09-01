function initCarousel() {

let LButton = document.querySelector('.carousel__arrow_left')
let RButton = document.querySelector('.carousel__arrow_right')
let slides = document.querySelector('.carousel__inner')
let width = slides.offsetWidth
let x = 0
let CCount = 0

if (CCount === 0){
  LButton.style.display = 'none'
}

let RClick = function() 
{ 
  x = x + width
  slides.style.transform = 'translateX('+ -x + 'px)' 
  CCount += 1
  if (CCount === 3){
    RButton.style.display = 'none'
  }
  if (CCount !== 0){
    LButton.style.display = ''
  }
  
}

let LClick = function() 
{ 
  x = x - width
  slides.style.transform = 'translateX('+ -x + 'px)' 
  CCount -= 1
  if (CCount === 0){
    LButton.style.display = 'none'
  }
  if (CCount !== 3){
    RButton.style.display = ''
  }
}

RButton.addEventListener('click', RClick)
LButton.addEventListener('click', LClick)

}
