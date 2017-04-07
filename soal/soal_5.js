var sismiop = angular.module('sismiop',[
  'ngCookies'
]);
sismiop.controller('page', ['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.struktur_list = {
    nama:'NoName',
  };
  $scope.list = [
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
  ];
  console.log($cookieStore.get('val'));
  $scope.saveCookie = function(){
    $cookieStore.put('val', 'TERISI');
  };
  $scope.removeCookie = function(){
    $cookieStore.remove('val');
    };
}]);
