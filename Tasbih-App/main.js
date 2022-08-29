const countEl = document.getElementById('count-el')
const increaseEl = document.querySelector('.increase')
const decreaseEl = document.querySelector('.decrease')
const resetEl = document.querySelector('.reset')

let count = 0;

increaseEl.addEventListener('click', function() {
  count += 1
  countEl.textContent = count
})

decreaseEl.addEventListener('click', function() {
  if (count <= 0) {
    return
  }

  count -= 1
  countEl.textContent = count
})

resetEl.addEventListener('click', function() {
  count = 0
  countEl.textContent = count
})