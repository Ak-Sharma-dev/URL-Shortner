import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class shortenedURL{
  constructor(public result : string){}
}

@Injectable({
  providedIn: 'root'
})
export class GenerateURLShortnerService {

  constructor(public http : HttpClient) { }

  getShortURL(url : string){
    return this.http.get<shortenedURL>(`https://api.shrtco.de/v2/shorten?url=${url}`);
  }

}
