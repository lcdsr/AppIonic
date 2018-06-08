import { Component, OnInit, AfterViewInit, Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  
  @Input() coords: {latitude: number, longitude: number};

  constructor() { }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap(): void {
    const POSITION = {lat: this.coords.latitude, lng: this.coords.longitude};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: POSITION
    });
    const marker = new google.maps.Marker({
      position: POSITION,
      map: map
    });
  }
  

}
