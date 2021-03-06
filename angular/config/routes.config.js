export function RoutesConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'

  var getView = (viewName) => {
    return `./views/app/pages/${viewName}/${viewName}.page.html`
  }

  var getLayout = (layout) => {
    return `./views/app/pages/layout/${layout}.page.html`
  }

  $urlRouterProvider.otherwise('/home')

  $stateProvider	
    .state('app', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header')
        },
        'footer@app': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue sidebar-mini'
      }
    })
    .state('home', {
      url: '/home',
      data: {
        auth: false
      },
      views: {        
        'main': {
          templateUrl: getView('home')
        },
        'front-slider': {
          templateUrl: getView('front-slider')
        },
        'header': {
          templateUrl: getView('front-header')
        },
        'footer': {
          templateUrl: getView('front-footer')
        }
      }
    })	
    .state('app.landing', {
      url: '/admin',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    })
    .state('app.comingsoon', {
      url: '/comingsoon',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<coming-soon></coming-soon>'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-profile></user-profile>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userlist', {
      url: '/user-lists',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-lists></user-lists>'
        }
      }
    })
    .state('app.useredit', {
      url: '/user-edit/:userId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-edit></user-edit>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })
    
    .state('app.create_slider_form', {
      url: '/create-slider',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<create_slider_form></create_slider_form>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })

    .state('app.edit_slider_form', {
      url: '/edit-slider/:id',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<edit_slider_form></edit_slider_form>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })
    .state('app.userroles', {
      url: '/user-roles',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles></user-roles>'
        }
      }
    })
    .state('app.userpermissions', {
      url: '/user-permissions',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions></user-permissions>'
        }
      }
    })
    .state('app.userpermissionsadd', {
      url: '/user-permissions-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-add></user-permissions-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userpermissionsedit', {
      url: '/user-permissions-edit/:permissionId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-edit></user-permissions-edit>'
        }
      },
      params: {
        alerts: null,
        permissionId: null
      }
    })
    .state('app.userrolesadd', {
      url: '/user-roles-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-add></user-roles-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userrolesedit', {
      url: '/user-roles-edit/:roleId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-edit></user-roles-edit>'
        }
      },
      params: {
        alerts: null,
        roleId: null
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'layout': {
          templateUrl: getView('login')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        registerSuccess: null,
        successMsg: null
      }
    })
    .state('loginloader', {
      url: '/login-loader',
      views: {
        'layout': {
          templateUrl: getView('login-loader')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'layout': {
          templateUrl: getView('register')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition register-page'
      }
    })
    .state('userverification', {
      url: '/userverification/:status',
      views: {
        'layout': {
          templateUrl: getView('user-verification')
        }
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        status: null
      }
    })
    .state('forgot_password', {
      url: '/forgot-password',
      views: {
        'layout': {
          templateUrl: getView('forgot-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('reset_password', {
      url: '/reset-password/:email/:token',
      views: {
        'layout': {
          templateUrl: getView('reset-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('app.logout', {
      url: '/logout',
      views: {
        'main@app': {
          controller: function ($rootScope, $scope, $auth, $state, AclService) {
            $auth.logout().then(function () {
              delete $rootScope.me
              AclService.flushRoles()
              AclService.setAbilities({})
              $state.go('login')
            })
          }
        }
      }
    })
    .state('app.create_slider', {
      url: '/create-slider',
      views: {
        'main@app': {
          templateUrl: getView('create_slider')
        }
      }
    })
    .state('app.listslider', {
      url: '/list-slider',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<slider-list></slider-list>'
        }
      }
    })
    .state('app.create-block', {
      url: '/create-block',
      views: {
        'main@app': {
          templateUrl: getView('create-block')
        }
      }
    })

    .state('app.listblock', {
      url: '/list-block',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<block-list></block-list>'
        }
      }
    })

    .state('app.edit_block', {
      url: '/edit-block/:id',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<edit_block></edit_block>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })

    .state('app.create-cmspage', {
      url: '/create-cmspage',
      views: {
        'main@app': {
          templateUrl: getView('create-cmspage')
        }
      }
    })
    .state('app.list-cmspage', {
      url: '/list-cmspage',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<list-cmspage></list-cmspage>'
        }
      }
    })
    .state('app.edit-cmspage', {
      url: '/edit-cmspage/:userId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<edit-cmspage></edit-cmspage>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })
}
