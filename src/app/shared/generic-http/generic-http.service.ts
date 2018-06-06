import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
 
  constructor(private http:HttpClient) { 
    
  }
  get(url:string, p:string): Observable<any[]>{
    console.log(url + '/' + p);
    return this.http.get(url + '/' + p).pipe(
      map((res: any) => res || [])
    );

    
  }
}
