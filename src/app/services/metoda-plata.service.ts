import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
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

  getAllGlobal(): Observable<[MetodaPlataDto]> {
    return this.http.get<[MetodaPlataDto]>(URL.METODA_PLATA_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[MetodaPlataDto]> {
    return this.http.get<[MetodaPlataDto]>(URL.METODA_PLATA_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[MetodaPlataDto]> {
    return this.http.get<[MetodaPlataDto]>(URL.METODA_PLATA_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<MetodaPlataDto> {
    return this.http.post<MetodaPlataDto>(URL.METODA_PLATA_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<MetodaPlataDto> {
    return this.http.post<MetodaPlataDto>(URL.METODA_PLATA_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<MetodaPlataDto> {
    return this.http.post<MetodaPlataDto>(URL.METODA_PLATA_URL_NON_LOW, body, httpOptions);
  }
}
