import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './modules/register/register.component';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
