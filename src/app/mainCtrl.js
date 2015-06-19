(function (module) {
    module.controller('mainController', function ($scope, $ocLazyLoad) {

        $ocLazyLoad.load({
            name: "testApp.layout",
            files: ["build/layout.js"],
            serie: true
        });

        $scope.projectName = "grunt-angular-builder-ocLazyload";

    });

})(angular.module('testApp'));



