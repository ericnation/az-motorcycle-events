'use strict';

// Events controller
angular.module('events').controller('EventsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Events',
	function($scope, $stateParams, $location, Authentication, Events ) {
		$scope.authentication = Authentication;

		// Create new Event
		$scope.create = function() {
			// Create new Event object
			var event = new Events ({
				name: this.name,
				host: this.host,
				location: this.location,
				address: this.address,
				date: this.date,
				time: this.time,
				details: this.details
			});

			// Redirect after save
			event.$save(function(response) {
				$location.path('events/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Event
		$scope.remove = function( event ) {
			if ( event ) { event.$remove();

				for (var i in $scope.events ) {
					if ($scope.events [i] === event ) {
						$scope.events.splice(i, 1);
					}
				}
			} else {
				$scope.event.$remove(function() {
					$location.path('events');
				});
			}
		};

		// Update existing Event
		$scope.update = function() {
			var event = $scope.event ;

			event.$update(function() {
				$location.path('events/' + event._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Events
		$scope.find = function() {
			$scope.events = Events.query();
		};

		// Find existing Event
		$scope.findOne = function() {
			$scope.event = Events.get({
				eventId: $stateParams.eventId
			});
		};

		//Code for Date Date Picker http://angular-ui.github.io/bootstrap/#/datepicker
		$scope.today = function() {
		  $scope.date = new Date();
		  };
		  $scope.today();

		  $scope.clear = function () {
		    $scope.date = null;
		  };

		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };

		  $scope.toggleMin = function() {
		    $scope.minDate = $scope.minDate ? null : new Date();
		  };
		  $scope.toggleMin();

		  $scope.open = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();

		    $scope.opened = true;
		  };

		  $scope.dateOptions = {
		    formatYear: 'yy',
		    startingDay: 1
		  };

		  $scope.initDate = new Date('09/09/2014');
		  $scope.formats = ['shortDate'];
		  $scope.format = $scope.formats[0];
  
		 
	}
]);
