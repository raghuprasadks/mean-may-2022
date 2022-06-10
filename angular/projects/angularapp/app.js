//app.js
(
    function () {
        'use strict';
    
        angular
            .module('app', ['ngRoute', 'ngCookies'])
            .config(config)
            .run(run);
    
        config.$inject = ['$routeProvider', '$locationProvider'];
        function config($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                    controller: 'LoginController',
                    templateUrl: 'login.html',
                    controllerAs: 'vm'
                })
    
                .when('/home', {
                    controller: 'HomeController',
                    templateUrl: 'home.html',
                    controllerAs: 'vm',
                })            
                .when('/register', {
                    controller: 'RegisterController',
                    templateUrl: 'register.html',
                    controllerAs: 'vm'
                })
                .when('/todo', {
                    controller: 'TodoController',
                    templateUrl: 'todo.html',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/login' });
        }    
        run.$inject = ['$rootScope'];
        
        function run(){
        //  console.clear();
        }
    })();
     