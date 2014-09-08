angular.module("app").directive("rowEditDirective", function(){
       return {
           link: function ($scope, el, attrs) {
               // transform
               $scope.editRow = function (obj){
                   console.log("obj", obj);
                   if($scope.edit){
                       var propCount;
                       $(el).find("td").each(function(){
                           if(!$(this).hasClass('actions') && !$(this).hasClass('row-id')) {
                               var cellValue = $(this).find('span').html();
                               $(this).append("<input type='text' class='form-control row-edit-input' value='" + cellValue + "'>");
                           }
                       })
                   }
               };
           }
       }
});

/*
<div my-directive callback-fn="ctrlFn(arg1)"></div>
app.directive('myDirective', function() {
    return {
        scope: { callbackFn: '&' }, //scope: { someCtrlFn: '&callbackFn' },
        link: function(scope, element, attrs) {
            scope.callbackFn({arg1: 22}); //scope.someCtrlFn({arg1: 22});
        },
    }
});

function MyCtrl($scope) {
    $scope.ctrlFn = function(test) {
        console.log(test);
    }
}*/
