angular.module('angulaReminders.home')
    .config(function HomeConfig($stateProvider) {
        $stateProvider.state( 'home', {
            url: '/home',
            controller: 'HomeCtrl as homeCtrl',
            templateUrl: 'home/home.tpl.html',
            data: { 
                pageTitle: 'Home' 
            }
        });
    });