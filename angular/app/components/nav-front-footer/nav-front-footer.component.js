class NavFrontFooterController {
  constructor (AclService, ContextService) {
    'ngInject'

    let navFrontFooter = this
    this.can = AclService.can

    ContextService.me(function (data) {
      navFrontFooter.userData = data
    })
  }

  $onInit () {}
}

export const NavFrontFooterComponent = {
  templateUrl: './views/app/components/nav-front-footer/nav-front-footer.component.html',
  controller: NavFrontFooterController,
  controllerAs: 'vm',
  bindings: {}
}
