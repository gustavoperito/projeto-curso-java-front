import ListController from './list.controller'
import FormController from './form.controller'

import VendaService from './servico'

export const vendaConfig = (modulo) => {

  modulo.service('VendaService', VendaService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('venda', {
        template: require('@views/default.html'),
        url: '/vendas',
        onEnter: ['$state', function($state) {
          $state.go('venda.list')
        }]
      })
      .state('venda.list', {
        template: require('@views/vendas/list.html'),
        url: '/list',
        controller: ListController,
        controllerAs: 'vm'
      })
      .state('venda.new', {
        template: require('@views/vendas/form.html'),
        url: '/new',
        controller: FormController,
        controllerAs: 'vm'
      })
      .state('venda.edit', {
        template: require('@views/vendas/form.html'),
        url: '/{id}',
        controller: FormController,
        controllerAs: 'vm'
      });
  }]
}
