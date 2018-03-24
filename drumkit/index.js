const playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
  if (!audio) return
  audio.currentTime = 0 // rewinds to start
  audio.play()
  key.classList.add('playing') // add, remove, toggle
}

// Can't be a => or lose ctx of this.
function removeTransition(e) {
  e.propertyName === 'transform' ? this.classList.remove('playing') : null
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
