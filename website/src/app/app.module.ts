import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './faq/faq.component';
const appRoutes:Routes =[
  {path:'', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contact', component: ContactComponent},
  {path:'support', component: SupportComponent},
  {path:'faq', component: FaqComponent},
  {path:'register', component: RegisterComponent},
  {path:'register/sign-up', component: SignupComponent},



  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    SignupComponent,
    AboutusComponent,
    SupportComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }