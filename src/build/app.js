//====================================================================================================================
// Module:    testApp
// Optimized: Yes
// File:      src/app/app.js
//====================================================================================================================

(function (module) {

  
//--------------------------------------------------------------------------------------------------------------------
// File: src/app/factory.js
//--------------------------------------------------------------------------------------------------------------------

  module.factory('testFactory', ['$q', function ($q) {
        return {
            initialize: function () {
                return true;
            }
        }
    }]);
//--------------------------------------------------------------------------------------------------------------------
// File: src/app/mainCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  module.controller('mainController', function ($scope, $ocLazyLoad) {

        $ocLazyLoad.load({
            name: "testApp.layout",
            files: ["build/layout.js"],
            serie: true
        });

        $scope.projectName = "grunt-angular-builder-ocLazyload";

    });




//--------------------------------------------------------------------------------------------------------------------
// File: src/app/routes.js
//--------------------------------------------------------------------------------------------------------------------

  module.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $urlRouterProvider.otherwise("/first-module");
        $locationProvider.hashPrefix('!');

        $stateProvider
            .state('layout', {
                templateUrl: 'app/modules/layout/layout.tpl.html'
            })
            .state('firstModule', {
                url: "/first-module",
                parent: "layout",
                views: {
                    "lazyLoadView": {
                        controller: 'firstModuleMainCtrl',
                        templateUrl: 'app/modules/firstModule/views/main/main.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appName.firstModule',
                            files: ['build/firstModule.js']
                        });
                    }]
                }
            })
            .state('secondModule', {
                url: "/second-module",
                parent: "layout",
                views: {
                    "lazyLoadView": {
                        controller: 'secondModuleMainCtrl',
                        templateUrl: 'app/modules/secondModule/views/main/main.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'appName.secondModule',
                            files: ['build/secondModule.js']
                        });
                    }]
                }
            });

        $locationProvider.html5Mode(false);

    });

}) (angular.module ('testApp', ['ui.router', 'oc.lazyLoad']));


