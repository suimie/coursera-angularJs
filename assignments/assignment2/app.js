(function () {
  'use strict';


  angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListService.getToBuyItems();

    toBuyList.boughtItem = function (itemIndex) {
      ShoppingListService.boughtItem(itemIndex);
    }
  }


  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var boughtList = this;
    boughtList.items = ShoppingListService.getAlreadyBoughtItems();
  }

  function ShoppingListService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Coffee",
        quantity: "1"
      }
    ];

    var alreadyBoughtItems = [];

    service.boughtItem = function (itemIndex){
      alreadyBoughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    }

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    }
  }
})();
