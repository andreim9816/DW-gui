import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {MetodaPlataDto} from "../model/MetodaPlataDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class MetodaPlataService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<[MetodaPlataDto]> {
    return this.http.get<[MetodaPlataDto]>(URL.METODA_PLATA_URL_OLTP, httpOptions);
  }

  add(body: any): Observable<MetodaPlataDto> {
    return this.http.post<MetodaPlataDto>(URL.METODA_PLATA_URL_OLTP, body, httpOptions);
  }
}
