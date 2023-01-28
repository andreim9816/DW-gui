import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {RezervareDto} from "../model/RezervareDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ZborService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<[RezervareDto]> {
    return this.http.get<[RezervareDto]>(URL.REZERVARE_URL_OLTP, httpOptions);
  }
}
