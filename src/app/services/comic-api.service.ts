import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic } from '../interfaces/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicApiService {

  private api = 'https://xkcd.now.sh/?comic';

  constructor(private http: HttpClient ) { }

  getComic(id):Observable<Comic>{
 
    const header= new HttpHeaders()
    .append('Access-Control-Allow-Origin','*')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Headers','*')
    .append('cache-control','no-cache')

    return this.http.get<Comic>(`${this.api}=${id}`,{'headers':header});
  }
}
