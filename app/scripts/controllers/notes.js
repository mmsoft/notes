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

		var self = this;

		this.remove = function(index) {
			$scope.alert = "delete " + $scope.notes[index].content;
			$scope.notes.splice(index, 1);
		};

		this.done = function(index) {
			var note = $scope.notes[index];
			$scope.alert = note.content + " is done";

			note.state = "success";
		};

		$scope.initStatus = function(e, ui, index) {
			self.initX = e.pageX;
		};

		$scope.updateStatus = function(e, ui, index) {

			if (e.pageX - self.initX > 200) {
				self.done(index);
			}

			if (e.pageX - self.initX < -200 || e.pageX < 30) {
				self.remove(index);
			}

		};
	});