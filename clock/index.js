const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

const toDegrees = (time, base) => time / base * 360 + 90

function setDate() {
  const now = new Date()
  hourHand.style.transform = `rotate(${toDegrees(now.getSeconds(), 60)}deg)`
  minuteHand.style.transform = `rotate(${toDegrees(now.getMinutes(), 60)}deg)`
  secondHand.style.transform = `rotate(${toDegrees(now.getHours(), 12)}deg)`
}

setInterval(setDate, 1000)
