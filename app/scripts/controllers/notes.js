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

			bootbox.confirm("Are you sure?", function(result) {
				if (result) {
					var msg = "delete " + $scope.notes[index].content;
					$scope.$apply(function() {
						$scope.notes.splice(index, 1);
					});
					toastr.info(msg);
				}
			});

		};

		this.done = function(index) {
			var note = $scope.notes[index];
			var msg = note.content + " is done";
			note.state = "success";
			toastr.info(msg);

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