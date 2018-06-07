import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GenericHttpService } from '../../../../shared/generic-http/generic-http.service';
import { ModalController } from '@ionic/angular';
import { PostDetailModalComponent } from '../post-detail-modal/post-detail-modal.component';

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

  constructor(public http: GenericHttpService, private _route: ActivatedRoute,private _router: Router , private _modalController: ModalController) { }

  ngOnInit() {

      this.post$ = this.http.get('https://jsonplaceholder.typicode.com','posts/'+this._route.snapshot.params.id);

   
  }
  back(){
    this._router.navigate([{outlet: 'two'}]);
  }
  async goUser(userID:number){
    console.log('userID', userID);
    const modal = await this._modalController.create({
      component: PostDetailModalComponent,
      componentProps: {
        user: {
          id: userID
        }
      }
    });
    // check on modal is dismiss
    modal.onDidDismiss(data => this.displayDismissData(data));
    // open modal
    return await modal.present();
  }
  
  displayDismissData(data) {
    console.log('Modal closing...', data);
  }
}
