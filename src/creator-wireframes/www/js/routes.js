angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.electYourRepresentation'
      2) Using $state.go programatically:
        $state.go('tabsController.electYourRepresentation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election
      /tabs-controller/tab3/election
  */
  .state('tabsController.electYourRepresentation', {
    url: '/election',
    views: {
      'tab1': {
        templateUrl: 'templates/electYourRepresentation.html',
        controller: 'electYourRepresentationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/electYourRepresentation.html',
        controller: 'electYourRepresentationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.forecasts'
      2) Using $state.go programatically:
        $state.go('tabsController.forecasts');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/forecasts
      /tabs-controller/tab4/forecasts
      /tabs-controller/tab3/forecasts
  */
  .state('tabsController.forecasts', {
    url: '/forecasts',
    views: {
      'tab1': {
        templateUrl: 'templates/forecasts.html',
        controller: 'forecastsCtrl'
      },
      'tab4': {
        templateUrl: 'templates/forecasts.html',
        controller: 'forecastsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/forecasts.html',
        controller: 'forecastsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.seatsForecast'
      2) Using $state.go programatically:
        $state.go('tabsController.seatsForecast');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/visualise/seats
      /tabs-controller/tab4/election/visualise/seats
      /tabs-controller/tab3/election/visualise/seats
  */
  .state('tabsController.seatsForecast', {
    url: '/election/visualise/seats',
    views: {
      'tab1': {
        templateUrl: 'templates/seatsForecast.html',
        controller: 'seatsForecastCtrl'
      },
      'tab4': {
        templateUrl: 'templates/seatsForecast.html',
        controller: 'seatsForecastCtrl'
      },
      'tab3': {
        templateUrl: 'templates/seatsForecast.html',
        controller: 'seatsForecastCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.partyVoteBreakdown'
      2) Using $state.go programatically:
        $state.go('tabsController.partyVoteBreakdown');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/forecasts/breakdown
      /tabs-controller/tab4/forecasts/breakdown
      /tabs-controller/tab3/forecasts/breakdown
  */
  .state('tabsController.partyVoteBreakdown', {
    url: '/forecasts/breakdown',
    views: {
      'tab1': {
        templateUrl: 'templates/partyVoteBreakdown.html',
        controller: 'partyVoteBreakdownCtrl'
      },
      'tab4': {
        templateUrl: 'templates/partyVoteBreakdown.html',
        controller: 'partyVoteBreakdownCtrl'
      },
      'tab3': {
        templateUrl: 'templates/partyVoteBreakdown.html',
        controller: 'partyVoteBreakdownCtrl'
      }
    }
  })

  .state('visualiseTimegraph', {
    url: '/election/visualise/timegraph',
    templateUrl: 'templates/visualiseTimegraph.html',
    controller: 'visualiseTimegraphCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.updateElectorates'
      2) Using $state.go programatically:
        $state.go('tabsController.updateElectorates');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/update
      /tabs-controller/tab3/election/update
  */
  .state('tabsController.updateElectorates', {
    url: '/election/update',
    views: {
      'tab1': {
        templateUrl: 'templates/updateElectorates.html',
        controller: 'updateElectoratesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/updateElectorates.html',
        controller: 'updateElectoratesCtrl'
      }
    }
  })

  .state('electoratesForecast', {
    url: '/forecasts/electorates',
    templateUrl: 'templates/electoratesForecast.html',
    controller: 'electoratesForecastCtrl'
  })

  .state('editElectorates', {
    url: '/page17',
    templateUrl: 'templates/editElectorates.html',
    controller: 'editElectoratesCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.selectDefaults'
      2) Using $state.go programatically:
        $state.go('tabsController.selectDefaults');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/defaults
      /tabs-controller/tab3/election/defaults
  */
  .state('tabsController.selectDefaults', {
    url: '/election/defaults',
    views: {
      'tab1': {
        templateUrl: 'templates/selectDefaults.html',
        controller: 'selectDefaultsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/selectDefaults.html',
        controller: 'selectDefaultsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.voteInElection'
      2) Using $state.go programatically:
        $state.go('tabsController.voteInElection');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/elections/vote
      /tabs-controller/tab3/elections/vote
  */
  .state('tabsController.voteInElection', {
    url: '/elections/vote',
    views: {
      'tab1': {
        templateUrl: 'templates/voteInElection.html',
        controller: 'voteInElectionCtrl'
      },
      'tab3': {
        templateUrl: 'templates/voteInElection.html',
        controller: 'voteInElectionCtrl'
      }
    }
  })

  .state('preConfirm', {
    url: '/page18',
    templateUrl: 'templates/preConfirm.html',
    controller: 'preConfirmCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.chooseParty'
      2) Using $state.go programatically:
        $state.go('tabsController.chooseParty');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/parties
      /tabs-controller/tab3/election/parties
  */
  .state('tabsController.chooseParty', {
    url: '/election/parties',
    views: {
      'tab1': {
        templateUrl: 'templates/chooseParty.html',
        controller: 'choosePartyCtrl'
      },
      'tab3': {
        templateUrl: 'templates/chooseParty.html',
        controller: 'choosePartyCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.chooseCandidate'
      2) Using $state.go programatically:
        $state.go('tabsController.chooseCandidate');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/candidates
      /tabs-controller/tab3/election/candidates
  */
  .state('tabsController.chooseCandidate', {
    url: '/election/candidates',
    views: {
      'tab1': {
        templateUrl: 'templates/chooseCandidate.html',
        controller: 'chooseCandidateCtrl'
      },
      'tab3': {
        templateUrl: 'templates/chooseCandidate.html',
        controller: 'chooseCandidateCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.candidateDetails'
      2) Using $state.go programatically:
        $state.go('tabsController.candidateDetails');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/parties/winston-peters
      /tabs-controller/tab3/parties/winston-peters
  */
  .state('tabsController.candidateDetails', {
    url: '/parties/winston-peters',
    views: {
      'tab1': {
        templateUrl: 'templates/candidateDetails.html',
        controller: 'candidateDetailsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/candidateDetails.html',
        controller: 'candidateDetailsCtrl'
      }
    }
  })

  .state('partyDetails', {
    url: '/election/parties/detail',
    templateUrl: 'templates/partyDetails.html',
    controller: 'partyDetailsCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.finalConfirmation'
      2) Using $state.go programatically:
        $state.go('tabsController.finalConfirmation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/confirm
      /tabs-controller/tab3/election/confirm
  */
  .state('tabsController.finalConfirmation', {
    url: '/election/confirm',
    views: {
      'tab1': {
        templateUrl: 'templates/finalConfirmation.html',
        controller: 'finalConfirmationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/finalConfirmation.html',
        controller: 'finalConfirmationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.success'
      2) Using $state.go programatically:
        $state.go('tabsController.success');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs-controller/tab1/election/success
      /tabs-controller/tab3/election/success
  */
  .state('tabsController.success', {
    url: '/election/success',
    views: {
      'tab1': {
        templateUrl: 'templates/success.html',
        controller: 'successCtrl'
      },
      'tab3': {
        templateUrl: 'templates/success.html',
        controller: 'successCtrl'
      }
    }
  })

  .state('doneThanks', {
    url: '/page7',
    templateUrl: 'templates/doneThanks.html',
    controller: 'doneThanksCtrl'
  })

  .state('tabsController.voteOnBills', {
    url: '/bills',
    views: {
      'tab2': {
        templateUrl: 'templates/voteOnBills.html',
        controller: 'voteOnBillsCtrl'
      }
    }
  })

  .state('tabsController.billDetails', {
    url: '/bills/details',
    views: {
      'tab2': {
        templateUrl: 'templates/billDetails.html',
        controller: 'billDetailsCtrl'
      }
    }
  })

  .state('tabsController.myAccountSettings', {
    url: '/account',
    views: {
      'tab3': {
        templateUrl: 'templates/myAccountSettings.html',
        controller: 'myAccountSettingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs-controller',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('awakenDirectDemocracy', {
    url: '/',
    templateUrl: 'templates/awakenDirectDemocracy.html',
    controller: 'awakenDirectDemocracyCtrl'
  })

  .state('tabsController.registerLocalAccount', {
    url: '/register',
    views: {
      'tab3': {
        templateUrl: 'templates/registerLocalAccount.html',
        controller: 'registerLocalAccountCtrl'
      }
    }
  })

  .state('deleteMe', {
    url: '/page22',
    templateUrl: 'templates/deleteMe.html',
    controller: 'deleteMeCtrl'
  })

$urlRouterProvider.otherwise('/tabs-controller/tab1/election')

  

});