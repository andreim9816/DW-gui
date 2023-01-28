import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {ClasaZborDto} from "../model/ClasaZborDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class OperatorZborService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<[OperatorZborDto]> {
    return this.http.get<[OperatorZborDto]>(URL.OPERATOR_ZBOR_URL_OLTP, httpOptions);
  }

  add(body: any): Observable<OperatorZborDto> {
    return this.http.post<OperatorZborDto>(URL.OPERATOR_ZBOR_URL_OLTP, body, httpOptions);
  }
}
