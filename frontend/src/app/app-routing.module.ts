import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { GetrequestComponent } from './getrequest/getrequest.component';
import { HelloServerComponent } from '../app/hello-server/hello-server.component';
  import { from } from 'rxjs';
const routes: Routes = [
  { path: 'testA', component: TestAComponent },
  { path: 'testB', component: TestBComponent },
  { path: 'getRequest', component: GetrequestComponent },
  { path: 'helloServer', component: HelloServerComponent },


];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
