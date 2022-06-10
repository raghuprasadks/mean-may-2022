//registerController.js
(function () {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['TodoService', '$location'];
    function TodoController(TodoService, $location) {
        console.log('inside todo controller')
        var vm = this;

        vm.dataLoading = false;
        vm.createTodo = createTodo;

        function createTodo() {
            console.log('create todo:;' +vm.todo)
            vm.dataLoading = true;
            TodoService.create(vm.todo)
                .then(function (response) {
                    if (response.success) {
                        alert('Todo Added successful');
                        $location.path('/todo');
                    } else {
                        alert(response.message);
                        vm.dataLoading = false;
                    }
            });
        }
    }
})();