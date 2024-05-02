import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InternComponent } from './intern/intern.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { InternLoginComponent } from './intern-login/intern-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InternDashboardComponent } from './intern-dashboard/intern-dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoute: Routes=[
  {path:'', component:HomeComponent},
  {path:'intern', component:InternComponent},
  {path:'admin', component:AdminLoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'intern-login', component:InternLoginComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'intern-dashboard', component:InternDashboardComponent},
  {path:'features', component:FeaturesComponent},
  {path:'profile',  component:ProfileComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     HomeComponent,
     FooterComponent,
     InternComponent,
     AdminLoginComponent,
     InternLoginComponent,
     SignUpComponent,
     AdminDashboardComponent,
     InternDashboardComponent,
    FeaturesComponent,
    ProfileComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
