angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {

     mainSrv.travelInfo().then(function (response) {
         $scope.data = response.data;

         $scope.findId = (function () {
             for(var i=0; i<$scope.data.length; i++){

                 if($stateParams.id == $scope.data[i].id){

                     $scope.current = $scope.data[i];
                     console.log($scope.current.image);
                 }
             }
         })();

     });



});