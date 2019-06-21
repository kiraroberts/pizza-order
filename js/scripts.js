// BACKEND LOGIC

function Pizza(size, meat, vegetable, sauce) {
  this.size = 0,
  this.meat = 0,
  this.vegetable = 0,
  this.sauce = 0
}

var pizzaOrder = new Pizza()

function pizzaSize(size) {
  if (size === 2) {
    return 4
  } else {
    return 0
  }
}

function pizzaMeat(meat) {
  if (meat === 4) {
    return 2
  } else if (meat === 3) {
    return 2
  } else if (meat === 2) {
    return 1
  } else {
    return 0
  }
}

function pizzaVegetable(vegetable) {
  if (vegetable === 4) {
    return 2
  } else if (vegetable === 3) {
    return 2
  } else if (vegetable === 2) {
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

    var inputSize = parseInt($("#size").val());
    var inputMeat = parseInt($("#meat").val());
    var inputVegetable = parseInt($("#vegetable").val());
    var inputSauce = parseInt($("#sauce").val());

    $("#output").text(checkout);
  }));
});
