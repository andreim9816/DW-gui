import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {ZborDto} from "../model/ZborDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ZborService {
  constructor(private http: HttpClient) {
  }

  getAllGlobal(filter = '', sortOrder = 'desc',
               pageNumber = 0, pageSize = 20): Observable<[ZborDto]> {
    return this.http.get<[ZborDto]>(URL.ZBOR_URL_GLOBAL,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize.toString())
      });
  }

  getAllLow(filter = '', sortOrder = 'desc',
            pageNumber = 0, pageSize = 20): Observable<[ZborDto]> {
    return this.http.get<[ZborDto]>(URL.ZBOR_URL_LOW,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize.toString())
      });
  }

  getAllNonLow(filter = '', sortOrder = 'desc',
               pageNumber = 0, pageSize = 20): Observable<[ZborDto]> {
    return this.http.get<[ZborDto]>(URL.ZBOR_URL_NON_LOW,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize.toString())
      });
  }

  addGlobal(body: any): Observable<ZborDto> {
    return this.http.post<ZborDto>(URL.ZBOR_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<ZborDto> {
    return this.http.post<ZborDto>(URL.ZBOR_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<ZborDto> {
    return this.http.post<ZborDto>(URL.ZBOR_URL_NON_LOW, body, httpOptions);
  }
}
