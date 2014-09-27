'use strict';

// Events controller
angular.module('events').controller('EventsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Events', '$upload',
	function($scope, $stateParams, $location, Authentication, Events, $upload ) {
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
				link: this.link,
				details: this.details,
				image: this.image
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

		//https://github.com/danialfarid/angular-file-upload

		$scope.onFileSelect = function($files) {
		    //$files: an array of files selected, each file has name, size, and type.
		    for (var i = 0; i < $files.length; i++) {
		      var file = $files[i];
			      $scope.upload = $upload.upload({
			        url: 'server/upload/url', //upload.php script, node.js route, or servlet url
			        //method: 'POST' or 'PUT',
			        //headers: {'header-key': 'header-value'},
			        //withCredentials: true,
			        data: {myObj: $scope.myModelObj},
			        file: file, // or list of files ($files) for html5 only
			        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
			        // customize file formData name ('Content-Disposition'), server side file variable name. 
			        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
			        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
			        //formDataAppender: function(formData, key, val){}
			      }).progress(function(evt) {
			        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
			      }).success(function(data, status, headers, config) {
			        // file is uploaded successfully
			        console.log(data);
			      });
			      //.error(...)
			      //.then(success, error, progress); 
			      // access or attach event listeners to the underlying XMLHttpRequest.
			      //.xhr(function(xhr){xhr.upload.addEventListener(...)})
			    }
			    /* alternative way of uploading, send the file binary with the file's content-type.
			       Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
			       It could also be used to monitor the progress of a normal http post/put request with large data*/
			    // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
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
