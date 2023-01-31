import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {ZborDto} from "../model/ZborDto";
import {ZborDtoWH} from "../model/ZborDtoWH";
import {TimpDtoWH} from "../model/TimpDtoWH";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class TimpService {
  constructor(private http: HttpClient) {
  }

  getAll(filter = '', sortOrder = 'desc',
         pageNumber = 0, pageSize = 20): Observable<[TimpDtoWH]> {
    return this.http.get<[TimpDtoWH]>(URL.TIMP_URL_WH,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize.toString())
      });
  }

}
