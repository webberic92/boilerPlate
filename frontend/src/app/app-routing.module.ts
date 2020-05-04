import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { GetrequestComponent } from './getrequest/getrequest.component';
import { HelloServerComponent } from '../app/hello-server/hello-server.component';
  import { from } from 'rxjs';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'getRequest', component: GetrequestComponent },
  { path: 'helloServer', component: HelloServerComponent },


];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
