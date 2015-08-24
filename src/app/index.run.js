(function() {
  'use strict';

  angular
    .module('lobupla')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
