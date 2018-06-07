import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericHttpService } from '../../../../shared/generic-http/generic-http.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-post-detail-modal',
  templateUrl: './post-detail-modal.component.html',
  styleUrls: ['./post-detail-modal.component.css']
})
export class PostDetailModalComponent implements OnInit {

  user$: Observable<any>;
  
  constructor(
    private _http: GenericHttpService,
    private _modalCtl: ModalController,
    private _navParams: NavParams
  ) { }

  ngOnInit() {
    const {user} = this._navParams.data;
    this.user$ = this._http.get('https://jsonplaceholder.typicode.com', 'users/' + user.id);

  }

  dismiss() {
    this._modalCtl.dismiss('toto');
  }
}
