import angular from "angular";
import reactDirective from "./src/angular/reactDirective";
import { Layout, Test } from "./src/react";

const app = angular.module("app", []);
app
  .controller("TodoCtrl", function ($scope) {
    $scope.todos = [
      { text: "learn angular", done: false },
      { text: "build an angular app", done: false },
    ];

    $scope.addTodo = function () {
      $scope.todos.push({ text: $scope.todoText, done: false });
      $scope.todoText = "";
    };

    $scope.remaining = function () {
      var count = 0;
      angular.forEach($scope.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.markItemCompleted = function (todoText) {
      var index = $scope.todos.findIndex((item, index) => {
        return item.text === todoText;
      });
      $scope.todos[index].done = !$scope.todos[index].done;
      $scope.$apply();
    };

    $scope.layoutComponent = Layout;

    $scope.layoutProps = {
      todos: $scope.todos,
      newItem: (value) => {
        alert(value);
      },
      markComplete: $scope.markItemCompleted,
    };

    $scope.testComponent = Test;
  })
  .directive("reactDirective", reactDirective);

export default app;
