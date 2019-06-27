// BACKEND LOGIC
var pizzaOrder = new Pizza();

  function Pizza(size, meat, vegetable, sauce) {
    this.size = size,
    this.meat = meat,
    this.vegetable = vegetable,
    this.sauce = sauce
  }


  Pizza.prototype.price = function (size, meat, vegetable, sauce) {
    var checkout = size + meat + vegetable + sauce;
    return checkout;
  };


// FRONTEND LOGIC

$(document).ready(function() {
  $("#formOrder").submit(function(event) {
    event.preventDefault();

    var inputSize = parseInt($("select#size").val());
    var inputMeat = parseInt($("#meat").val());
    var inputVegetable = parseInt($("#vegetable").val());
    var inputSauce = parseInt($("#sauce").val());

    var pizzaTotal = pizzaOrder.price(inputSize, inputMeat, inputVegetable, inputSauce);
    $("#output").text(pizzaTotal);
  });
});
