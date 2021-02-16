import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicApiService {

  constructor(private http: HttpClient) { }
  url: string;
  random: number;

  getComic(random):Observable<any>{
    return this.http.get<any>('https://xkcd.com/614/info.0.json');
  }
}
