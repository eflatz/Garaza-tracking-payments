angular.module("app").controller('EventNewController', function($scope, $resource, $location) {
    $scope.title = "New monthly events";
    var eventsArr = [];

    var Events = $resource("http://localhost:3000/events");
    var Groups = $resource("http://localhost:3000/groups");
    var Members = $resource("http://localhost:3000/members");

    $scope.groups = Groups.query();
    $scope.mjeseci = ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"];
    $scope.godine = [2014, 2015, 2016];

    $scope.createEventGroup = function(g) {
        eventsArr = [];
        var groupObj = _.filter($scope.groups, function(obj){
            return obj.termin_dan === g.termin_dan;
        });

        $scope.members = Members.query({group_id:$scope.grupa.id});

        var month = $scope.mjesecOdabrani;

       var sd = Date.now();
        sd = new Date(sd);
        sd.setFullYear($scope.godine[$scope.godinaOdabrana].toString());
        sd.setMonth($scope.mjesecOdabrani);
        sd.setDate(1);

        var ed = new Date();
        ed.setFullYear(sd.getFullYear(), $scope.mjesecOdabrani + 1, 0);
        var tempDate = sd;

        for (var i=sd.getDate();i<=ed.getDate();i++){
            if(tempDate.getDay() === groupObj[0].termin_dan){
                eventsArr.push(new Date($scope.godine[$scope.godinaOdabrana], $scope.mjesecOdabrani, i));
                console.log("ea", eventsArr);
            }
            tempDate.setDate(tempDate.getDate() + 1);
        }

        $scope.termini = eventsArr;
    };

    /*$scope.saveEventGroup = function (eventsArr){
        _.each(eventsArr, function(obj){
            var ne = new Events();
            $scope.saveEvent = function(){
                //ne.voditelj_id = $scope.voditelj_id;
                ne.datum_odrzavanja = obj.datum_odrzavanja;
                ne.grupa_id = obj.grupa.id;
                ne.$save(function(){
                    //$location.path("/events");
                    console.log("saved", obj);
                });
            };
        });

    };*/


});
