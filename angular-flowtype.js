'use strict';

/* Directives */

angular.module('ngFlowType', []).
    directive('flowtype',function($compile)
              {
                  return {
                      restrict: 'A',
                      link: function(scope , element , attrs) {
                          element.flowtype({
                              minFont : attrs.minFont,
                              maxFont : attrs.maxFont,
                              fontRatio : attrs.fontRatio,
                              lineRatio : attrs.lineRatio
                          });
                      }
                  };
              });
