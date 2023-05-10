import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {AeronavaDto} from "../model/AeronavaDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class AeronavaService {
  constructor(private http: HttpClient) {
  }

  getAllGlobal(): Observable<[AeronavaDto]> {
    return this.http.get<[AeronavaDto]>(URL.AERONAVA_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[AeronavaDto]> {
    return this.http.get<[AeronavaDto]>(URL.AERONAVA_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[AeronavaDto]> {
    return this.http.get<[AeronavaDto]>(URL.AERONAVA_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<AeronavaDto> {
    return this.http.post<AeronavaDto>(URL.AERONAVA_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<AeronavaDto> {
    return this.http.post<AeronavaDto>(URL.AERONAVA_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<AeronavaDto> {
    return this.http.post<AeronavaDto>(URL.AERONAVA_URL_NON_LOW, body, httpOptions);
  }
}
