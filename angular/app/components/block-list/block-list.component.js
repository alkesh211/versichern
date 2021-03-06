class BlockListController{
    constructor ($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
    'ngInject'
    this.API = API
    this.$state = $state

    let Sliders = this.API.service('block')
    //let Sliders = this.API.service('list', this.API.all('slider'))
    Sliders.getList()
      .then((response) => {
        let dataSet = response.plain()

        this.dtOptions = DTOptionsBuilder.newOptions()
          .withOption('data', dataSet)
          .withOption('createdRow', createdRow)
          .withOption('responsive', true)
          .withBootstrap()

        this.dtColumns = [
          DTColumnBuilder.newColumn('id').withTitle('ID'),
          DTColumnBuilder.newColumn('name').withTitle('Name'),
          DTColumnBuilder.newColumn('topic').withTitle('topic'),
          DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
            .renderWith(actionsHtml)
        ]

        this.displayTable = true
      })

    let createdRow = (row) => {
      $compile(angular.element(row).contents())($scope)      
    }

    let actionsHtml = (data) => {
      return `<a class="btn btn-xs btn-warning" ui-sref="app.edit_slider_form({id: ${data.id}})"><i class="fa fa-edit"></i></a>
              &nbsp
              <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})"><i class="fa fa-trash-o"></i></button>`
    }
  }

    $onInit(){
    }
}

export const BlockListComponent = {
    templateUrl: './views/app/components/block-list/block-list.component.html',
    controller: BlockListController,
    controllerAs: 'vm',
    bindings: {}
}
