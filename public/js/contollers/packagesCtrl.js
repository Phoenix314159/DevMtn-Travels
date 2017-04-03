angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv) {
       mainSrv.travelInfo().then(function (response) {
           $scope.data = response.data;

       })
})
