//====================================================================================================================
// Module:    testApp.secondModule
// Optimized: Yes
// File:      src/app/modules/secondModule/secondModule.js
//====================================================================================================================

(function (module) {

  module

//--------------------------------------------------------------------------------------------------------------------
// File: src/app/modules/secondModule/secondModuleMainCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  module.controller('secondModuleMainCtrl', function ($scope) {
        $scope.moduleName = "Second Module"
    });

}) (angular.module ('testApp.secondModule', []));


