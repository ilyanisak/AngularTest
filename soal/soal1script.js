var sismiop = angular.module('sismiop',[]);

sismiop.controller('soal1', ['$scope', function($scope) {
  $scope.kataUser = '';

}]);
sismiop.controller('soal2', ['$scope', function($scope) {
  $scope.inputAngka = 0;

}]);
sismiop.controller('soal3', ['$scope', function($scope) {
  $scope.user = ["Budy","Icha","Fajar","Candra","Anton","Winny","Danu"];
}]);
sismiop.controller('soal4', ['$scope', function($scope) {
  $scope.user='0';
  $scope.dataSelection= {
    '0': '--Nama Karyawan--',
    '1': 'Budy',
    '2': 'Icha',
    '3': 'Fajar',
    '4': 'Candra',
    '5': 'Anton',
    '6': 'Winny',
    '7': 'Danu',
  };
  $scope.dataSelectionKeys = Object.keys($scope.dataSelection)
}]);
