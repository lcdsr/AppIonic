import { Component, OnInit } from '@angular/core';
import { Plugins, GeolocationPosition, Capacitor } from '@capacitor/core';
import { Observable, of, from as fromPromise} from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public coordinates$: Observable<GeolocationPosition>;
  constructor(public loadingController: LoadingController, public alertController: AlertController) { }



   ngOnInit() {
   // demarer le loader....
   this.displayLoader()
   .then((loader: any) => {
     // get position
     return this.getCurrentPosition()
       .then(position => {
         // fermer loader + return position
         loader.dismiss();
         return position;
       })
       // if error
       .catch(err => {
         // fermer loader + return NULL
         loader.dismiss();
         return null;
       });
   })
   .then(position => (position instanceof Error) ? this.presentAlert(position.message) : null)
   // do not forget to handle promise rejection
   .catch(err => {
      this.presentAlert(err.message)
   });
    
    //this.watchPosition();
  }
  async displayLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait...',
      spinner: 'crescent',
    });
    await loading.present();
    return  loading
  }
 
  async  presentAlert(error:string) : Promise<HTMLIonAlertElement> {
  
    const alert = await this.alertController.create({
      header: 'Alert',
      message: error,
      buttons: ['OK']
    });
     await alert.present();
     return alert;
  }


  async getCurrentPosition(): Promise<any> {

    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    // handle Capacitor Errors
    .catch(err => {
      console.log('ERR', err);
      return new Error(err.message || 'message perso');
    });
    
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
