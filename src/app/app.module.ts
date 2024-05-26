import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { OffersListComponent } from './components/shared/offers-list/offers-list.component';
import { OfferCardComponent } from './components/shared/offer-card/offer-card.component';
import { OfferPageComponent } from './components/shared/offer-page/offer-page.component';
import { OfferService } from './services/offer.service';
import { ReviewService } from './services/review.service';
import { UserService } from './services/user.service';
import { ReviewCardComponent } from './components/shared/review-card/review-card.component';
import { PreferencesComponent } from './components/shared/preferences/preferences.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { EditProfileComponent } from './components/shared/edit-profile/edit-profile.component';
import { CreateOfferComponent } from './components/shared/create-offer/create-offer.component';
import { RealtorListComponent } from './components/shared/realtor-list/realtor-list.component';
import { RealtorCardComponent } from './components/shared/realtor-card/realtor-card.component';
import { RealtorPageComponent } from './components/shared/realtor-page/realtor-page.component';
import { AgencyListComponent } from './components/shared/agency-list/agency-list.component';
import { AgencyCardComponent } from './components/shared/agency-card/agency-card.component';
import { AboutUsComponent } from './components/shared/about-us/about-us.component';
import { OfferEditComponent } from './components/shared/offer-edit/offer-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    OffersListComponent,
    OfferCardComponent,
    OfferPageComponent,
    ReviewCardComponent,
    PreferencesComponent,
    ProfileComponent,
    EditProfileComponent,
    CreateOfferComponent,
    RealtorListComponent,
    RealtorCardComponent,
    RealtorPageComponent,
    AgencyListComponent,
    AgencyCardComponent,
    AboutUsComponent,
    OfferEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    OfferService,
    ReviewService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
