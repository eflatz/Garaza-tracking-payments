angular.module("app").directive("rowEditDirective", function(){
       return {
           link: function ($scope, el, attrs) {

               $scope.editRow = function (obj) {
                   if ($scope.edit) {
                       $(el).find("td").each(function () {
                           if (!$(this).hasClass('row-actions') && !$(this).hasClass('row-id')) {
                               var cellValue = $(this).find('span').html();
                               $(this).append("<input type='text' class='form-control row-edit-input' value='" + cellValue + "'" +  "ng-show='edit'>");
                           }
                       });
                   }
               };

               $scope.saveRow = function (obj) {
                   var propCount = 0;
                   var objKeys = _.keys(obj);
                   console.log("properties", objKeys);
                   $(el).find("td").each(function (i, el) {
                       if (!$(this).hasClass('row-actions') && !$(this).hasClass('row-id')) {
                           obj[objKeys[i]] = $(this).find("input").val();
                           $(this).find("input").remove();
                       }
                   });
                   $scope.read = true;
                   $scope.edit = false;
                   console.log(obj);
                   // calls outside controller function
                   $scope.resourceUpdate(obj);
               };

               $scope.resourceEdit = function(){
                   $scope.read = false;
                   $scope.edit = true;
               };

               $scope.deleteRow = function(obj) {
                   // calls outside controller function
                   $scope.resourceDelete(obj);
                   $(el).remove();
               }
           }
       };
});
