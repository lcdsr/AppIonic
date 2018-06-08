import { Component, OnInit, NgZone } from '@angular/core';
import { Plugins, MotionEventResult, MotionOrientationEventResult, MotionPlugin , Capacitor } from '@capacitor/core';



@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  accel = null
  ori = null

  constructor(private zone: NgZone) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotionPage');
  }

  watchAccel() {
    const watchListener = Plugins.Motion.addListener('accel', (values) => {
      this.zone.run(() => {
        const v = {
          x: values.acceleration.x.toFixed(4),
          y: values.acceleration.y.toFixed(4),
          z: values.acceleration.z.toFixed(4)
        }
        this.accel = v;
      });
    });

    setTimeout(() => {
      watchListener.remove();
    }, 5000);
  }

  watchOrientation() {
    const watchListener = Plugins.Motion.addListener('orientation', (values) => {
      this.zone.run(() => {
        const v = {
          alpha: values.alpha.toFixed(4),
          beta: values.beta.toFixed(4),
          gamma: values.gamma.toFixed(4)
        }
        this.ori = v;
      });
    });
    setTimeout(() => {
      watchListener.remove();
    }, 5000);
  }

  ngOnInit() {
   
  }
  MotionEventResult
}
