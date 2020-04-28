import {Component, OnInit} from "@angular/core";
import {IPosts} from "../iPosts";
import {APIserviceService } from "../apiservice.service";
import { from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './getrequest.component.html',
    styleUrls: ['./getrequest.component.scss'],
    providers: [APIserviceService]
})
export class GetrequestComponent implements OnInit {
    _postsArray: IPosts[];

    constructor(private apiSerivce: APIserviceService) {
    }

    getPosts(): void {
        this.apiSerivce.getPostsExample()
            .subscribe(
                resultArray => this._postsArray = resultArray,
                error => console.log("Error :: " + error)
            )
    }

    ngOnInit(): void {
        this.getPosts();
    }
}

 