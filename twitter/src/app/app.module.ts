import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ApiService } from "./api.service";
import { AppComponent } from './app.component';
import { BaseUrlInterceptor } from "./base-url.interceptor";
import { RegisterComponent } from './modules/register/register.component';
import { MainComponent } from './modules/main/main.component';
import {FeedComponent} from "./modules/feed/feed.component";
import { PostCardComponent } from './modules/feed/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    RegisterComponent,
    MainComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
