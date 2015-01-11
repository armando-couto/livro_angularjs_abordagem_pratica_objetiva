'use strict';

/**
 * @ngdoc overview
 * @name livroApp
 * @description
 * # livroApp
 *
 * Main module of the application.
 */
angular
  .module('livroApp', [ 'ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch' ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/exemplo_2_1', { templateUrl: 'views/exemplo 2.1 - hello-name.html' })
      .when('/exemplo_3_1', { templateUrl: 'views/exemplo 3.1 – hello-world-controller.html' })
      .when('/exemplo_3_2', { templateUrl: 'views/exemplo 3.2 – controller-aninhado.html' })
      .when('/exemplo_3_3', { templateUrl: 'views/exemplo 3.3 – modulo.html' })
      .when('/exemplo_3_4', { templateUrl: 'views/exemplo 3.4 – value-recipe.html' })
      .when('/exemplo_3_5', { templateUrl: 'views/exemplo 3.5 – constant-recipe.html' })
      .when('/exemplo_3_6', { templateUrl: 'views/exemplo 3.6 – factory-recipe.html' })
      .when('/exemplo_3_7', { templateUrl: 'views/exemplo 3.7 – service-recipe.html' })
      .when('/exemplo_3_8', { templateUrl: 'views/exemplo 3.8 – conta-usuario.html' })
      .when('/exemplo_3_9', { templateUrl: 'views/exemplo 3.9 – input-focus.html' })
      .when('/exemplo_4_1', { templateUrl: 'views/exemplo 4.1 – formulario.html' })
      .when('/exemplo_4_2', { templateUrl: 'views/exemplo 4.2 – formulario-com-css.html' })
      .when('/exemplo_4_3', { templateUrl: 'views/exemplo 4.3 – formulario-com-validacao.html' })
      .when('/exemplo_4_4', { templateUrl: 'views/exemplo 4.4 – watch.html' })
      .when('/exemplo_4_5', { templateUrl: 'views/exemplo 4.5 – css-ng-class.html' })
      .when('/exemplo_4_6', { templateUrl: 'views/exemplo 4.6 – css-class-expression.html' })
      .when('/exemplo_4_7', { templateUrl: 'views/exemplo 4.7 – css-class-map.html' })
      .when('/exemplo_5_1', { templateUrl: 'views/exemplo 5.1 – filtro.html' })
      .when('/exemplo_5_2', { templateUrl: 'views/exemplo 5.2 – filtro-com-parametro.html' })
      .when('/exemplo_5_3', { templateUrl: 'views/exemplo 5.3 – filtro-varios-parametros.html' })
      .when('/exemplo_6_1', { templateUrl: 'views/exemplo 6.1 – false-scope-directive.html' })
      .when('/exemplo_6_2', { templateUrl: 'views/exemplo 6.2 – true-scope-directive.html' })
      .when('/exemplo_6_3', { templateUrl: 'views/exemplo 6.3 – isolated-scope-directive.html' })
      .when('/exemplo_6_4', { templateUrl: 'views/exemplo 6.4 – scope-directive-bindings.html' })
      .when('/exemplo_6_5', { templateUrl: 'views/exemplo 6.5 – scope-directive-bindings-twoway.html' })
      .when('/exemplo_6_6', { templateUrl: 'views/exemplo 6.6 – transclude-summary.html' })
      .when('/exemplo_6_7', { templateUrl: 'views/exemplo 6.7 – dir-inner-controller.html' })
      .when('/exemplo_6_8', { templateUrl: 'views/exemplo 6.8 – directive-lifecycle-pre-post.html' })
      .when('/exemplo_6_9', { templateUrl: 'views/exemplo 6.9 – ng-repeat.html' })
      .when('/exemplo_7_1', { templateUrl: 'views/exemplo 7.1 – compile-linking-sim.html' })
      .when('/exemplo_7_2', { templateUrl: 'views/exemplo 7.2 – eval-async-timeout.html' })
      .when('/exemplo_8_1', { templateUrl: 'views/exemplo 8.1 – eventos.html' })
      .when('/exemplo_8_2', { templateUrl: 'views/exemplo 8.2 – evento-com-argumentos.html' })
      .when('/exemplo_9_1', { templateUrl: 'views/exemplo 9.1 – rotas-hashbang.html' })
      .when('/exemplo_10_1', { templateUrl: 'views/exemplo 10.1 – locale-pt-br.html\' })
      .when('/exemplo_10_2', { templateUrl: 'views/exemplo 10.2 – l10n.html' })
      .when('/exemplo_11_1', { templateUrl: 'views/exemplo 11.1 – messages.html' })
      .when('/exemplo_12_1', { templateUrl: 'views/exemplo 12.1 – promises.html' })
      .when('/exemplo_12_2', { templateUrl: 'views/exemplo 12.2 – promises-chain.html' })
      .otherwise({ redirectTo: '/' });
  });
