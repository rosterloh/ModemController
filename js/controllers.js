'use strict';

ngModem.controller('AppCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope) {
    $rootScope.user = {
      name: 'User',
      img: 'img/user.png'
    };
  }
]).controller('Toolbar', ['$rootScope', '$scope', 'Window',
  function($rootScope, $scope, Window) {
    $scope.minimize = function() {
      Window.minimize();
    };

    $scope.toggleFullscreen = function() {
      Window.toggleKioskMode();
    };

    $scope.close = function() {
      Window.close();
    };

    $scope.logoutUser = function() {
      $rootScope.user = '';
      //$rootScope.authClient.$logout();
    };
  }
]).controller('HomeCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope) {
    $scope.messages = [];

    $scope.addMessage = function(by, msg) {
      $scope.messages.push({
        postedby: by,
        data: msg,
        posteddate: Date.now(),
      });
    };
    /*
    var sp = require("serialport");
    sp.list(function(err, ports) {
      angular.forEach(ports, function(value, key) {
        console.log(angular.fromJson(value));
      });
    });
    var serialPort = new sp.SerialPort('COM26', {
      baudrate: 9600,
      parser: sp.parsers.readline('\r\n')
    });

    serialPort.on('open', function() {
      $scope.addMessage('System', 'COM26 Open');
    });
    serialPort.on('error', function(error) {
      $scope.addMessage('Error', 'Failed: '+error);
    });
    serialPort.on('data', function(data) {
      $scope.addMessage('Modem', data);
    });
    */
    var fs = require('fs');
    var inp = fs.createReadStream("\\\\.\\COM26");
    inp.setEncoding('utf8');
    inp.on('open', function (data) {
        $scope.addMessage('Debug', data);
    });
    inp.on('data', function (data) {
        $scope.addMessage('Modem', data);
    });
    inp.on('error', function (error) {
        $scope.addMessage('Error', 'Failed: '+error);
    });

    $scope.sendMessage = function($event) {
      if (!($event.which == 13)) return;
      if ($scope.message.length == 0) return;

      $scope.addMessage($rootScope.user.name, $scope.message);

      $scope.message = '';
    };
  }
]);
