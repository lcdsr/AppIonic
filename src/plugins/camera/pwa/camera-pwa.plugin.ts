import { WebPlugin, Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const { Filesystem } = Plugins;

export class CameraPWA extends WebPlugin {

  public video: any;
  public button: any;
  public canvas: any;
  public img: any;
  public HTMLSelector: any;

  constructor(HTMLSelector: string) {
    // verifier si on a bien utiliser HTMLSelector pour constriure la class
    if (!HTMLSelector) {
      alert('Error: No HTML selector provided!!');
      return;
    }
    // sytaxe par defaut pour la definition d'un plugin
    super({
      name: 'Camera',
      platforms: ['web']
    });
    this.HTMLSelector = HTMLSelector;
  }

  async start(): Promise<MediaStream> {
    console.log('starting...');
    // definir les option de prise de vue de la caméra
    const constraints = {
      audio: false,
      video: { width: window.screen.width, height: window.screen.height
      }
    };
    if (navigator.mediaDevices === undefined) {
      (navigator as any).mediaDevices = {};
    }
    // utiliser la camera et handle les erreur si il y en a
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    // verifier si il y a une erreur
    if (mediaStream instanceof Error) {
      console.log('Error with web PWA Camera API:', mediaStream.message);
      return Promise.reject('Error with web PWA Camera API:' + mediaStream.message);
    }
    // construir les element DOM
    // qui sont néscéssaire pour le fontionnement du plugin en version WEB
    await this.buildDOMElement(mediaStream);
    // ajouter le "click" event pour plrendre la photo
    await this.addEvent();
    // terminer l'execution du plugin
    return Promise.resolve(mediaStream);
  }

  async buildDOMElement(mediaStream: MediaStream): Promise<any> {
    // create elements
    this.img = document.createElement('img');
    this.canvas = document.createElement('canvas');
    this.video = document.createElement('video');
    this.button = document.createElement('ion-button');
    // style elements
    this.video.style.position =  'absolute';
    this.video.style.zIndex = '1';
    this.canvas.style.display = 'none';
    this.button.innerHTML = 'TAKE';
    this.button.style.position = 'absolute';
    this.button.style.zIndex = '2';
    // add element to DOM
    document.body.insertAdjacentElement('afterbegin', this.canvas);
    document.body.insertAdjacentElement('afterbegin', this.video);
    document.body.insertAdjacentElement('afterbegin', this.button);
    // build video element
    // Older browsers may not have srcObject
    if ('srcObject' in this.video) {
      this.video.srcObject = mediaStream;
    } else {
      // Avoid using this in new browsers, as it is going away.
      (this.video as any).src = window.URL.createObjectURL(mediaStream);
    }
    this.video.onloadedmetadata = (e) => {
      this.video.play();
    };
  }

  async addEvent() {
    await document.addEventListener('click', (event) => {
      event.preventDefault();
      this.buildPicture();
    });
  }

  async buildPicture() {
    // definir les options de construction de l'image (dimention et résolution)
    // qui proviennent de la caméra
    // pour en faire une image
    await this.canvas.getContext('2d').drawImage(
      this.video,
      0,
      0,
      window.screen.width,
      window.screen.height,
      0,
      0,
      window.screen.width,
      window.screen.height
    );
    // créer l'image à partire de la camera
    this.img.src = await this.canvas.toDataURL('image/png');
    // style IMG element
    this.img.style.display = 'block';
    this.img.style.width = '100%';
    this.img.style.height = '100%';
    // verifier que l'élément DOM existe (pour mettre l'image de la photo)
    if (!document.querySelector(this.HTMLSelector)) {
      return console.log('Error: HTMLSelector not found', this.HTMLSelector);
    }
    // add picture to dom
    await document.querySelector(this.HTMLSelector + ' .scroll-inner').insertAdjacentElement('afterbegin', this.img);
    // remove all camera element unusable
    this.video.remove();
    this.canvas.remove();
    this.button.remove();
    // fin.
  }
}