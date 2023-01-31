import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {DestinatieDto} from "../model/DestinatieDto";
import {MetodaPlataDto} from "../model/MetodaPlataDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class DestinatieService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<[DestinatieDto]> {
    return this.http.get<[DestinatieDto]>(URL.DESTINATIE_URL_OLTP, httpOptions);
  }

  getAllWH(): Observable<[DestinatieDto]> {
    return this.http.get<[DestinatieDto]>(URL.DESTINATIE_URL_WH, httpOptions);
  }

  add(body: any): Observable<DestinatieDto> {
    return this.http.post<DestinatieDto>(URL.DESTINATIE_URL_OLTP, body, httpOptions);
  }
}
