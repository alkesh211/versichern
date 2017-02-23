class NavFrontSidebarController {
  constructor (AclService, ContextService) {
    'ngInject'

    let navFrontSideBar = this
    this.can = AclService.can

    ContextService.me(function (data) {
      navFrontSideBar.userData = data
    })
  }

  $onInit () {}
}

export const NavFrontSidebarComponent = {
  templateUrl: './views/app/components/nav-front-sidebar/nav-front-sidebar.component.html',
  controller: NavFrontSidebarController,
  controllerAs: 'vm',
  bindings: {}
}
