import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";

 import {IPosts} from "../iPosts";
 import {Message} from "../Message";



 
 @Injectable()
 export class APIserviceService {
 
     private theirUrl = "https://jsonplaceholder.typicode.com/posts";
     private OurUrl = "http://localhost:8080/hello";

     constructor(private http: Http) {
     }
 
     getPostsExample(): Observable<IPosts[]> {
         return this.http
             .get(this.theirUrl)
             .map((response: Response) => {
                 return <IPosts[]>response.json();
             })
             .catch(this.handleError);
     }

     getPostsToOurServer(): Observable<Message[]> {
        return this.http
            .get(this.OurUrl)
            .map((response: Response) => {
                return <Message[]>response.json();
            })
            .catch(this.handleError);
    }


 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 } 
 //</IPosts[]></IPosts[]>
