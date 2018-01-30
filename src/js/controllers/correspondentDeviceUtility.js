/* eslint-disable import/no-unresolved */
(function () {
  'use strict';

  angular.module('copayApp.services').factory('correspondentDeviceUtility', ($rootScope, go, $deepStateRedirect) => {
    const root = {};

    /**
     * Provides to switch to initial view of chat tab
     */
    root.goToCorrespondentDevices = function () {
      if ($rootScope.goBackState) {
        go.path($rootScope.goBackState);
      } else {
        $deepStateRedirect.reset('correspondentDevices');
        go.path('correspondentDevices');
      }
    };

    return root;
  });
}());

