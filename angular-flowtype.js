'use strict';

/* Directives */

angular.module('ngFlowtype', []).
    directive('flowtype',function($compile)
              {
                  return {
                      restrict: 'A',
                      link: function(scope , element , attrs) {
			  var options = {};                        
			  options.maximum = attrs.maximum || 9999;
			  options.minimum = attrs.minimum || 1;
                          options.minFont = attrs.minFont || 1;
                          options.maxFont = attrs.maxFont || 9999;
                          options.fontRatio = attrs.fontRatio || 35;
                          options.lineRatio = attrs.lineRatio || 1.45;
			  element.flowtype(options);
                      }
                  };
              });
