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

  getAll(filter = '', sortOrder = 'desc',
         pageNumber = 0, pageSize = 20): Observable<[ZborDto]> {
    return this.http.get<[ZborDto]>(URL.ZBOR_URL_OLTP,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize.toString())
      });
  }

  add(body: any): Observable<ZborDto> {
    return this.http.post<ZborDto>(URL.ZBOR_URL_OLTP, body, httpOptions);
  }
}
