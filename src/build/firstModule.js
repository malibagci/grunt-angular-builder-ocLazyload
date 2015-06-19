//====================================================================================================================
// Module:    testApp.firstModule
// Optimized: Yes
// File:      src/app/modules/firstModule/firstModule.js
//====================================================================================================================

(function (module) {

  module

//--------------------------------------------------------------------------------------------------------------------
// File: src/app/modules/firstModule/firstModuleMainCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  module.controller('firstModuleMainCtrl', function ($scope) {
        $scope.moduleName = "First Module"
    });

}) (angular.module ('testApp.firstModule', []));


