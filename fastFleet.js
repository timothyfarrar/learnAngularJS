var app = angular.module('fastFleet', ["checklist-model"]);
app.controller('placeOrder', function($scope) {
	$scope.menuItems = [
		{id: 1, name: "Burger and fries", price: 5.50},
		{id: 2, name: "Philly Cheese steak", price: 4.78},
		{id: 3, name: "salad", price: 6.54},
		{id: 4, name: "Fried Chicken", price: 5.55}
	];
	$scope.order = {
		data : {
			items: [],
			method: ''
		}
	};
	$scope.hasError = false;
	$scope.totalOrder = function() {
		var total = 0;
		if (typeof $scope.order.data != 'undefined'){
			for (var i in $scope.order.data.items){
				total += $scope.order.data.items[i].price;
			}
		}
		return total.toFixed(2);
	}
	$scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if ($scope.order.data.method == 'pickup' || isValid) {
      $scope.hasError = "";
      test = $scope.order;
      console.debug(test);
      jQuery.get("data/submitOrder.js", $scope.order.data, function () {
      	alert('Your order has been submitted and is on the way!')
      	document.location = document.location;
      })
    } else {
    	$scope.hasError = "has-error";
    }
    return false;

  };
});


/*

<label ng-repeat="role in roles">
  <input type="checkbox" data-checklist-model="user.roles" data-checklist-value="role"> {{role.text}}
</label>


*/