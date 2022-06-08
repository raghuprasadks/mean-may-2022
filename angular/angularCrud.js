var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope){
    $scope.newStudent = {};
    empid=0;
    $scope.students=[]
   // console.log('student id '+$scope.newStudent.id)

    $scope.saveRecord = function () {
 
        if ($scope.newStudent.id == null) {
         
        $scope.newStudent.id = empid++;
         
        $scope.students.push($scope.newStudent);
         
        } else {
         
        for (i in $scope.students) {
         
        if ($scope.students[i].id == $scope.newStudent.id) {
         
        $scope.students[i] = $scope.newStudent;
         
        }
         
        }
         
        }
         
        
         
        }

        $scope.delete = function (id) {
 
            for (i in $scope.students) {
             
            if ($scope.students[i].id == id) {
             
            $scope.students.splice(i, 1);
             
            $scope.newStudent = {};
             
            }
             
            }
             
            }
             
            $scope.edit = function (id) {
             
            for (i in $scope.students) {
             
            if ($scope.students[i].id == id) {
             
            $scope.newStudent = angular.copy($scope.students[i]);
             
            }
             
            }
             
            }
});
