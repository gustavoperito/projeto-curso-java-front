import ListController from './list.controller'
import FormController from './form.controller'

import VeiculoService from './servico'

export const veiculoConfig = (modulo) => {

  modulo.service('VeiculoService', VeiculoService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('veiculo', {
        template: require('@views/default.html'),
        url: '/veiculos',
        onEnter: ['$state', function($state) {
          $state.go('veiculo.list')
        }]
      })
      .state('veiculo.list', {
        template: require('@views/veiculos/list.html'),
        url: 'veiculos/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('veiculo.new', {
        template: require('@views/veiculos/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('veiculo.edit', {
        template: require('@views/veiculos/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
