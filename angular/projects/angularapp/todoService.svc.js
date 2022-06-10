//userService.svc.js
(function () {
    'use strict';
    
    angular.module("app")
       .service("TodoService" , TodoService);
    TodoService.$inject = ['$timeout', '$filter', '$q'];
 
	function TodoService($timeout, $filter, $q){
	  
	  var service = {};
	  
	  service.get = get;
	//  service.getByUsername = getByUsername;
	  service.create = create;
	  
	  return service;
	  
	function get(){
	  var deferred = $q.defer();
    deferred.resolve(getTodos());
    return deferred.promise;
	}
	
  
  function create(todo){
    console.log('todo '+todo)
    var deferred = $q.defer();

    // simulate api call with $timeout
    $timeout(function () {
        var todos = getTodos();
        // assign id
        var lastTodo = todos[todos.length - 1] || { id: 0 };
        todo.id = lastTodo.id + 1;

        // save to local storage
        todos.push(todo);
        createTodo(todos);
        
        deferred.resolve({ success: true });
      },1000);   
    

    return deferred.promise;
  }
	function getTodos(){
	   if(!localStorage.todos){
        localStorage.todos = JSON.stringify([]);
	  }
	  return JSON.parse(localStorage.todos);
	}
	
	function createTodo(todos){
	 localStorage.todos = JSON.stringify(todos);
	}
}
})();