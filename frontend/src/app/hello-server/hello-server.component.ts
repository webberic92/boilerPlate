import { Component, OnInit } from '@angular/core';
import {Message} from "../Message";
import {APIserviceService } from "../apiservice.service";
import { from } from 'rxjs';


@Component({
  selector: 'app-hello-server',
  templateUrl: './hello-server.component.html',
  styleUrls: ['./hello-server.component.scss'],
  providers: [APIserviceService]

})
export class HelloServerComponent implements OnInit {

  _messagesArray: Message[];


  constructor(private apiSerivce: APIserviceService) {
  }

  getPosts(): void {
    this.apiSerivce.getPostsToOurServer()
        .subscribe(
            resultArray => this._messagesArray = resultArray,
            error => console.log("Error :: " + error)
        )
}


  ngOnInit(): void {
    this.getPosts();

  }

}
