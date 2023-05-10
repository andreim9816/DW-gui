import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {OperatorZborDto} from "../model/OperatorZborDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class OperatorZborService {
  constructor(private http: HttpClient) {
  }

  getAllGlobal(): Observable<[OperatorZborDto]> {
    return this.http.get<[OperatorZborDto]>(URL.OPERATOR_ZBOR_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[OperatorZborDto]> {
    return this.http.get<[OperatorZborDto]>(URL.OPERATOR_ZBOR_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[OperatorZborDto]> {
    return this.http.get<[OperatorZborDto]>(URL.OPERATOR_ZBOR_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<OperatorZborDto> {
    return this.http.post<OperatorZborDto>(URL.OPERATOR_ZBOR_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<OperatorZborDto> {
    return this.http.post<OperatorZborDto>(URL.OPERATOR_ZBOR_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<OperatorZborDto> {
    return this.http.post<OperatorZborDto>(URL.OPERATOR_ZBOR_URL_NON_LOW, body, httpOptions);
  }
}
