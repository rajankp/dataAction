import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnBoardingComponent } from './shared/components/on-boarding/on-boarding.component';
import { UserBasicDetailsComponent } from './shared/components/user-basic-details/user-basic-details.component';
import { UserAddressDetailsComponent } from './shared/components/user-address-details/user-address-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    OnBoardingComponent,
    UserBasicDetailsComponent,
    UserAddressDetailsComponent,
    LandingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
