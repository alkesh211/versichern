class CreateSliderFormController {
  constructor (API, $state, $stateParams) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }
  }

  save1() {
    let Sliders = this.API.service('slider/create')
    let $state = this.$state
    Sliders.post({
      'name': this.name,
      'topic': this.topic
    }).then(function(response) {      
      let alert = { type: 'success', 'title': 'Success!', msg: 'Image Uploaded Successfully.' }
          $state.go($state.current, { alerts: alert})
    }, 
    function(response) { // optional
      let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
    });
  }

  $onInit () {}
}

export const CreateSliderFormComponent = {
    templateUrl: './views/app/components/create_slider_form/create_slider_form.component.html',
    controller: CreateSliderFormController,
    controllerAs: 'vm',
    bindings: {}
}
