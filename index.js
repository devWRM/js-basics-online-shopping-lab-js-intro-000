var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
 // write your code here

var randomPrice = (Math.floor(Math.random() * 100) + 1);
cart.push({itemName: item, itemPrice: randomPrice});
return `${item} has been added to your cart.`;

}




function viewCart() {
  // write your code here
    if (cart.length == 0) {
      return `Your shopping cart is empty.`;
    }

    var cartIntro = `In your cart, you have`;
    var itemsInCart = [];

    for (var i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
          itemsInCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else if (i === cart.length - 1) {
          itemsInCart.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else {
          itemsInCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
    }

    return cartIntro + itemsInCart;
}



function total() {
  // write your code here
  if (cart.length == 0) {
		return `Your shopping cart is empty.`;
	}

	var cartTotal = 0;
	for (var i = 0; i < cart.length; i++) {
		cartTotal = cartTotal + cart[i].itemPrice;
	}

	return cartTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
