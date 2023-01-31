import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {MetodaPlataDto} from "../model/MetodaPlataDto";
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

  getAll(): Observable<[ClasaZborDto]> {
    return this.http.get<[ClasaZborDto]>(URL.CLASA_ZBOR_URL_OLTP, httpOptions);
  }

  getAllWH(): Observable<[ClasaZborDto]> {
    return this.http.get<[ClasaZborDto]>(URL.CLASA_ZBOR_URL_WH, httpOptions);
  }

  add(body: any): Observable<ClasaZborDto> {
    return this.http.post<ClasaZborDto>(URL.CLASA_ZBOR_URL_OLTP, body, httpOptions);
  }
}
