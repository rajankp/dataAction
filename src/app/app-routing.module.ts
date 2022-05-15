import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardingComponent } from './shared/components/on-boarding/on-boarding.component';
import { UserBasicDetailsComponent } from './shared/components/user-basic-details/user-basic-details.component';
import { UserAddressDetailsComponent } from './shared/components/user-address-details/user-address-details.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ro-landing-screen',
    pathMatch: 'full'
  },
  {
    path: 'ro-landing-screen',
    component: LandingScreenComponent,
  },
  {
    path: 'ro-onboarding',
    component: OnBoardingComponent,
    children: [
      {
        path: '', redirectTo: 'ro-user-basic', pathMatch: 'full'
      },
      {
        path: 'ro-user-basic', component: UserBasicDetailsComponent
      },
      {
        path: 'ro-user-address', component: UserAddressDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
