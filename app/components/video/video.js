(function () {
  'use strict';

  Controller.$inject = ['$element'];

  function Controller($element) {

    var ctrl = this;

    var videoElementId;

    ctrl.$postLink = function () {

      ctrl.player = videojs(videoElementId, {

        'controls': true,
        'autoplay': false,
        'preload': 'auto'

      }, function () {

        ctrl.player.overlay({
          overlays: [{
            start: 'loadstart',
            end: 'playing',
            content: ctrl.title
          }, {
            start: 'pause',
            end: 'playing',
            content: ctrl.title
          }, {
            start: 'ended',
            end: 'playing',
            content: ctrl.title
          }]
        });

      });

      ctrl.player.src(ctrl.url);

    };

    ctrl.$onInit = function () {

      videoElementId = 'video-' + ctrl.id;

      var elem = $element.find('video');
      elem.attr('id', videoElementId);
      elem.attr('height', ctrl.h);
      elem.attr('width', ctrl.w);

    };

    ctrl.$onDestroy = function () {

      ctrl.player.dispose();

    };

  }

  angular
    .module('videojscomponent.components.video', [])
    .component('videoComponent', {
      bindings: {
        title: '@',
        url: '@',
        id: '@',
        h: '@',
        w: '@'
      },
      controller: Controller,
      templateUrl: 'components/video/video.html'
    });

})();

