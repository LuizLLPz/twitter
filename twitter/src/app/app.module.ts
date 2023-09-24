import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { RegisterComponent } from './modules/register/register.component';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
