var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)
  var newItem = {[item]: itemPrice};
  cart.push(newItem)
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
  var returnStatement = 'In your cart, you have '
  var itemObj = {}
  var itemArray = []
  var item = undefined
  var itemPrice = undefined
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }else if(cart.length === 1) {
    for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      returnStatement = `In your cart, you have ${item} at $${itemPrice}.`
      console.log(returnStatement)
    }
    //console.log(returnStatement)
  }else if(cart.length === 2) {
    for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      if(i === 1) {
        returnStatement = returnStatement + ` and ${item} at $${itemPrice}.`
        console.log(returnStatement)
      }
      returnStatement = returnStatement + `${item} at $${itemPrice}`
    }

  }else if(cart.length >= 3) {
    // In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
     for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      if( i < cart.length - 1) {
        returnStatement = returnStatement + `${item} at $${itemPrice}, `
      }else if(i === cart.length -1) {
        returnStatement = returnStatement + `and ${item} at $${itemPrice}.`
      }
     }
    console.log(returnStatement)
  }
}

function total() {
  var itemObj = {}
  var itemArray = []
  var item = undefined
  var itemPrice = undefined
  var cartTotal = 0
  if(cart.length === 0) {
    return cartTotal
  }else {
  for(let i = 0; i < cart.length; i++) {
    itemObj = cart[i]
    itemArray = Object.keys(itemObj)
    item = itemArray[0]
    itemPrice = itemObj[item]
    cartTotal = cartTotal + itemPrice
  }
  return cartTotal
  }
}

function removeFromCart(item) {
  var itemObj = {}
  var itemArray = []
  var itemRef = undefined
  
  for(let i=0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item) === false) {
      console.log('That item is not in your cart')
      return cart
    } else {
      for(let j=0; j < cart.length; j++) {
        itemObj = cart[j]
        itemArray = Object.keys(itemObj)
        itemRef = itemArray[0]
        //if(cart[j].hasOwnProperty(item) === true)
        if(itemRef === item) {
          var cartUpdate = [...cart.slice(0,j), ...cart.slice(i+j)]
          cart = cartUpdate
        }
      }
    }
  return cart
}

function placeOrder(cardNumber) {

}
