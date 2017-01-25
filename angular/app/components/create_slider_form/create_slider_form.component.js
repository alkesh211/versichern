/*class CreateSliderFormController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
    }

    submit(){
      var data = {
        name: this.name,
        topic: this.topic
      };
      
       this.API.all('slider').post(data).then(() => {
         this.ToastService.show('Slider added successfully');
       });
    }
}*/

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

  save () {
    //this.$state.go(this.$state.current, {}, { alerts: 'test' })
    //if (isValid) {
      //let Sliders = this.API.service('create', this.API.all('slider'))
      let Sliders = this.API.service('slider/create')
      let $state = this.$state

      Sliders.post({
        'name': this.name,
        'topic': this.topic
      }).then(function () {
        let alert = { type: 'success', 'title': 'Success!', msg: 'Slider has been added.' }
        $state.go($state.current, { alerts: alert})
      }, function (response) {
        let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
        $state.go($state.current, { alerts: alert})
      })
    /*} else {
      this.formSubmitted = true
    }*/
  }

  save1() {
    alert('xxx')
    let Sliders = this.API.service('slider/create')
    let $state = this.$state

    Sliders.post({
    'name': this.name,
    'topic': this.topic
    }).then(function () {
    let alert = { type: 'success', 'title': 'Success!', msg: 'Slider has been added.' }
    $state.go($state.current, { alerts: alert})
    }, function (response) {
    let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
    $state.go($state.current, { alerts: alert})
    })
  }

  $onInit () {}
}

export const CreateSliderFormComponent = {
    templateUrl: './views/app/components/create_slider_form/create_slider_form.component.html',
    controller: CreateSliderFormController,
    controllerAs: 'vm',
    bindings: {}
}
