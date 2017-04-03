angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv) {
    mainSrv.travelInfo().then(function (response) {
        $scope.data = response.data;
    })

    $scope.selectLocation = function (id) {
        console.log(id);
    }
});
