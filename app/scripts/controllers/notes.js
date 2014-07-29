'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the notesApp
 */
angular.module("notesApp")
	.controller('NotesCtrl', function($scope) {
		$scope.notes = [{
			content: 'HTML5 Boilerplate',
			state: 'primary'
		}, {
			content: 'AngularJS',
			state: 'primary'
		}, {
			content: 'Karma',
			state: 'primary'
		}];

		$scope.delete = function(note, index) {
			$scope.alert = "delete " + note;
			$scope.notes.splice(index, 1);
		};

		$scope.done = function(content) {
			$scope.alert = content + " is done";
			angular.forEach($scope.notes, function(note) {
				if (note.content === content) {

					note.state = "success";
				}
			});

		};
	});