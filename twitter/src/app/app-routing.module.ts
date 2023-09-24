import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './modules/register/register.component';
import { MainComponent } from './modules/main/main.component';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'userProfile', component: UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
