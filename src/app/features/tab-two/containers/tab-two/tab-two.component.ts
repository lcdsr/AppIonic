import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericHttpService } from '../../../../shared/generic-http/generic-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css']
})
export class TabTwoComponent implements OnInit {

  public post$: Observable<any>;
  constructor(public http: GenericHttpService, private router: Router) { }

  ngOnInit():void {
    this.post$ = this.http.get('https://jsonplaceholder.typicode.com','posts');
  }

  goPost(post:any):void{
    //ICI ON FAIT LE REDIRECT SUR LA NOUVELLE ROUTE
    //this.routeur.navigate(['/detail', mettre l'id], post (sa envoi directement lobjet plus besoin de faire une requete au httpmodule))
    this.router.navigate(['/detail/'+post.id],post );
    // this.router.navigate(['/detail/'+post.id], { queryParams: post  });
    console.log('::',post);
  }
}
