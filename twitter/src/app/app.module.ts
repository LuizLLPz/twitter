import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from "./api.service";
import { AppComponent } from './app.component';
import { BaseUrlInterceptor } from "./base-url.interceptor";
import { RegisterComponent } from './modules/register/register.component';
import { MainComponent } from './modules/main/main.component';
import {FeedComponent} from "./modules/feed/feed.component";
import { PostCardComponent } from './modules/feed/post-card/post-card.component';
import {NgOptimizedImage} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    RegisterComponent,
    MainComponent,
    PostCardComponent,
    LoginComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
