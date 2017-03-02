class FrontSliderController{
    constructor($state, API){
        'ngInject';

        this.API = API
        this.$state = $state

        let Slider = this.API.service('slider')

        Slider.getList()
          .then((response) => {
            let sliderList = []
            let sliderResponse = response.plain()

            angular.forEach(sliderResponse, function (value) {
              sliderList.push({id: value.id, name: value.name, topic: value.topic})
            })

            this.sliderPermissions = sliderList
          })
    }

    $onInit(){
    }
}

export const FrontSliderComponent = {
    templateUrl: './views/app/components/front-slider/front-slider.component.html',
    controller: FrontSliderController,
    controllerAs: 'vm',
    bindings: {}
}
