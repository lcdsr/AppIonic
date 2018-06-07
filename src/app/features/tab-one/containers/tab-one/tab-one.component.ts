import { Component, OnInit } from '@angular/core';
import { Plugins, GeolocationPosition, Capacitor } from '@capacitor/core';
import { Observable, of, from as fromPromise} from 'rxjs';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public coordinates$: Observable<GeolocationPosition>;
  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();
    
    this.watchPosition();
  }

  async getCurrentPosition(): Promise<Observable<GeolocationPosition|Error>> {

    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    
    console.log(Plugins.Geolocation.getCurrentPosition());
    
    return this.coordinates$ = fromPromise(Plugins.Geolocation.getCurrentPosition());
  }

  watchPosition() {
    const wait = Plugins.Geolocation.watchPosition({}, (position, err) => {
    })
  }
}
