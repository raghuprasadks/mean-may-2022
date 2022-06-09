//registerController.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location'];
    function RegisterController(UserService, $location) {
        var vm = this;

        vm.dataLoading = false;
        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        alert('Registration successful');
                        $location.path('/');
                    } else {
                        alert(response.message);
                        vm.dataLoading = false;
                    }
            });
        }
    }
})();