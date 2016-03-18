var app = angular.module('navigation-list', []);
angular
  .module('navigation-list')
  .directive('navigationList', function () {
    return {
      restrict: 'E',
      templateUrl: 'navigationList.html',
      scope: {
        list: '=',
        defaultSelction: '='
      },
      link: function ($scope) {
        if (!$scope.list || !$scope.list.length || !$scope.list.length === 0) {
          console.error('invalid attribute object');
          return;
        }
        $scope.currentUrl = $scope.defaultSelction? $scope.defaultSelction : $scope.list[0].items[0].url;

        $scope.update = function(url) {
          $scope.currentUrl = url;
        }
      }
    };
  }).run(
  ['$templateCache', function($templateCache) {
      var DEFAULT_TEMPLATE = '<div class="navigation-list"><div class="same-height"><div class="col-md-3 nav-box">' +
        '<div ng-repeat="module in list"><div class="heading-bottom-line"><h4>{{module.heading}}</h4></div>' +  
        '<div ng-repeat="item in module.items"><div ng-class="{\'active-highlight\':item.url === currentUrl}">' +
        '<a ng-class="{\'active\':item.url === currentUrl}" ng-click="update(item.url)">{{item.name}}</a></div></div>' +
        '</div></div><div class="col-md-9 content-box"><div ng-include="currentUrl" /></div></div></div>';

      $templateCache.put('navigationList.html', DEFAULT_TEMPLATE);
  }]
);