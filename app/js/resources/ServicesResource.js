angular.module("app").factory("ServicesResource", function($q, $resource) {
    return $resource('/services/:id', null,
        {
            'update': { method:'PUT' }
        });
});
