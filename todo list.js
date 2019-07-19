var app = angular.module('myApp', []); // app name

//controller name
app.controller('MainCtrl', function($scope) {
    $scope.updateTodo = function(value) {
    console.log('Saving title ' + value);
    alert('Saving title ' + value);
  };
  
  $scope.cancelEdit = function(value) {
    console.log('Canceled editing', value);
    alert('Canceled editing of ' + value);
  };
});

app.directive('onEsc', function() {
  return function(scope, elm, attr) {
    elm.bind('keydown', function(e) {
      if (e.keyCode === 27) {
        scope.$apply(attr.onEsc);
      }
    });
  };
});

app.directive('onEsc', function() {
  return function(scope, elm, attr) {
    elm.bind('keydown', function(e) {
      if (e.keyCode === 27) {
        scope.$apply(attr.onEsc);
      }
    });
  };
});

// On enter event
app.directive('onEnter', function() {
  return function(scope, elm, attr) {
    elm.bind('keypress', function(e) {
      if (e.keyCode === 13) {
        scope.$apply(attr.onEnter);
      }
    });
  };
});

app.directive('inlineEdit', function($timeout) {
  return {
    scope: {
      model: '=inlineEdit',
      handleSave: '&onSave',
      handleCancel: '&onCancel'
    },
    link: function(scope, elm, attr) {
      var previousValue;
      
      scope.edit = function() {
        scope.editMode = true;
        previousValue = scope.model;
        
        $timeout(function() {
          elm.find('input')[0].focus();
        }, 0, false);
      };
      scope.save = function() {
        scope.editMode = false;
        scope.handleSave({value: scope.model});
      };
      scope.cancel = function() {
        scope.editMode = false;
        scope.model = previousValue;
        scope.handleCancel({value: scope.model});
      };
    },
  };
});

var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = []; 

    $scope.todoAdd = function() {
    	//put the Task into list
        $scope.todoList.push({todoText:$scope.todoInput, done:false}); 
        $scope.todoInput = ""; 
    };
	
	// Untuk edit 

    // Untuk hapus 
    $scope.delete = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});