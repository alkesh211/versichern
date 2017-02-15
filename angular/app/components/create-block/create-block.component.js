class CreateBlockController{
    constructor(API, $state, $stateParams){
        'ngInject';

        this.$state = $state
        this.formSubmitted = false
        this.API = API
        this.alerts = []

        if ($stateParams.alerts) {
          this.alerts.push($stateParams.alerts)
        }
    }

    $onInit(){
    }

    save() {
        let Sliders = this.API.service('block/create')
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
}

export const CreateBlockComponent = {
    templateUrl: './views/app/components/create-block/create-block.component.html',
    controller: CreateBlockController,
    controllerAs: 'vm',
    bindings: {}
}
