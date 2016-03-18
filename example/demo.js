var app = angular.module('demo', ['navigation-list']);

app.controller('DemoCtrl', function($scope) {
  $scope.list = [{
      heading: 'Module 1', 
      items: [
        {name: 'Page1', url: 'page1.html'},
        {name: 'Page2', url: 'page2.html'}
      ]
    },
    {
      heading: 'Module 2', 
      items: [
        {name: 'Page3', url: 'page3.html'},
      ]
    }];
});