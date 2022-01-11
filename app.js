const initialPrice = document.querySelector('#initial-price')
const quantity = document.querySelector('#quantity')
const currPrice = document.querySelector('#current-price')
const outputDiv = document.querySelector('#output-box')

//ES6 Implimentation
document.addEventListener('submit', e=>{
  e.preventDefault()
  let ip = +initialPrice.value
  let qty = +quantity.value
  let curr = +currPrice.value
  calculateProfitLoss(ip, qty, curr)
})

//ES6 Implimentation

const calculateProfitLoss = (initialPrice, quantity, currPrice)=>{
  if (initialPrice > currPrice) {
    let loss = (initialPrice - currPrice) * quantity;
    let lossPercentage = ((initialPrice - currPrice) * 100)/initialPrice;
    outputDiv.innerText = `Hey the loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)}%`

  }
  else if (currPrice > initialPrice) {
    let profit = (currPrice - initialPrice) * quantity;
    let profitPercentage =  ((currPrice - initialPrice) * 100) / initialPrice;
    outputDiv.innerText = `Hey the profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)}%`

  }
  else {
    outputDiv.innerText = "no pain no gain"
  }
}