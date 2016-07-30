var app = angular.module('fastFleet', []);
app.controller('placeOrder', function($scope) {
    $scope.menuItems = [
        {id: 1, name:'Hamburber and fries', price:'5.00'},
        {id: 2, name:'Philly Cheese Steak', price:'7.55'},
        {id: 3, name:'Salad', price:'6.77'}
    ];
});