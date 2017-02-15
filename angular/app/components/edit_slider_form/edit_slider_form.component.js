class EditSliderFormController {
  constructor (API, $state, $stateParams) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let sliderId = $stateParams.id

    let Sliders = this.API.service('slider')
    Sliders.getList()
      .then((response) => {
        let systemSlider = []
        let sliderResponse = response.plain()
        angular.forEach(sliderResponse, function (value) {
          if(sliderId == value.id){
            systemSlider.push({id: value.name, name: value.topic})
          }
        })

        this.slidereditdata = systemSlider

      })
  }

save1() {
    /*let Sliders = this.API.service('slider/create')*/
    let $state = this.$state
    alert(this.slidereditdata)
    this.slidereditdata.put()
    .then(function(response) {      
      let alert = { type: 'success', 'title': 'Success!', msg: 'Image Uploaded Successfully.' }
          $state.go($state.current, { alerts: alert})
    },
    function(response) { // optional
      let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
    });
    /*Sliders.post({
      'name': this.name,
      'topic': this.topic
    }).then(function(response) {      
      let alert = { type: 'success', 'title': 'Success!', msg: 'Image Uploaded Successfully.' }
          $state.go($state.current, { alerts: alert})
    }, 
    function(response) { // optional
      let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
    });*/
  }

  $onInit () {}
}

export const EditSliderFormComponent = {
    templateUrl: './views/app/components/edit_slider_form/edit_slider_form.component.html',
    controller: EditSliderFormController,
    controllerAs: 'vm',
    bindings: {}
}
