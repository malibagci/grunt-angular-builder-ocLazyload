(function (module) {
    module.factory('testFactory', ['$q', function ($q) {
        return {
            initialize: function () {
                return true;
            }
        }
    }]);
})(angular.module('testApp'));