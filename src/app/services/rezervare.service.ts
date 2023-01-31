import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {RezervareDto} from "../model/RezervareDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class RezervareService {
  constructor(private http: HttpClient) {
  }

  getAll(filter = '', sortOrder = 'desc',
         pageNumber = 0, pageSize = 20): Observable<[RezervareDto]> {
    return this.http.get<[RezervareDto]>(URL.REZERVARE_URL_OLTP,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize.toString())
      });
  }

  add(body: any): Observable<RezervareDto> {
    return this.http.post<RezervareDto>(URL.REZERVARE_URL_OLTP, body, httpOptions);
  }
}
