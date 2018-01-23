export default class FormController {

    constructor($stateParams, $state, VendaService, Notification, VeiculoService) {
        this.record = {}
        this.veiculos = []
        this.title = 'Adicionando registro'
        this._service = VendaService
        this._veiculoService = VeiculoService
        if ($stateParams.id) {
            this.title = 'Editando registro'
            this._service.findById($stateParams.id)
                .then(data => {
                    this.record = data
                })
        }
        this._state = $state
        this._notify = Notification
        this.getVeiculos()
    }

    getVeiculos() {
        this._veiculoService.findAll()
            .then(data => {
                this.veiculos = data
            }).catch(erro => {
                console.log(erro)
            })
    }

    save() {
        this._service.save(this.record)
            .then(resp => {
                this._notify.success('Registro salvo com sucesso!')
                this._state.go('venda.list')
            }).catch(erro => {
                this._notify.error('Erro ao salvar o registro!')
            })
    }
}

FormController.$inject = ['$stateParams', '$state', 'VendaService', 'Notification', 'VeiculoService']
