import { Component, OnInit } from '@angular/core';
import { Plugins, GeolocationPosition, Capacitor } from '@capacitor/core';
import { Observable, of, from as fromPromise} from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public coordinates$: Observable<GeolocationPosition>;
  constructor(public loadingController: LoadingController) { }



   ngOnInit() {
   // demarer le loader....
   this.displayLoader()
   .then((loader: any) => {
     // get position
     return this.getCurrentPosition()
       // finaly dismiss() loader if position exist
       .then(position => (position) ? loader.dismiss() : null);
   })
   // do not forget to handle promise rejection
   .catch(err => console.log(err));
    
    this.watchPosition();
  }
  async displayLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait...',
      spinner: 'crescent',
    });
    await loading.present();
    return  loading
  }
 


  async getCurrentPosition(): Promise<any> {

    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition();
    
    console.log(Plugins.Geolocation.getCurrentPosition());
    
    this.coordinates$ = fromPromise(POSITION).pipe(
      switchMap((data: any) => of(data.coords)),
      tap(data => console.log(data))
    );
    return POSITION;
  }

  watchPosition() {
    const wait = Plugins.Geolocation.watchPosition({}, (position, err) => {
    })
  }
}
