import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  getAll(): Observable<[ZborDto]> {
    return this.http.get<[ZborDto]>(URL.ZBOR_URL_OLTP, httpOptions);
  }
}
