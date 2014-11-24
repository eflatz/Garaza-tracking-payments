angular.module("app").controller('MessagesController', function($scope, $resource, $http, $location) {

    $scope.title = "Messages";

    var Groups = $resource("http://localhost:3000/groups");
    var Services = $resource("http://localhost:3000/services");

    var messagePlaceHolders = $http.get("http://localhost:3000/messages/body-placeholders")
        .success(function(data){
        $scope.messagePh = data;
        console.log($scope.messagePh);
    });
    var receivers = [];

    $scope.groups = Groups.query();

    $scope.getMembers = function (groupId, serviceId) {
        var Members = $resource("http://localhost:3000/members");
        Members.query({group_id: groupId}, function (data) {
            $scope.members = _.map(data, function (obj) {
                obj.selected = true;
                return obj;
            });
        });
        Services.query(function (data) {
            var service = _.filter(data, function(obj){return obj.id === serviceId;});
            console.log("usluga", service);
            $scope.members = _.map($scope.members, function (obj) {
                obj.cijena = parseInt(service[0].cijena,10) - parseInt(obj.popust,10);
                return obj;
            });
        });
    };

    $scope.addToMessageBody = function(placeholder){
        $("#messageBody").val($("#messageBody").val() + placeholder);
    };

    $scope.sendMessage = function(){

        receivers = _.filter($scope.members, function(obj){
            return obj.selected === true;
        });

        console.log("receivers", receivers);

        $http.post('http://localhost:3000/messages', {msg:"send it", receivers:receivers, message_body:$scope.messageBody})
        .success(function(data, status, headers, config){
            console.log("success", data);
            $location.path("/messages");
        })
        .error(function(data, status, headers, config){

        });

    };

});