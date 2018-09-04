(function () {
'use strict';

angular.module('CheckTextBoxApp', [])
.controller('CheckTextBoxController', CheckTextBoxController);

CheckTextBoxController.$inject = ['$scope'];
function CheckTextBoxController ($scope) {
  $scope.items = "";
  $scope.msg = "";

  $scope.checkItems = function () {
    var items =$scope.items;

    if(items.length <= 0){
      $scope.msg = "Please enter data first";
      return;
    }
    var item_list = items.split(',');

    // check empty item not to consider empty item towards to the count
    var count = 0;
    for(var i=0; i < item_list.length; i++){
      if(item_list[i] != "")  count++;
    }

    if(count <= 3){
      $scope.msg = "Enjoy!";
    }else{
      $scope.msg = "Too much!";
    }
  };
}

})();
