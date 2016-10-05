/**
 * This is videojscomponent module.
 *
 * @module videojscomponent
 */
(function () {
  'use strict';

  angular
    .module('videojscomponent', [
      'ngComponentRouter',
      'videojscomponent.config',
      'videojscomponent.components.video'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$rootRouter'];

  /**
   * AppController
   *
   * @class AppController
   * @main videojscomponent
   * @constructor
   */
  function AppController ($rootRouter) {
    $rootRouter.config([
      {
        path: '/video',
        name:'Video',
        component: 'videoComponent',
        useAsDefault: true
      }
    ]);
  }
})();
