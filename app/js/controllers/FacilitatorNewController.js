angular.module("app").controller('FacilitatorNewController', function($scope, $resource, $location) {
    $scope.title = "New facilitator";

    var Facilitators = $resource("http://localhost:3000/facilitators");
    var nf = new Facilitators();
    $scope.saveFacilitator = function(){
        nf.ime = $scope.ime;
        nf.prezime = $scope.prezime;
        nf.$save(function(){
            $location.path("/facilitators");
        });
    };
});
