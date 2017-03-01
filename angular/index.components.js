import {FrontSliderComponent} from './app/components/front-slider/front-slider.component';
import {EditBlockComponent} from './app/components/edit_block/edit_block.component';
import {BlockListComponent} from './app/components/block-list/block-list.component';
import {EditCmspageComponent} from './app/components/edit-cmspage/edit-cmspage.component';
import {ListCmspageComponent} from './app/components/list-cmspage/list-cmspage.component';
import {CreateCmspageComponent} from './app/components/create-cmspage/create-cmspage.component';
import {CreateBlockComponent} from './app/components/create-block/create-block.component';
import {SliderListComponent} from './app/components/slider-list/slider-list.component';
import { CreateSliderFormComponent} from './app/components/create_slider_form/create_slider_form.component';
import { EditSliderFormComponent} from './app/components/edit_slider_form/edit_slider_form.component';
import { UserProfileComponent } from './app/components/user-profile/user-profile.component'
import { UserVerificationComponent } from './app/components/user-verification/user-verification.component'
import { ComingSoonComponent } from './app/components/coming-soon/coming-soon.component'
import { UserEditComponent } from './app/components/user-edit/user-edit.component'
import { UserPermissionsEditComponent } from './app/components/user-permissions-edit/user-permissions-edit.component'
import { UserPermissionsAddComponent } from './app/components/user-permissions-add/user-permissions-add.component'
import { UserPermissionsComponent } from './app/components/user-permissions/user-permissions.component'
import { UserRolesEditComponent } from './app/components/user-roles-edit/user-roles-edit.component'
import { UserRolesAddComponent } from './app/components/user-roles-add/user-roles-add.component'
import { UserRolesComponent } from './app/components/user-roles/user-roles.component'
import { UserListsComponent } from './app/components/user-lists/user-lists.component'
import { DashboardComponent } from './app/components/dashboard/dashboard.component'
import { NavSidebarComponent } from './app/components/nav-sidebar/nav-sidebar.component'
import { NavFrontHeaderComponent } from './app/components/nav-front-header/nav-front-header.component'
import { NavFrontFooterComponent } from './app/components/nav-front-footer/nav-front-footer.component'
import { NavHeaderComponent } from './app/components/nav-header/nav-header.component'
import { LoginLoaderComponent } from './app/components/login-loader/login-loader.component'
import { ResetPasswordComponent } from './app/components/reset-password/reset-password.component'
import { ForgotPasswordComponent } from './app/components/forgot-password/forgot-password.component'
import { LoginFormComponent } from './app/components/login-form/login-form.component'
import { RegisterFormComponent } from './app/components/register-form/register-form.component'

angular.module('app.components')
	.component('frontSlider', FrontSliderComponent)
	.component('editBlock', EditBlockComponent)
	.component('blockList', BlockListComponent)
	.component('editCmspage', EditCmspageComponent)
	.component('listCmspage', ListCmspageComponent)
	.component('createCmspage', CreateCmspageComponent)
	.component('createBlock', CreateBlockComponent)
	.component('sliderList', SliderListComponent)
	.component('createSliderForm', CreateSliderFormComponent)
  .component('editSliderForm', EditSliderFormComponent)
  .component('userProfile', UserProfileComponent)
  .component('userVerification', UserVerificationComponent)
  .component('comingSoon', ComingSoonComponent)
  .component('userEdit', UserEditComponent)
  .component('userPermissionsEdit', UserPermissionsEditComponent)
  .component('userPermissionsAdd', UserPermissionsAddComponent)
  .component('userPermissions', UserPermissionsComponent)
  .component('userRolesEdit', UserRolesEditComponent)
  .component('userRolesAdd', UserRolesAddComponent)
  .component('userRoles', UserRolesComponent)
  .component('userLists', UserListsComponent)
  .component('dashboard', DashboardComponent)
  .component('navSidebar', NavSidebarComponent)
  .component('navFrontHeader', NavFrontHeaderComponent)
  .component('navFrontFooter', NavFrontFooterComponent)
  .component('navHeader', NavHeaderComponent)
  .component('loginLoader', LoginLoaderComponent)
  .component('resetPassword', ResetPasswordComponent)
  .component('forgotPassword', ForgotPasswordComponent)
  .component('loginForm', LoginFormComponent)
  .component('registerForm', RegisterFormComponent)
