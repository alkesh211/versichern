class NavFrontHeaderController {
  constructor (AclService, ContextService) {
    'ngInject'

    let navFrontHeader = this
    this.can = AclService.can

    ContextService.me(function (data) {
      navFrontHeader.userData = data
    })
  }

  $onInit () {}
}

export const NavFrontHeaderComponent = {
  templateUrl: './views/app/components/nav-front-header/nav-front-header.component.html',
  controller: NavFrontHeaderController,
  controllerAs: 'vm',
  bindings: {}
}
