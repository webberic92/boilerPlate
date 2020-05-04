import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

 @Injectable({
     providedIn: 'root'
 })
 export class LoginService {
 

constructor(private http:HttpClient) { }

login(username:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
}

  getUsers() {
    let username='admin'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return  this.http.get("http://localhost:8080/getUsers",{headers});
  }
}
