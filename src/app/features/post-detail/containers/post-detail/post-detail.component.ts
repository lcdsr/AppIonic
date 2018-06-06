import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GenericHttpService } from '../../../../shared/generic-http/generic-http.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{

  id: number;
  private sub: any;
  post$: Observable<any[]>
  post:any;

  constructor(public http: GenericHttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.post = +params['post'] || 0;
      console.log(this.post);
      
      // In a real app: dispatch action to load the details here.
      this.post$ = this.http.get('https://jsonplaceholder.typicode.com','posts/'+this.id);
   });
   
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  goBack(){
    
  }
}
