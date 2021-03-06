vintage.config(function($stateProvider) {  
  
  $stateProvider.state('home', {
    templateUrl: 'partials/home.html',
    url: '/home',
    controller: 'HomeController'
  });

  $stateProvider.state('register', {
    templateUrl: 'partials/register.html',
    url: '/register',
    controller: 'RegisterController'
  });
  
  $stateProvider.state('login', {
    templateUrl: 'partials/login.html',
    url: '/login',
    controller: 'LoginController'
  });
  
  $stateProvider.state('logout', {
    url: '/logout',
    controller: 'LogoutController'
  });
  
  $stateProvider.state('movies', {
    templateUrl: 'partials/movies.html',
    url: '/movies/:action/:query/:page',
    controller: 'MoviesController'
  });
  
  $stateProvider.state('movie', {
    templateUrl: 'partials/movie.html',
    url: '/movie/:id',
    controller: 'MovieController'
  });
  
});