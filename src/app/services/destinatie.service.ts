import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {DestinatieDto} from "../model/DestinatieDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class DestinatieService {
  constructor(private http: HttpClient) {
  }

  getAllGlobal(): Observable<[DestinatieDto]> {
    return this.http.get<[DestinatieDto]>(URL.DESTINATIE_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[DestinatieDto]> {
    return this.http.get<[DestinatieDto]>(URL.DESTINATIE_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[DestinatieDto]> {
    return this.http.get<[DestinatieDto]>(URL.DESTINATIE_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<DestinatieDto> {
    return this.http.post<DestinatieDto>(URL.DESTINATIE_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<DestinatieDto> {
    return this.http.post<DestinatieDto>(URL.DESTINATIE_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<DestinatieDto> {
    return this.http.post<DestinatieDto>(URL.DESTINATIE_URL_NON_LOW, body, httpOptions);
  }
}
