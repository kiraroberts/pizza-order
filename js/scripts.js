// BACKEND LOGIC


function Pizza() {
  this.size
  this.meat
  this.vegetable
  this.sauce
}

function pizzaSize(size) {
  if {size === 1) {
    return 1
  } else {
    return 0
  }
}

function pizzaMeat(meat) {
  if (meat === 3) {
    return 3
  } else if (meat === 2) {
    return 2
  } else if (meat === 1) {
    return 1
  } else {
    return 0
  }
}

function pizzaVegetable(vegetable) {
  if (vegetable === 3) {
    return 2
  } else if (vegetable === 2) {
    return 2
  } else if (vegetable === 1) {
    return 1
  } else {
    return 0
  }
}

function pizzaSauce(sauce) {
  if (sauce === 2) {
    return 2
  } else {
    return 1
  }
}

var pizzaTotal = 0
var checkout = pizzaTotal;

Pizza.prototype.price = function() {
  pizzaTotal + pizzaSize(inputSize);
  pizzaTotal + pizzaMeat(inputMeat);
  pizzaTotal + pizzaVegetable(inputVegetable);
  pizzaTotal + pizzaSauce(inputSauce);
}

console.log(pizzaTotal);

// FRONT BACKEND

$(document).ready(function() {
  $("#formOrder".submit(function(event) {
    event.preventDefault();
  });
});
