// BACKEND LOGIC



// FRONTEND LOGIC

$(document).ready(function() {
  $("#formOrder").submit(function(event) {
    event.preventDefault();

    var inputSize = parseInt($("select#size").val());
    var inputMeat = parseInt($("#meat").val());
    var inputVegetable = parseInt($("#vegetable").val());
    var inputSauce = parseInt($("#sauce").val());

    var pizzaOrder = new Pizza();
    console.log(inputSize);

    function Pizza(size, meat, vegetable, sauce) {
      this.size = size,
      this.meat = meat,
      this.vegetable = vegetable,
      this.sauce = sauce
    }


    Pizza.prototype.price = function () {
      var checkout = inputSize + inputMeat + inputVegetable + inputSauce;
      return checkout;
    };

    var pizzaTotal = pizzaOrder.price();
    console.log(pizzaTotal);

    $("#output").text(pizzaTotal);
  });
});
