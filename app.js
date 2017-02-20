(function () {
'use strict';
  angular.module('msgApp',[])
  .controller('MsgController',MsgController);

  MsgController.$inject = ['$scope','$filter'];

  function MsgController ($scope,$filter){
      $scope.name= 'Mrinmoy Mukherjee';
      $scope.favClub = 'Manchester United';
      $scope.hobi = 'Trekking';
  }

})();
