import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {ClasaZborDto} from "../model/ClasaZborDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ClasaZborService {
  constructor(private http: HttpClient) {
  }

  getAllGlobal(): Observable<[ClasaZborDto]> {
    return this.http.get<[ClasaZborDto]>(URL.CLASA_ZBOR_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[ClasaZborDto]> {
    return this.http.get<[ClasaZborDto]>(URL.CLASA_ZBOR_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[ClasaZborDto]> {
    return this.http.get<[ClasaZborDto]>(URL.CLASA_ZBOR_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<ClasaZborDto> {
    return this.http.post<ClasaZborDto>(URL.CLASA_ZBOR_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<ClasaZborDto> {
    return this.http.post<ClasaZborDto>(URL.CLASA_ZBOR_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<ClasaZborDto> {
    return this.http.post<ClasaZborDto>(URL.CLASA_ZBOR_URL_NON_LOW, body, httpOptions);
  }
}
