/**
 * Gruntfiles Service module.
 *
 * @module videojscomponent.service.gruntfiles
 */
(function () {
  'use strict';

  angular
    .module('videojscomponent.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);

  GruntfilesService.$inject = ['$resource'];

  /**
   * @class GruntfilesService
   * @constructor
   */
  function GruntfilesService($resource) {
    return $resource('/api/gruntfiles');
  }
})();
