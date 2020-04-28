import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { GetrequestComponent } from './getrequest/getrequest.component';
import { HelloServerComponent } from './hello-server/hello-server.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent,
    GetrequestComponent,
    HelloServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
