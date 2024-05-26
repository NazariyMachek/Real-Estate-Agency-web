import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './helpers/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { OffersListComponent } from './components/shared/offers-list/offers-list.component';
import { OfferPageComponent } from './components/shared/offer-page/offer-page.component';
import { PreferencesComponent } from './components/shared/preferences/preferences.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { EditProfileComponent } from './components/shared/edit-profile/edit-profile.component';
import { CreateOfferComponent } from './components/shared/create-offer/create-offer.component';
import { RealtorListComponent } from './components/shared/realtor-list/realtor-list.component';
import { AgencyListComponent } from './components/shared/agency-list/agency-list.component';
import { AboutUsComponent } from './components/shared/about-us/about-us.component';
import { OfferEditComponent } from './components/shared/offer-edit/offer-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'offers', component: OffersListComponent, canActivate: [AuthGuard]},
  {path: 'offers/:id', component: OfferPageComponent, canActivate: [AuthGuard]},
  {path: 'preferences', component: PreferencesComponent, canActivate: [AuthGuard]},
  {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'createOffer', component: CreateOfferComponent, canActivate: [AuthGuard]},
  {path: 'realtors', component: RealtorListComponent, canActivate: [AuthGuard]},
  {path: 'agencies', component: AgencyListComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'editOffer/:id', component: OfferEditComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
