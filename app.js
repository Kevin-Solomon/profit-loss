const initialPrice = document.querySelector('#initial-price')
const quantity = document.querySelector('#quantity')
const currPrice = document.querySelector('#current-price')
const outputDiv = document.querySelector('#output-box')
document.addEventListener('submit', submitHandler)
function submitHandler(e) {
  e.preventDefault()
  let ip = Number(initialPrice.value)
  let qty = Number(quantity.value)
  let curr = Number(currPrice.value)
  calculateProfitLoss(ip, qty, curr)
}
function calculateProfitLoss(initialPrice, quantity, currPrice) {
  if (initialPrice > currPrice) {
    let loss = (initialPrice - currPrice) * quantity;
    let lossPercentage = (loss / initialPrice) * 100;
    outputDiv.innerText = (`Hey the loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)}%`)

  }
  else if (currPrice > initialPrice) {
    let profit = (currPrice - initialPrice) * quantity;
    let profitPercentage = (profit / initialPrice) * 100;
    outputDiv.innerText = (`Hey the profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)}%`)

  }
  else {
    outputDiv.innerText = "no pain no gain"
  }
}