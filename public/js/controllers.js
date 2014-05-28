'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
            // var o = {},  A = {};
            // o.item = angular.element(document.querySelectorAll('.nav'))
            // o.aside = angular.element(document.querySelector("aside"));
            // o.section = angular.element(document.querySelector("#page"));
            // o.article =angular.element( o.section.children("article"));
            // o.btnImprint = angular.element( document.querySelector("#btnImprint"));
            // o.imprintBox = angular.element( document.querySelector("#imprintBox"));
            // o.toServiceBtn = angular.element( document.querySelector("#toServiceBtn"));
            // o.toReferencesBtn = angular.element( document.querySelector("#toReferencesBtn"));
            // A.elm = angular.element(document.querySelector("header"));
            // A.logo =angular.element(document.querySelector("#logo"));
            // A.nav = angular.element(document.querySelector("#nav"));
            // A.navTxt = angular.element(document.querySelector("#navTxt"));
            // A.navMenue = A.nav.find(".menu");
            // A.navClose = A.nav.find(".cancel");
            // A.init = function() {
            //     A.nav.on("click", o.show);
            // };
            // A.start = function() {
            //     A.logo.css({left: "-130px",opacity: 0});
            //     A.nav.css({right: "-150px",opacity: 0});
            //     A.elm.show(5).delay(50).fadeOut(5).delay(50).fadeIn(5).delay(50).fadeOut(5).delay(50).fadeIn(5, function() {
            //         A.logo.animate({left: "20px",opacity: 1}, {duration: 600,easing: "easeInOutExpo"});
            //         A.nav.animate({right: "20px",opacity: 1}, {duration: 600,easing: "easeInOutExpo"});
            //     });
            // };
            // A.resize = function() {
            //     A.elm.css("width", k.iW + "px");
            // };

            // o.hide = function(){
            //     var H = function() {
            //         A.navClose.hide();
            //         A.navMenue.show();
            //         A.nav.removeClass("open");
            //         o.btnImprint.css({marginLeft: "30px",opacity: 0});
            //         o.item.each(function(L, J) {
            //             var K = l(J);
            //             if (L > 0) {
            //                 K.animate({marginLeft: "30px",opacity: 0}, {duration: 400,easing: "easeInOutExpo"});
            //             }
            //         });
            //         o.section.animate({left: 0}, {duration: 600,easing: "easeInOutExpo"});
            //         o.aside.animate({right: -o.asideW}, {duration: 600,easing: "easeInOutExpo",complete: function() {
            //                 o.visible = false;
            //                 if (typeof I === "function") {
            //                     I();
            //                 }
            //             }});
            //     };
            //     if (o.imprintVisible) {
            //         o.toggleImprint();
            //         p.setTimeout(H, 600);
            //     } else {
            //         H();
            //     }

            // }
        $rootScope.navigators = [
            {'text':'About Me', 'action':'gotoAboutMe($index)'},
            {'text':'My Skills', 'action':'gotoMySkills($index)'},
            {'text':'Portfolio', 'action':'gotoAboutMe($index)'},
            {'text': 'My Blogs', 'action':'gotoMyBlogs($index)'},
            {'text':'References', 'action':'gotoAboutMe($index)'},
            {'text':'Contact Me', 'action':'gotoContactMe($index)'},
            {'text':'Know Day', 'action':'gotoKnowDay($index)'},
            {'text':'Twitter Feed', 'action':'gotoTwitterFeed($index)'}

        ];
        $rootScope.navClick = function(e){
          var lis = angular.element(document.querySelectorAll('nav ul li'))
        }
        $rootScope.gotoAboutMe=function(){
          //_gaq.push(['_trackEvent', 'Aboutme', 'Aboutme', 'Baby\'s First Birthday']);
          //ga('send', 'event', 'Downloaded Video', 'Yes');
          $location.url('/aboutme');
       }
       $rootScope.gotoMySkills=function(){
          //_gaq.push(['_trackEvent', 'Myskills', 'Myskills', 'Baby\'s First set of skills']);
          //ga('send', 'event', 'Downloaded Video', 'Yes');
          $location.url('/myskills');
       }
       $rootScope.gotoContactMe=function(){
          //_gaq.push(['_trackEvent', 'Myskills', 'Myskills', 'Baby\'s First set of skills']);
          //ga('send', 'event', 'Downloaded Video', 'Yes');
          $location.url('/contactme');
       }
        $rootScope.gotoMyApp=function(){
          //_gaq.push(['_trackEvent', 'Myskills', 'Myskills', 'Baby\'s First set of skills']);
          //ga('send', 'event', 'Downloaded Video', 'Yes');
          $location.url('/app/knowday');
       }
        $rootScope.gotoKnowDay=function(){
          //_gaq.push(['_trackEvent', 'Myskills', 'Myskills', 'Baby\'s First set of skills']);
          //ga('send', 'event', 'Downloaded Video', 'Yes');
          $location.url('/app/knowday');
       }
        $rootScope.gotoTwitterFeed=function(){
          //_gaq.push(['_trackEvent', 'Myskills', 'Myskills', 'Baby\'s First set of skills']);
          //ga('send', 'event', 'Downloaded Video', 'Yes');
          $location.url('/app/wps');
       }
        $rootScope.navShow = function(index){
           if(index!== undefined) $rootScope.navIndex = index;
           var sidePanel = angular.element(document.querySelector('.left-aside.nav'));
           var icon_menu = angular.element(document.querySelector('.menu-button'));
           var main_view = angular.element(document.querySelector('.main-view'));
           var visible = sidePanel.hasClass('show');
           if(visible){
              sidePanel.removeClass('show');
              sidePanel.addClass('hide');
              icon_menu.removeClass('icon-cancel-circle');
              icon_menu.addClass('icon-menu2');
              main_view.removeClass('slide-left');

           }
           else{
              sidePanel.addClass('show');
              sidePanel.removeClass('hide');
              icon_menu.removeClass('icon-menu2');
              icon_menu.addClass('icon-cancel-circle');
              main_view.addClass('slide-left');

              
           }

        }
        
    }])
    .controller('HomeCtrl', ['$scope','$rootScope','$routeParams','$location', function ($scope, $rootScope,$routeParams,$location) {
       document.title = "Rikesh|Home";
        $rootScope.navIndex = -1;
       
       
    }])
    .controller('AboutmeCtrl', ['$scope','$rootScope','$routeParams', function ($scope, $rootScope,$routeParams) {
       document.title = "Rikesh|About Me";
        $rootScope.navIndex = 0;
       $scope.goHome = function(){
       	   $location.url('/');
       }
       
    }])
    .controller('SkillsCtrl', ['$scope','$rootScope','$routeParams', function ($scope, $rootScope,$routeParams) {
       document.title = "Rikesh|My Skills";
       $rootScope.navIndex = 1;
       $scope.goHome = function(){
       	   $location.url('/');
       }
       
    }])
    .controller('ContactMeCtrl', ['$scope','$rootScope','$routeParams', function ($scope, $rootScope,$routeParams) {
       document.title = "Rikesh|Contact Me";
       $rootScope.navIndex = 5;
       $scope.goHome = function(){
           $location.url('/');
       }
       
    }])
    .controller('KnowDayCtrl',['$scope', '$rootScope', '$routeParams','KnowDay', function ($scope, $rootScope, $routeParams, KnowDay) {
          document.title = "App|KnowDay";
           $scope.goHome = function() {
            $location.url('/');
          }
           $scope.showDayFlag = false;
           $scope.showMonthFlag = false;
          var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
          $scope.monthList = months;
          $rootScope.navIndex = 6;
          var today_date = new Date();
          $scope.current_month =months[today_date.getMonth()];
          $scope.current_day = today_date.getDate()
          $scope.daysInMonth = new Date(2012, months.indexOf($scope.current_month) +1, 0).getDate();
        

          var month_control = angular.element(document.querySelector('#date_control .month'));
          var day_control = angular.element(document.querySelector('#date_control .day'));
	  var show_month = angular.element(document.querySelector('#date_control #show_month'));
          var show_day = angular.element(document.querySelector('#date_control #show_day'));	
          var show_month_a = document.querySelectorAll('#date_control #show_month .show_month_a');
          var show_day_a = document.querySelectorAll('#date_control #show_day .show_day_a');
          $scope.getNumber = function(num) {
            var arr = new Array(num + 1).join('1').split('').map(function(d,i){return i+1});
            return  arr;
          }

          $scope.showDay = function(){
            $scope.showDayFlag = !$scope.showDayFlag;
            $scope.showMonthFlag = false;
          }
          $scope.showMonth = function() {
             $scope.showMonthFlag = !$scope.showMonthFlag
             $scope.showDayFlag = false;
          }
          $scope.updateDay = function(day){
            $scope.current_day = day;
            $scope.showDayFlag = false;
          }
          $scope.updateMonth = function(month){
            $scope.current_month = month.trim();
            $scope.daysInMonth = new Date(2012, months.indexOf($scope.current_month) +1, 0).getDate();
            $scope.$apply();
            $scope.showMonthFlag = false;
          }

         /* show_month.on('click',function(e){
            show_month.find('div').removeClass('highlighted');
            var target = angular.element(e.toElement);
            target.addClass('highlighted');
            month_control.triggerHandler('click');
            $scope.current_month = target.text().trim();
            $scope.daysInMonth = new Date(2012, months.indexOf($scope.current_month) +1, 0).getDate();

          })
          show_day_a.on('click',function(e){
            show_day.find('a').removeClass('highlighted');
            var target = angular.element(e.currentTarget);
            target.addClass('highlighted');
            day_control.triggerHandler('click');
            $scope.current_day = target.text().trim();
            $scope.$apply();

          })
          month_control.on('click',function(e){
              if(show_month.hasClass('show')){
                show_month.removeClass('show');
              }
              else{
                show_month.addClass('show');
              }
              
          })*/
          /*day_control.on('click',function(e){
              if(show_day.hasClass('show')){
                show_day.removeClass('show');
              }
              else{
                show_day.addClass('show');
              }
              
          })*/
         

          $scope.getDayInfo = function() {
              var dayInfo = KnowDay.get({
                'month': $scope.current_month,
                'day': $scope.current_day
              }, function(error, data) {
                $scope.topics = Object.keys(dayInfo).filter(function(d) {
                  return !(1 + d.indexOf('$'))
                });
                $scope.topics = $scope.topics.filter(function(d){ return dayInfo[d].values.length})
                $scope.dayInfo = dayInfo;
              });
            }
            $scope.getDayInfo();
    }])
    .controller('WPSCtrl',['$scope', '$rootScope', '$routeParams', '$http', 'SearchTwitter','TrendingTopics', function($scope, $rootScope, $routeParams, $http,SearchTwitter,TrendingTopics){
          $scope.searchTwitter = function(first){
            if(event.keyCode === 13 || first)
            if($scope.logged){
              var searchData = SearchTwitter.search({'topic':$scope.searchKey})
               searchData.$promise.then(function(result){
                  $scope.search = result.statuses;
                  console.log($scope.search)
               })
            }
            
          }

          $http.get('/loggedin').success(function(data){
             if(data.logged){
               $scope.logged = true;
               $scope.username = data.username;
               var trendingTopics = TrendingTopics.get({'woeid':1});
               trendingTopics.$promise.then(function (result) {
                $scope.trending = result[0].trends;
                $scope.searchKey = $scope.trending[0].name;
                $scope.searchTwitter(true);
                console.log($scope.trending);
              });
               
             }
             else {
                $scope.logged = false;
                $scope.username = '';
             }
          })
          /*$http({
            'method':'GET',
            'url':'/search?topic=nepal',
            'header':{
              'Access-Control-Allow-Origin':'*'
            }
             
          }).success(function(data){
            console.log(data);
          });*/
    }])
    ;
    