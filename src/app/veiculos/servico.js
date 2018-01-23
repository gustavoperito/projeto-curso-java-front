import AbstractCrudService from "../abstract.crud.service";

export default class VeiculoService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/arquetipo-java-avancado-web/api/veiculos')
  }

}

VeiculoService.$inject = ['$http']
