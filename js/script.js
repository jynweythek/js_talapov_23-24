/**
 * Created by wavejumper on 26.05.2016.
 */

function TodoCtrl($scope) {
    $scope.todos = [
        {text: 'immersion to angular', done: false},
        {text: 'immersion to angular', done: false},
        {text: 'immersion to angular', done: false},
        {text: 'immersion to angular', done: false},
        {text: 'eat', done: false},
        {text: 'sleep', done: true},
        {text: 'immersion to angular', done: false},
        {text: 'immersion to angular', done: false}
    ];

    $scope.toList = function() {
        $scope.todos.push({text:$scope.todoText, done: false});
        $scope.todoText = '';
    };

    $scope.remove = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })

    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
}