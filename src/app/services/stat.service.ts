import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {StatDto} from "../model/StatDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class StatService {
  constructor(private http: HttpClient) {
  }

  getAllGlobal(): Observable<[StatDto]> {
    return this.http.get<[StatDto]>(URL.STAT_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[StatDto]> {
    return this.http.get<[StatDto]>(URL.STAT_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[StatDto]> {
    return this.http.get<[StatDto]>(URL.STAT_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<StatDto> {
    return this.http.post<StatDto>(URL.STAT_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<StatDto> {
    return this.http.post<StatDto>(URL.STAT_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<StatDto> {
    return this.http.post<StatDto>(URL.STAT_URL_NON_LOW, body, httpOptions);
  }
}
