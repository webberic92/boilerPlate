import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetrequestComponent } from './getrequest/getrequest.component';
import { HelloServerComponent } from './hello-server/hello-server.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { APIserviceService } from './Services/apiservice.service';
import { LoginService } from './Services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    GetrequestComponent,
    HelloServerComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [APIserviceService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
