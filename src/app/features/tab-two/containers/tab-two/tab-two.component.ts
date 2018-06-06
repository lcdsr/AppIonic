import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericHttpService } from '../../../../shared/generic-http/generic-http.service';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  public post$: Observable<any[]>;
  constructor(public http: GenericHttpService) { }

  ngOnInit():void {
    this.post$ = this.http.get('https://jsonplaceholder.typicode.com','posts');
  }

}
